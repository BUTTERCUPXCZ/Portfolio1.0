import React from 'react';
import Reveal from './Reveal';
import StaggeredReveal from './StaggeredReveal';
import ScrollTriggeredIcon from './ScrollTriggeredIcon';
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMysql,
  DiGithubBadge,
} from 'react-icons/di';
import { SiExpress } from 'react-icons/si';

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'HTML', icon: <DiHtml5 className="text-orange-600" /> },
      { name: 'CSS', icon: <DiCss3 className="text-blue-600" /> },
      { name: 'JavaScript', icon: <DiJavascript1 className="text-yellow-500" /> },
      { name: 'React', icon: <DiReact className="text-blue-500" /> },
    ],
  },
  {
    category: 'Fullstack',
    technologies: [
      { name: 'Node.js', icon: <DiNodejsSmall className="text-green-500" /> },
      { name: 'Express.js', icon: <SiExpress className="text-white" /> },
      { name: 'MySQL', icon: <DiMysql className="text-green-600" /> },
      { name: 'React', icon: <DiReact className="text-blue-500" /> },
      { name: 'GitHub', icon: <DiGithubBadge className="text-gray-600" /> },
    ],
  },
];

const Skills = () => {
  return (
    <>
      <div
        className="max-w-[1200px] mx-auto flex flex-col items-center justify-center px-6 text-gray-200 py-20"
        id="skills"
      >
       <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with modern technologies and cutting-edge frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <StaggeredReveal key={index} staggerDelay={index * 0.2}>
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-2xl font-bold mb-6 text-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  {skill.category}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {skill.technologies.map((tech, indx) => (
                    <div key={indx} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/40 hover:bg-gray-700/40 transition-colors duration-200">
                      <ScrollTriggeredIcon delay={indx * 0.1}>
                        <span className="text-3xl">{tech.icon}</span>
                      </ScrollTriggeredIcon>
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </StaggeredReveal>
          ))}
        </div>
        </Reveal>
      </div>
    </>
  );
};

export default Skills;
