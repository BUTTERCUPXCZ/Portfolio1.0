import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const experiences = [
  {
    company: 'First Company',
    period: '2020 - Present',
    description: 'Description of your experience in this company.',
  },
  {
    company: 'Second Company',
    period: '2018 - 2020',
    description: 'Description of your experience in this company.',
  },
  {
    company: 'Third Company',
    period: '2016 - 2018',
    description: 'Description of your experience in this company.',
  },
  {
    company: 'Fourth Company',
    period: '2014 - 2016',
    description: 'Description of your experience in this company.',
  },
];

const Experience = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-8 text-gray-200 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12">Experience</h1>
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {experiences.map((experience, index) => (
          <Reveal>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="border border-blue-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-blue-700/10"
          >
            <h2 className="text-2xl font-semibold mb-2">{experience.company}</h2>
            <p className="text-sm text-gray-400 mb-4">{experience.period}</p>
            <p className="text-gray-400 mt-4">{experience.description}</p>
          </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
