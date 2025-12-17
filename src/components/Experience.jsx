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
    description: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-zinc-200 mb-2">ScholarSphere - Scholarship Discovery & Management Platform</h3>
          <p className="text-sm text-zinc-500 mb-3">Full-Stack Developer | <a href="https://scholarspheres.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 underline">scholarspheres.vercel.app</a></p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Built a full scholarship management platform with 20+ RESTful APIs using Node.js/Express and PostgreSQL (Prisma ORM).</li>
            <li>Implemented role-based access control with JWT, secure document uploads, and real-time updates via Supabase Realtime and Socket.IO.</li>
            <li>Developed a responsive React TypeScript frontend using TanStack Query for efficient data fetching and performance.</li>
            <li>Added an application tracking system to streamline scholarship submissions and user workflows.</li>
          </ul>
          <p className="text-xs text-zinc-400 mt-2">Tech Stack: React (TypeScript), TanStack Query, Node.js (TypeScript), Express, Supabase, Prisma, PostgreSQL, Socket.IO, Shadcn/ui, Redis</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-zinc-200 mb-2">Buds AI - AI-Powered Study Platform</h3>
          <p className="text-sm text-zinc-500 mb-3">Full-Stack Developer | <a href="https://budsai.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 underline">https://budsai.vercel.app</a></p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Built an AI-driven study platform using Gemini 2.5 Flash for intelligent note summarization, quiz generation, and study assistance.</li>
            <li>Developed the backend with Node.js, NestJS, PostgreSQL, Prisma, and Supabase authentication, with Redis for caching and rate limiting.</li>
            <li>Created a responsive React + TypeScript frontend using TanStack Router, TanStack Query and Shadcn/UI components for an intuitive user experience.</li>
            <li>Integrated WebSocket for real-time job status updates and automated study material processing with background job queues.</li>
            <li>Deployed on Render (backend) and Vercel (frontend) with CI for high availability.</li>
          </ul>
          <p className="text-xs text-zinc-400 mt-2">Tech Stack: React (Vite + TypeScript), TanStack Query, Node.js, NestJS, PostgreSQL, Prisma, Supabase, Redis, Shadcn/UI, Gemini 2.5 Flash, Render, Vercel</p>
        </div>
      </div>
    ),
  },
  {
    company: 'Globe Telecommunications - Software Developer Intern',
    period: 'July 28 - August 2025',
    description: (
      <ul className="list-disc ml-6">
        <li>Implemented a Deleted Cable Side bar for the admin using Typescript to lessen the time finding the cable cut X mark in the Map.</li>
        <li>Refined data handling and retrieval speed by 10% through optimized queries and backend processes with Node.js.</li>
        <li>Collaborated with interns to enhance an existing simulation system through brainstorming, retrospectives, and coordinated project development.</li>
      </ul>
    ),
  },
];

const Experience = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-8 text-zinc-200 py-20" id="experience">
      <Reveal>
        <div className="mb-16 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Experience</h1>
          <div className="h-1 w-20 bg-zinc-700 mb-6 mx-auto md:mx-0"></div>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            My professional journey and academic milestones.
          </p>
        </div>

        <motion.div
          className="space-y-12 relative pl-8 md:pl-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Timeline line for desktop */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-zinc-800"></div>

          {experiences.map((experience, index) => (
            <Reveal key={index}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="relative pl-8 md:pl-12 border-l border-zinc-800 md:border-none"
              >
                {/* Dot for timeline */}
                <div className="hidden md:block absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-400 ring-4 ring-zinc-900"></div>
                
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-zinc-100">{experience.company}</h2>
                  <span className="text-sm text-zinc-500 font-mono mt-1 md:mt-0 tracking-wider">{experience.period}</span>
                </div>
                
                <div className="text-zinc-400 leading-relaxed max-w-3xl">
                  {experience.description}
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
