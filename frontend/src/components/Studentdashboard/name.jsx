import { useState, useEffect } from "react";

export default function useUsername() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const nameFromStorage = localStorage.getItem("studentName");
    if (nameFromStorage) {
      setUsername(nameFromStorage);
    }
  }, []);

  return username;
}

