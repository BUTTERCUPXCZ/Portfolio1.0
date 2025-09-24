import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';
import { AiFillGithub } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import Reveal from './Reveal';
import StaggeredReveal from './StaggeredReveal';

// Update projects to include download links for projects 1-3
const projects = [
  {
    img: project1,
    title: 'POST SYSTEM FOR JJ MARKETING',
    description: 'A system Proposal for JJ Marketing. Built with Java and uses MySQL as the database backend.',
    links: {
      download: '/downloads/POS-PROPOSAL-FOR-JJMARKETING.zip', // Add path to your downloadable file
    },
    showDownload: true
  },
  {
    img: project2,
    title: 'UM STUDENT REGISTRATION SYSTEM',
    description: 'A Java application for student registration with MySQL database integration.',
    links: {
      download: '/downloads/Student_Registration_System.zip', // Add path to your downloadable file
    },
    showDownload: true
  },
  {
    img: project3,
    title: 'Bus System',
    description: 'A Bus System application, built using Java and MySQL database for efficient transportation management.',
    links: {
      download: '/downloads/Bus-System_3.zip', // Add path to your downloadable file
    },
    showDownload: true
  },
  {
    img: project4,
    title: 'BCDNHS GRADEBOOK',
    description: 'Grading System for Faculties. Built with ReactJS (frontend), Node.js (backend), and MySQL (database).',
    links: {
      site: '#',
      github: 'https://github.com/AelCee8103/OnlineGradeBook.git',
    },
    showDownload: false
  },
  {
    img: project5,
    title: 'SurfCaster',
    description: 'An app designed for Surfers, built using Flutter for the frontend and Firebase for the backend.',
    links: {
      site: '#',
      github: 'https://github.com/BUTTERCUPXCZ/surf_caster',
    },
    showDownload: false
  },
  {
    img: project6,
    title: 'ScholarSphere',
    description: 'ScholarSphere is a web app that helps students find and track scholarships.',
    links: {
      site: '#',
      github: 'https://github.com/BUTTERCUPXCZ/Scholarship-Finder.git',
    },
    showDownload: false
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
              <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                {/* Image Section - Uniform height */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Content Section - Fixed height with flex-grow for variable content */}
                <div className="p-6 relative z-10 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Links - Always at the bottom */}
                  <div className="flex space-x-4 relative z-10 mt-auto">
                    {/* GitHub button only for projects without download button */}
                    {!project.showDownload && project.links.github && (
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
                    )}

                    {/* Download button only for projects 1-3 */}
                    {project.showDownload && (
                      <a
                        href={project.links.download}
                        download
                        className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg transition-all duration-200 font-medium cursor-pointer shadow-md hover:shadow-lg"
                      >
                        <FiDownload className="text-lg" />
                        <span className='text-white'>Download</span>
                      </a>
                    )}
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
