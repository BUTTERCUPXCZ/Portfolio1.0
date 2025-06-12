import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const experiences = [
  {
    company: 'Computer Science Student',
    period: '2022 - Present',
    description: 'Currently pursuing a Bachelor\'s degree in Computer Science, focusing on software engineering principles and full-stack development.',
  },
  {
    company: 'Personal Projects',
    period: '2022 - Present',
    description: 'Developing various applications including grading systems (Web based), bus management systems (Java application), and mobile apps to enhance my technical skills (Flutter).',
  },
];

const Experience = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-8 text-gray-200 py-20" id="experience">
      <Reveal>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">Experience</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            My journey in software development and technology
          </p>
        </div>
        
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {experiences.map((experience, index) => (
            <Reveal key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-2 text-blue-400 group-hover:text-blue-300 transition-colors">{experience.company}</h2>
                  <p className="text-sm text-gray-400 mb-4 font-medium">{experience.period}</p>
                  <p className="text-gray-300 leading-relaxed">{experience.description}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </motion.div>
      </Reveal>
    </div>
  );
};

export default Experience;
