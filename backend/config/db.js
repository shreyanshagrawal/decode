import mongoose from "mongoose";

// Registry of named mongoose connections
const connectionRegistry = new Map(); // name -> mongoose.Connection

function parseClusterConfig() {
    // Supports either:
    // - MONGO_URIS: "primary=mongodb://...;eu=mongodb://..."
    // - DB_CLUSTERS: "primary,eu" with envs MONGO_URI_PRIMARY, MONGO_URI_EU
    // - MENTOR_URI or MONGO_URI (single cluster fallback => "primary")
    const entries = [];

    const urisList = process.env.MONGO_URIS;
    if (urisList && urisList.trim().length > 0) {
        for (const pair of urisList.split(";")) {
            const [rawName, ...rest] = pair.split("=");
            const name = (rawName || "").trim();
            const uri = rest.join("=").trim();
            if (name && uri) entries.push({ name, uri });
        }
    }

    if (entries.length === 0) {
        const rawNames = process.env.DB_CLUSTERS;
        if (rawNames && rawNames.trim().length > 0) {
            for (const rawName of rawNames.split(",")) {
                const name = rawName.trim();
                if (!name) continue;
                const envKey = `MONGO_URI_${name.toUpperCase()}`;
                const uri = process.env[envKey];
                if (!uri) {
                    console.warn(`Missing ${envKey} for cluster '${name}'`);
                    continue;
                }
                entries.push({ name, uri });
            }
        }
    }

    if (entries.length === 0) {
        const singleUri = process.env.MENTOR_URI || process.env.MONGO_URI;
        if (singleUri) entries.push({ name: "primary", uri: singleUri });
    }

    return entries;
}

export async function connectClusters() {
    const clusterEntries = parseClusterConfig();
    if (clusterEntries.length === 0) {
        throw new Error(
            "No MongoDB URI(s) found. Define MONGO_URIS or DB_CLUSTERS + MONGO_URI_<NAME> or MONGO_URI/MENTOR_URI."
        );
    }

    const connectPromises = clusterEntries.map(async ({ name, uri }) => {
        if (connectionRegistry.has(name)) return connectionRegistry.get(name);
        const connection = mongoose.createConnection(uri);
        // Await initial connection
        await connection.asPromise();
        connection.on("error", (err) => {
            console.error(`[mongo:${name}] error`, err);
        });
        connection.on("disconnected", () => {
            console.warn(`[mongo:${name}] disconnected`);
        });
        console.log(`[mongo:${name}] connected: ${connection.host}`);
        connectionRegistry.set(name, connection);
        return connection;
    });

    await Promise.all(connectPromises);
}

export function getConnection(requestedName = "primary") {
    if (connectionRegistry.size === 0) {
        throw new Error("Database clusters not initialized. Call connectClusters() first.");
    }

    if (requestedName && connectionRegistry.has(requestedName)) {
        return connectionRegistry.get(requestedName);
    }

    // Fallbacks: DEFAULT_DB_CLUSTER or the sole/first available connection
    const defaultName = process.env.DEFAULT_DB_CLUSTER;
    if (defaultName && connectionRegistry.has(defaultName)) {
        return connectionRegistry.get(defaultName);
    }

    if (connectionRegistry.size === 1) {
        return [...connectionRegistry.values()][0];
    }

    // As last resort, return "primary" if present or undefined
    return connectionRegistry.get("primary");
}

export function getClusterNames() {
    return [...connectionRegistry.keys()];
}

export function getModel(connection, modelName, schema) {
    if (!connection) throw new Error("Connection is required to get model");
    if (connection.models[modelName]) return connection.models[modelName];
    return connection.model(modelName, schema);
}

export function getClusterFromRequest(req) {
    const header = req.headers?.["x-cluster"] || req.headers?.["x-db-cluster"];
    const query = req.query?.cluster;
    const selected = header || query || process.env.DEFAULT_DB_CLUSTER || "primary";
    return String(selected);
}

