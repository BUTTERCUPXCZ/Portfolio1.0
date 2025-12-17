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
  DiPostgresql,
} from 'react-icons/di';
import { SiExpress, SiFigma, SiGithub, SiPrisma, SiReact, SiNestjs, SiRedis, SiOpenai, SiGooglegemini, SiAnthropic } from 'react-icons/si';
import { FaLayerGroup } from 'react-icons/fa';

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'HTML', icon: <DiHtml5 className="text-orange-500" /> },
      { name: 'CSS', icon: <DiCss3 className="text-blue-500" /> },
      { name: 'JavaScript', icon: <DiJavascript1 className="text-yellow-400" /> },
      { name: 'React', icon: <DiReact className="text-cyan-400" /> },
      { name: 'TanStack', icon: <SiReact className="text-red-500" /> },
      { name: 'Shadcn UI', icon: <FaLayerGroup className="text-white" /> },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', icon: <DiNodejsSmall className="text-green-500" /> },
      { name: 'Express.js', icon: <SiExpress className="text-white" /> },
      { name: 'NestJS', icon: <SiNestjs className="text-red-600" /> },
      { name: 'Redis', icon: <SiRedis className="text-red-500" /> },
      { name: 'MySQL', icon: <DiMysql className="text-blue-600" /> },
      { name: 'Postgres', icon: <DiPostgresql className="text-blue-400" /> },
      { name: 'Prisma', icon: <SiPrisma className="text-white" /> },
    ],
  },
  {
    category: 'Tools',
    technologies: [
      { name: 'Git', icon: <SiGithub className="text-orange-600" /> },
      { name: 'GitHub', icon: <SiGithub className="text-white" /> },
      { name: 'ChatGPT', icon: <SiOpenai className="text-green-500" /> },
      { name: 'Claude', icon: <SiAnthropic className="text-orange-400" /> },
      { name: 'Gemini Pro', icon: <SiGooglegemini className="text-blue-500" /> },
    ],
  },
];

const Skills = () => {
  return (
    <>
      <div
        className="max-w-[1200px] mx-auto flex flex-col items-center justify-center px-6 text-zinc-200 py-20"
        id="skills"
      >
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Technical <span className="text-zinc-500">Arsenal</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <StaggeredReveal key={index} staggerDelay={index * 0.2}>
                <div className="group relative p-8 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900 h-full hover:shadow-xl">
                  
                  <h3 className="text-2xl font-semibold mb-8 text-center text-zinc-200 group-hover:text-white transition-colors relative z-10">
                    {skill.category}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    {skill.technologies.map((tech, indx) => (
                      <div key={indx} className="flex items-center space-x-3 p-3 rounded-md bg-zinc-800/50 hover:bg-zinc-800 transition-colors duration-300 border border-transparent hover:border-zinc-700 group/item">
                        <ScrollTriggeredIcon delay={indx * 0.1}>
                          <span className="text-2xl text-zinc-400 group-hover/item:text-white transition-colors duration-300">{tech.icon}</span>
                        </ScrollTriggeredIcon>
                        <span className="font-medium text-sm text-zinc-400 group-hover/item:text-white transition-colors duration-300">{tech.name}</span>
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
