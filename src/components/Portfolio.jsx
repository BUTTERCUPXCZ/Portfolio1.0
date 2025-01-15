import React from 'react';
import project1 from '/src/assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import { AiFillGithub } from 'react-icons/ai';
import Reveal from './Reveal';

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
    title: 'Login System',
    description: 'A system with Protected Route and I used the React.js for frontend and Node js for backend and the database is MYSQL.',
    links: {
      site: '#',
      github: 'https://github.com/BUTTERCUPXCZ',
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
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h3 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h3>
    {projects.map((project, index) => ( 
        <Reveal>
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          } mb-12`}
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2 p-4">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Description Section */}
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-200 mb-4">{project.description}</p>

            {/* Links */}
            <div className="flex space-x-4">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 flex items-center space-x-2"
              >
                <AiFillGithub className="text-xl" />
                <span className='text-gray-200'>GitHub</span>
              </a>
            </div>
          </div>
        </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
