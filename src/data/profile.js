/* ============================================================================
 * PROFILE — every word, link, and fact on this website.
 *
 * HOW TO EDIT (you do not need to know React):
 *   1. Only change text between quotes, and true / false.
 *   2. Keep every comma and every bracket exactly where it is.
 *   3. Apostrophes: write  "I'm"  with DOUBLE quotes, not 'I'm'.
 *      Single quotes around a word with an apostrophe will break the site.
 *   4. To hide something, set it to null (no quotes) — do not delete the line.
 *   5. To add an item, copy the nearest TEMPLATE block, paste it in, fill it in.
 *   6. Never paste HTML or <a href> tags in here. Links have their own fields.
 *   7. When you are done run:   npm run check
 *      It tells you in plain English if anything is broken.
 *
 * City, timezone and map coordinates are set ONCE, in `location` below.
 * Nothing else in the site hardcodes them.
 * ========================================================================== */

/* ---------------------------------------------------------------- IDENTITY */
export const identity = {
  name: 'Ivan Eltagonde',
  fullName: 'Ivan Madelo Eltagonde',
  initials: 'IE',
  title: 'Backend-focused Full-Stack Developer',
  availabilityDetail:
    'Open to internships, freelance work, and full-time roles.',
  since: '2022',
}

/* ---------------------------------------------------------------- LOCATION */
/* SINGLE SOURCE OF TRUTH. The "Based in" line, the header clock, the header
 * coordinates, and the address Google sees are ALL generated from this block.
 *
 * ⚠ timeZone must stay a real IANA zone name. The whole Philippines is
 *   "Asia/Manila" — there is NO "Asia/Davao". Do not change it to match the
 *   city or the clock will crash. Change `timeLabel` instead — that is the
 *   part people actually see. */
export const location = {
  city: 'Davao City',
  region: 'Davao del Sur',
  country: 'Philippines',
  countryCode: 'PH',
  timeZone: 'Asia/Manila',
  timeLabel: 'DVO',
  latitude: 7.0731,
  longitude: 125.6128,
}

/* ----------------------------------------------------------------- CONTACT */
export const contact = {
  email: 'ivaneltagonde5@gmail.com',
  phoneDisplay: '0908 393 0052',
  phoneE164: '+639083930052',
  // true = show your phone number on the website. false = CV only.
  showPhone: true,
  cv: {
    href: '/ELTAGONDE_cv.pdf',
    label: 'Download CV',
    updated: 'August 2026',
  },
  formEndpoint: 'https://getform.io/f/alllnlpa',
}

/* ------------------------------------------------------------------ SOCIAL */
/* Order here = order on screen. Delete a whole { } block to remove a link. */
export const social = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/BUTTERCUPXCZ' },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ivan-eltagonde-38a853312/',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/ivan.eltagonde/',
  },
]

/* -------------------------------------------------------------------- WORK */
/* `links` are the company's own pages. The first one is what the company name
 * links to; the rest show after the job title. Use [] for none.
 * `end: null` means "Present". */
export const experience = [
  {
    id: 'inventiv',
    company: 'Inventiv',
    role: 'Full-Stack Developer',
    employment: 'Full-time',
    locationLine: 'Davao City, Philippines',
    start: 'May 2025',
    end: null,
    links: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/inventivsoftwares',
      },
      { label: 'Facebook', href: 'https://www.facebook.com/inventivlabs' },
    ],
    // One sentence for the poster. null falls back to the first highlight.
    oneLiner:
      'Multi-tenant CRM for agencies; Playwright and Droidwright automation engines.',
    // true = show the full `highlights` list on the page instead of oneLiner.
    // Space on one screen is finite, so use it for the roles that matter most.
    showHighlights: true,
    highlights: [
      'Contributed to the system design and infrastructure development of an OnlyFans CRM for agencies, enabling centralized management of 10+ creators per organization with isolated sessions and built-in PPV and tip monetization.',
      'Engineered a Playwright-based browser automation engine to streamline repetitive content-management workflows.',
      'Built a mobile automation pipeline to automate engagement with content creators’ content across multiple devices.',
    ],
    stack: [
      'Electron',
      'React 19',
      'TypeScript',
      'Python',
      'Flask',
      'DynamoDB',
      'S3',
      'Playwright',
      'Droidwright',
      'Socket.IO',
      'Redis',
      'Render',
    ],
  },
  {
    id: 'globe',
    company: 'Globe Telecom',
    role: 'Software Developer Intern',
    employment: 'Internship',
    locationLine: 'Davao City, Philippines',
    start: 'Jul 2025',
    end: 'Aug 2025',
    links: [],
    oneLiner:
      'Cut cable-fault identification time by 60% and backend response times by 10%.',
    showHighlights: false,
    highlights: [
      'Built a Deleted Cable sidebar for the admin console in TypeScript, cutting cable-fault identification time by 60%.',
      'Improved backend response times by 10% through optimized queries and Node.js data-handling processes.',
      'Collaborated with a team of 5 interns on an existing network simulation system through brainstorming, retrospectives, and coordinated development.',
      'Helped maintain 99% system uptime across the internship period.',
    ],
    stack: ['TypeScript', 'Node.js', 'REST APIs', 'MySQL'],
  },
  /* TEMPLATE — copy everything between the dashed lines, paste it above here.
  --------------------------------------------------------------------------
  {
    id: 'short-name-no-spaces',
    company: 'Company Name',
    role: 'Your Job Title',
    employment: 'Full-time',
    locationLine: 'City, Country',
    start: 'Jan 2027',
    end: null,
    links: [],
    oneLiner: 'One sentence summarising the role.',
    showHighlights: false,
    highlights: [
      'What you built and what it changed.',
    ],
    stack: ['Tech', 'Tech'],
  },
  -------------------------------------------------------------------------- */
]

/* --------------------------------------------------------------- EDUCATION */
export const education = [
  {
    id: 'um-cs',
    school: 'University of Mindanao – Matina Campus',
    degree: 'B.S. Computer Science',
    locationLine: 'Davao City, Philippines',
    start: '2022',
    end: 'August 2026',
    endNote: 'Expected',
    link: null,
    coursework: [
      'Database Systems',
      'Software Engineering 1 & 2',
      'Web Development',
      'Software Development Fundamentals',
    ],
  },
]

/* ------------------------------------------------------------------ SKILLS */
/* Each group is one row in the Stack section. `code` is a short tag kept for
 * reference. Add or remove items freely — order here is order on screen. */
export const skills = [
  {
    id: 'languages',
    code: 'LG',
    group: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    id: 'frontend',
    code: 'FE',
    group: 'Frontend',
    items: [
      'React',
      'Electron',
      'Tailwind CSS',
      'TanStack Query',
      'Shadcn/ui',
    ],
  },
  {
    id: 'backend',
    code: 'BE',
    group: 'Backend',
    items: [
      'Node.js',
      'NestJS',
      'Express',
      'Flask',
      'RESTful APIs',
      'WebSocket / Socket.IO',
      'Redis',
    ],
  },
  {
    id: 'databases',
    code: 'DB',
    group: 'Databases',
    items: [
      'PostgreSQL',
      'MySQL',
      'DynamoDB',
      'Prisma ORM',
      'Supabase',
      'NeonDB',
    ],
  },
  {
    id: 'cloud',
    code: 'CD',
    group: 'Cloud & DevOps',
    items: ['AWS', 'S3', 'Render', 'Vercel', 'Docker', 'CI/CD'],
  },
  {
    id: 'tools',
    code: 'TL',
    group: 'Tools & AI',
    items: [
      'Git',
      'GitHub',
      'VS Code',
      'Playwright',
      'Droidwright',
      'Claude',
      'Copilot',
      'Gemini',
    ],
  },
  {
    id: 'core',
    code: 'CC',
    group: 'Core Competencies',
    items: [
      'Full-Stack Development',
      'API Design',
      'Authentication & Authorization',
    ],
  },
]

/* ---------------------------------------------------------------- PROJECTS */
/* featured: true  -> large screenshot card. Needs an `image` at least 1200px wide.
 * featured: false -> compact text row, no image.
 * image: the file name in src/assets/projects/ WITHOUT the .webp part.
 *        null = no image.
 * links: null for anything that does not exist. `download` may be a path in
 *        public/ ("/downloads/x.zip") or a full https:// link.
 * hidden: true -> keeps the entry here but takes it off the website.
 * oneLiner: short version shown on the page. null falls back to `summary`. */
export const projects = [
  {
    slug: 'buds-ai',
    title: 'Buds AI',
    tag: 'AI Study Platform',
    year: '2025',
    featured: true,
    hidden: false,
    image: 'buds-ai',
    oneLiner: 'AI study platform built on Gemini 2.5 Flash.',
    summary:
      'An AI-powered study platform for smarter learning — note summarization, quiz generation, and personalized study assistance powered by Gemini 2.5 Flash.',
    stack: [
      'React',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'Supabase',
      'Redis',
      'Gemini 2.5 Flash',
    ],
    links: {
      github: 'https://github.com/BUTTERCUPXCZ/AI-Study-Buddy',
      live: 'https://budsai.vercel.app',
      download: null,
    },
  },
  {
    slug: 'scholarsphere',
    title: 'ScholarSphere',
    tag: 'Scholarship Platform',
    year: '2025',
    featured: true,
    hidden: true,
    image: 'scholarsphere',
    summary:
      'A scholarship management platform with 20+ REST endpoints, role-based access control, secure document uploads, and real-time application tracking.',
    stack: [
      'React',
      'TypeScript',
      'TanStack Query',
      'Express',
      'PostgreSQL',
      'Prisma',
      'Supabase',
      'Socket.IO',
    ],
    links: {
      github: 'https://github.com/BUTTERCUPXCZ/Scholarship-Finder',
      live: 'https://scholarspheres.vercel.app',
      download: null,
    },
  },
  {
    slug: 'acedev-ai',
    title: 'AceDevAI',
    tag: 'AI Interview Platform',
    year: '2025',
    featured: true,
    hidden: true,
    image: 'acedev-ai',
    summary:
      'A technical interview trainer offering realistic AI-driven mock interviews with instant feedback and evaluation powered by Gemini.',
    stack: ['React', 'TypeScript', 'Node.js', 'Gemini'],
    links: {
      github: 'https://github.com/BUTTERCUPXCZ/AI-Interview-Platform',
      live: null,
      download: null,
    },
  },
  {
    slug: 'bcdnhs-gradebook',
    title: 'BCDNHS Gradebook',
    tag: 'School Grading System',
    year: '2024',
    featured: false,
    hidden: true,
    image: null,
    summary:
      'A grading system for faculty, built with React, Node.js, and MySQL.',
    stack: ['React', 'Node.js', 'MySQL'],
    links: {
      github: 'https://github.com/AelCee8103/OnlineGradeBook',
      live: null,
      download: null,
    },
  },
  {
    slug: 'surfcaster',
    title: 'SurfCaster',
    tag: 'Mobile App',
    year: '2024',
    featured: false,
    hidden: true,
    image: null,
    summary:
      'A surf-conditions app for surfers, built with Flutter and Firebase.',
    stack: ['Flutter', 'Dart', 'Firebase'],
    links: {
      github: 'https://github.com/BUTTERCUPXCZ/surf_caster',
      live: null,
      download: null,
    },
  },
  {
    slug: 'um-student-registration',
    title: 'UM Student Registration',
    tag: 'Desktop Application',
    year: '2023',
    featured: false,
    hidden: true,
    image: null,
    summary:
      'A Java desktop application for student registration with MySQL integration.',
    stack: ['Java', 'MySQL'],
    links: {
      github: null,
      live: null,
      download: '/downloads/Student_Registration_System.zip',
    },
  },
  {
    slug: 'bus-system',
    title: 'Bus System',
    tag: 'Desktop Application',
    year: '2023',
    featured: false,
    hidden: true,
    image: null,
    summary: 'A transport-management application built with Java and MySQL.',
    stack: ['Java', 'MySQL'],
    links: {
      github: null,
      live: null,
      download: '/downloads/Bus-System_3.zip',
    },
  },
  {
    slug: 'pos-jj-marketing',
    title: 'POS for JJ Marketing',
    tag: 'System Proposal',
    year: '2023',
    featured: false,
    hidden: true,
    image: null,
    summary:
      'A point-of-sale system proposal for JJ Marketing, built with Java and MySQL.',
    stack: ['Java', 'MySQL'],
    links: {
      github: null,
      live: null,
      download: '/downloads/POS-PROPOSAL-FOR-JJMARKETING.pdf',
    },
  },
  /* TEMPLATE — copy everything between the dashed lines, paste it above here.
  --------------------------------------------------------------------------
  {
    slug: 'my-project',
    title: 'My Project',
    tag: 'Short Category',
    year: '2027',
    featured: false,
    hidden: false,
    image: null,
    summary: 'One or two sentences about what it does.',
    stack: ['Tech', 'Tech'],
    links: { github: null, live: null, download: null },
  },
  -------------------------------------------------------------------------- */
]

/* ------------------------------------------------------------------- ABOUT */
export const about = {
  /* The largest words on the page. Keep it short — three or four words per
   * line, two or three lines. This is the first thing anyone reads. */
  thesis: 'I build systems that run other systems.',
  /* One supporting line, read straight after the thesis. Keep it to a sentence. */
  lede:
    'Full-stack software developer focused on backend systems, automation, and developer infrastructure.',
  paragraphs: [
    "I'm a backend-focused full-stack developer specializing in scalable web applications. I build robust solutions that solve real-world problems — from AI-powered platforms to enterprise-level features.",
    'I thrive on turning complex challenges into elegant, user-friendly applications.',
  ],
}

/* --------------------------------------------------- SEARCH & SOCIAL CARDS */
/* Controls the Google result, and the preview card when someone pastes your
 * link into LinkedIn, Messenger, or Discord. */
export const seo = {
  siteUrl: 'https://ivannnxcz.vercel.app/',
  description:
    'Ivan Eltagonde — backend-focused full-stack developer in Davao City, Philippines. React, TypeScript, Node.js, NestJS, and PostgreSQL.',
  ogImage: '/og.png',
  ogImageAlt: 'Ivan Eltagonde — Backend-focused Full-Stack Developer',
  // Must match the LIGHT --color-ground in src/index.css.
  themeColor: '#fbfbfa',
  twitterHandle: null,
  locale: 'en_PH',
}

/* Do not edit below this line. */
export const profile = {
  identity,
  location,
  contact,
  social,
  experience,
  education,
  skills,
  projects,
  about,
  seo,
}

export default profile
