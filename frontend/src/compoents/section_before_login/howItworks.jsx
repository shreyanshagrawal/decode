// HowItWorks.jsx
import React from 'react';

const steps = [
  {
    step: '01',
    title: 'Create Your Profile',
    description: 'Tell us about your skills, interests, and what you want to learn or teach',
  },
  {
    step: '02',
    title: 'Get Matched',
    description: 'Our AI finds the perfect mentor-mentee pairs based on skills, goals, and availability',
  },
  {
    step: '03',
    title: 'Connect & Learn',
    description: 'Start chatting, join office hours, and get guidance on your first contributions',
  },
  {
    step: '04',
    title: 'Make Impact',
    description: 'Submit your first PR, get feedback, and grow into an active open source contributor',
  },
];

const HowItWorks = () => {
  return (
    <section className="min-h-screen bg-white px-12 py-16">
      <div className="max-w-screen-3xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded shadow-md">
              <h3 className="text-3xl font-bold mb-4">{step.step}</h3>
              <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
              <p className="text-lg text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;