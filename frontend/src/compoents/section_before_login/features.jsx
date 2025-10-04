// Features.jsx
import React from 'react';

const features = [
  {
    title: 'Smart Matching',
    description: 'AI-powered matching connects you with mentors who share your interests and can guide you effectively',
  },
  {
    title: '1:1 & Group Chat',
    description: 'Private mentorship sessions or join office hours with multiple mentors and learners',
  },
  {
    title: 'Issue Discovery',
    description: "Find curated 'good first issues' tailored to your skill level and learning goals",
  },
  {
    title: 'Skill-Based Profiles',
    description: 'Showcase your expertise or learning path with detailed profiles that match you intelligently',
  },
  {
    title: 'Feedback & Growth',
    description: 'Track your progress with session notes, ratings, and measurable contribution outcomes',
  },
  {
    title: 'Retention Support',
    description: 'Structured onboarding ensures first contribution leads to long-term engagement',
  },
];

const Features = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-12 py-16">
      <div className="max-w-screen-3xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">Everything You Need to Succeed</h2>
        <div className="grid grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-lg text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;