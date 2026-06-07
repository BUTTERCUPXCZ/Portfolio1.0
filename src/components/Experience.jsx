import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const ease = [0.22, 1, 0.36, 1]

const Entry = ({ period, title, role, children, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease }}
    className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-line"
  >
    <div className="md:col-span-3 md:pl-2">
      <span className="font-mono text-xs text-accent block mb-1">[{index}]</span>
      <span className="font-mono text-xs uppercase tracking-widest text-muted">{period}</span>
    </div>
    <div className="md:col-span-9 md:pr-2">
      <h3 className="font-display uppercase tracking-tight text-xl sm:text-2xl text-ink mb-1">
        {title}
      </h3>
      {role && (
        <p className="font-serif italic text-lg text-muted mb-4">{role}</p>
      )}
      <div className="text-muted leading-relaxed space-y-2">{children}</div>
    </div>
  </motion.article>
)

const Bullets = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3">
        <span className="text-accent font-mono text-xs pt-1.5 shrink-0">—</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

const TechLine = ({ children }) => (
  <p className="font-mono text-[11px] uppercase tracking-wider text-muted pt-3">
    Stack: {children}
  </p>
)

const Experience = () => (
  <section id="experience" className="px-4 sm:px-8 py-20 sm:py-28">
    <SectionHeader index="003" note="Record" title="Service" accentWord="record" />

    <div className="border-t border-line">
      <Entry
        index="A"
        period="May 2025 — Present"
        title="Inventiv"
        role="Full-Stack Developer · Davao City, Philippines"
      >
        <Bullets
          items={[
            'Built a cross-platform desktop application using Electron, React 19, and TypeScript, packaged with automated CI/CD and over-the-air (OTA) update delivery.',
            'Developed a Python/Flask backend with modular domains, JWT authentication, DynamoDB and S3 bucket for scalable, low-latency data storage.',
            'Engineered a Playwright-based browser automation engine to streamline repetitive content-management workflows and improve operational efficiency.',
            'Designed RESTful APIs and real-time data pipelines using Socket.IO and long-polling to sync metrics, messaging, and application state across the desktop client.',
            'Integrated AI-assisted messaging and analytics features to improve workflow efficiency and support data-driven operations.',
            'Implemented AES-256 encryption for secure credential handling and sensitive session data protection.',
            'Optimized backend performance with Redis caching, rate limiting, and autoscaling deployment on Render.',
          ]}
        />
        <TechLine>
          Electron · React 19 · TypeScript · Python · Flask · DynamoDB · S3 ·
          Playwright · Socket.IO · Redis · Render
        </TechLine>
      </Entry>

      <Entry
        index="B"
        period="Jul 28 — Aug 2025"
        title="Globe Telecommunications"
        role="Software Developer Intern"
      >
        <Bullets
          items={[
            'Implemented a Deleted Cable sidebar for the admin using TypeScript, cutting time spent locating cable-cut X marks on the map.',
            'Refined data handling and retrieval speed by 10% through optimized queries and backend processes with Node.js.',
            'Collaborated with interns to enhance an existing simulation system through brainstorming, retrospectives, and coordinated project development.',
          ]}
        />
      </Entry>

      <Entry
        index="C"
        period="2022 — Present"
        title="ScholarSphere"
        role={
          <>
            Full-Stack Developer ·{' '}
            <a
              href="https://scholarspheres.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep text-accent"
            >
              scholarspheres.vercel.app
            </a>
          </>
        }
      >
        <Bullets
          items={[
            'Built a full scholarship management platform with 20+ RESTful APIs using Node.js/Express and PostgreSQL (Prisma ORM).',
            'Implemented role-based access control with JWT, secure document uploads, and real-time updates via Supabase Realtime and Socket.IO.',
            'Developed a responsive React TypeScript frontend using TanStack Query for efficient data fetching and performance.',
            'Added an application tracking system to streamline scholarship submissions and user workflows.',
          ]}
        />
        <TechLine>
          React (TS) · TanStack Query · Node.js · Express · Supabase · Prisma ·
          PostgreSQL · Socket.IO · Shadcn/UI · Redis
        </TechLine>
      </Entry>

      <Entry
        index="D"
        period="2022 — Present"
        title="Buds AI"
        role={
          <>
            Full-Stack Developer ·{' '}
            <a
              href="https://budsai.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep text-accent"
            >
              budsai.vercel.app
            </a>
          </>
        }
      >
        <Bullets
          items={[
            'Built an AI-driven study platform using Gemini 2.5 Flash for intelligent note summarization, quiz generation, and study assistance.',
            'Developed the backend with Node.js, NestJS, PostgreSQL, Prisma, and Supabase authentication, with Redis for caching and rate limiting.',
            'Created a responsive React + TypeScript frontend using TanStack Router, TanStack Query and Shadcn/UI components.',
            'Integrated WebSocket for real-time job status updates and automated study material processing with background job queues.',
            'Deployed on Render (backend) and Vercel (frontend) with CI for high availability.',
          ]}
        />
        <TechLine>
          React (Vite + TS) · TanStack Query · Node.js · NestJS · PostgreSQL ·
          Prisma · Supabase · Redis · Gemini 2.5 Flash · Render · Vercel
        </TechLine>
      </Entry>

      <Entry
        index="E"
        period="2022 — Present"
        title="B.S. Computer Science"
        role="Undergraduate"
      >
        <p>
          Pursuing a Bachelor&apos;s degree in Computer Science, focusing on
          software engineering principles and full-stack development.
        </p>
      </Entry>
    </div>
  </section>
)

export default Experience
