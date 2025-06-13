import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import { AiFillGithub } from 'react-icons/ai';
import Reveal from './Reveal';
import StaggeredReveal from './StaggeredReveal';

const projects = [
  {
    img: project1,
    title: 'POST SYSTEM FOR JJ MARKETING',
    description: 'A Java application and we are using MYSQL as our database.',
    links: {
      site: '#',
      github: 'https://github.com/BUTTERCUPXCZ',
    },
  },
  {
    img: project2,
    title: 'UM STUDENT REGISTRATION SYSTEM',
    description: 'A system Proposal for JJ Marketing the language we used to build this project is Java and the backend is MYSQL',
    links: {
      site: '#',
      github: 'https://github.com/BUTTERCUPXCZ',
    },
  },
  {
    img: project3,
    title: 'Bus System',
    description: 'A Bus System, built using Java and the database is MYSQL',
    links: {
      site: '#',
      github: 'https://github.com/BUTTERCUPXCZ',
    },
  },
  {
    img: project4,
    title: 'BCDNHS GRADEBOOK',
    description: 'Grading System for Faculties Built with ReactJS (frontend), Node.js (backend), and MySQL(database)',
    links: {
      site: '#',
      github: 'https://github.com/AelCee8103/OnlineGradeBook.git',
    },
  },
  {
    img: project5,
    title: 'SurfCaster',
    description: 'Surf Caster is an app designed for Surfers, built using Flutter for the frontend and Firebase for the backend. ',
    links: {
      site: '#',
      github: 'https://github.com/BUTTERCUPXCZ/surf_caster',
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-6 md:my-20" id="portfolio">
      <Reveal>
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
            Featured Projects
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A showcase of my technical expertise through innovative solutions and creative problem-solving
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <StaggeredReveal key={index} staggerDelay={index * 0.15}>
              <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                {/* Image Section - Optimized */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex space-x-4 relative z-10">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-200 font-medium cursor-pointer shadow-md hover:shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.links.github, '_blank');
                      }}
                    >
                      <AiFillGithub className="text-lg" />
                      <span className='text-white'>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </StaggeredReveal>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Portfolio;
