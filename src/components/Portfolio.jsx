import React from 'react';
import aceDevAI from '../assets/AceDev AI.png';
import budsAI from '../assets/budsAI.png';
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
    img: aceDevAI,
    title: 'AceDevAI',
    description: 'An AI interview platform where tech enthusiasts can practice technical skills. It offers realistic, AI-driven mock interviews with instant feedback and evaluation powered by Gemini.',
    links: {
      site: '#',
      github: 'https://github.com/BUTTERCUPXCZ/AI-Interview-Platform.git',
    },
    showDownload: false
  },
  {
    img: budsAI,
    title: 'Buds AI',
    description: 'An AI-powered study platform that helps students learn smarter with intelligent note summarization, quiz generation, and personalized study assistance powered by Gemini 2.5 Flash.',
    links: {
      site: '#',
      github: 'https://github.com/BUTTERCUPXCZ/AI-Study-Buddy.git',
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

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="group relative bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 h-full flex flex-col hover:shadow-xl rounded-xl overflow-hidden">
      
      {/* Image Section */}
      <div className="relative overflow-hidden h-56 bg-zinc-900">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow relative">
        <h3 className="text-xl font-bold text-zinc-100 mb-3 line-clamp-1 group-hover:text-white transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className={`text-zinc-400 mb-4 text-sm leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
          {project.description}
        </p>
        
        <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="text-zinc-500 hover:text-zinc-300 text-xs font-medium mb-6 self-start focus:outline-none transition-colors"
        >
            {isExpanded ? 'See Less' : 'See More'}
        </button>

        {/* Links */}
        <div className="flex space-x-4 mt-auto">
          {!project.showDownload && project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 text-sm font-medium text-zinc-400 hover:text-white border-b border-transparent hover:border-white pb-1 transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.links.github, '_blank');
              }}
            >
              <AiFillGithub className="text-lg" />
              <span>View Code</span>
            </a>
          )}

          {project.showDownload && (
            <a
              href={project.links.download}
              download
              className="flex items-center justify-center space-x-2 text-sm font-medium text-zinc-400 hover:text-white border-b border-transparent hover:border-white pb-1 transition-all duration-300"
            >
              <FiDownload className="text-lg" />
              <span>Download</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-6 md:my-20" id="portfolio">
      <Reveal>
        <div className="mb-16 text-center md:text-left">
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Selected <span className="text-zinc-500">Work</span>
          </h3>
          <div className="h-1 w-20 bg-zinc-700 mb-6 mx-auto md:mx-0"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <StaggeredReveal key={index} staggerDelay={index * 0.15}>
              <ProjectCard project={project} />
            </StaggeredReveal>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Portfolio;
