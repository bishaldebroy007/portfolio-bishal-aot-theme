export interface NavLink {
  name: string;
  href: string;
  command: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: 'work' | 'education' | 'leadership';
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  coursework: string[];
  recognition: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  period: string;
  status: string;
  iconKey: string;
  color: string;
  live?: string;
}

export interface Certificate {
  title: string;
  description: string;
  issuer: string;
  date: string;
}

export interface Publication {
  title: string;
  conference: string;
  authors: string;
  url: string;
}

export interface ContactInfo {
  label: string;
  value: string;
  href: string;
  iconType: 'email' | 'location';
}

export const navLinks: NavLink[] = [
  { name: 'Home', href: '#home', command: 'cd ~' },
  { name: 'About', href: '#about', command: 'cat about.md' },
  { name: 'Skills', href: '#skills', command: 'cat skills.json' },
  { name: 'Experience', href: '#experience', command: 'git log' },
  { name: 'Projects', href: '#projects', command: 'ls projects/' },
  { name: 'Contact', href: '#contact', command: './contact.sh' },
];

export const stats: Stat[] = [
  { label: 'Years of Experience', value: '1.5+' },
  { label: 'Projects Completed', value: '5+' },
  { label: 'Technologies', value: '12+' },
  { label: 'Organizations', value: '3' },
];

export const aboutSocialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bishal-deb-roy-0b31241a0/',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/bishaldebroy007',
    icon: 'github',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@bishal-deb-roy',
    icon: 'medium',
  },
  {
    name: 'Email',
    url: 'mailto:bishaldebroy2000@gmail.com',
    icon: 'email',
  },
];

export const skills: Skill[] = [
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 85, category: 'Frontend' },
  { name: 'React JS', level: 90, category: 'Frontend' },
  { name: 'NEXT JS', level: 88, category: 'Frontend' },
  { name: 'React Native', level: 80, category: 'Mobile' },
  { name: 'React Native Expo', level: 78, category: 'Mobile' },
  { name: 'Tailwind CSS', level: 92, category: 'Styling' },
  { name: 'SASS', level: 85, category: 'Styling' },
  { name: 'Python', level: 82, category: 'Backend' },
  { name: 'GraphQL', level: 75, category: 'Backend' },
  { name: 'MongoDB', level: 78, category: 'Database' },
  { name: 'MySQL', level: 80, category: 'Database' },
  { name: 'Git & GitHub', level: 88, category: 'Tools' },
];

export const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Styling', 'Database', 'Tools'];

export const experiences: Experience[] = [
  {
    title: 'Junior Software Engineer',
    company: 'Penta Global Ltd.',
    location: 'Dhaka, Bangladesh',
    period: '08/2025 – Present',
    description: [
      'Working on Projects like the HRMS app of the company',
      'Experience in HTML5, CSS3, JavaScript, React.JS, NEXT.Js, React Native + expo, Tailwind CSS, etc.',
    ],
    type: 'work',
  },
  {
    title: 'Intern Frontend Developer',
    company: 'Penta Global Ltd.',
    location: 'Dhaka, Bangladesh',
    period: '01/2025 – 07/2025',
    description: [
      'Developed & contributed to 4+ responsive web applications, including the Penta Solutions website',
      'Used React.js, Next.js, Tailwind CSS, Shadcn UI, and Payload CMS',
    ],
    type: 'work',
  },
  {
    title: 'Campus Ambassador',
    company: 'Airwork AI',
    location: 'Remote',
    period: '07/2023 – 12/2024',
    description: [
      'Conducted student outreach campaigns, increasing brand visibility by 25% in target communities',
      'Worked on small parts of their projects',
    ],
    type: 'work',
  },
  {
    title: 'Participant, Aspire Leaders Program',
    company: 'Aspire Institute',
    location: 'Remote',
    period: '10/2025',
    description: [
      'Online leadership development program for undergraduate students & recent graduates from around the world',
      'Program founded by Harvard Business School professors, curriculum guided by Harvard faculty',
    ],
    type: 'education',
  },
  {
    title: 'Treasurer',
    company: 'IEEE BRAC University Student Branch',
    location: 'Brac University',
    period: '06/2023 – 12/2023',
    description: [
      'Oversaw and reconciled event budgets exceeding BDT 100,000',
      'Introduced tracking mechanisms that improved financial reporting efficiency by 30%',
      'Organized an intra-university programming contest',
    ],
    type: 'leadership',
  },
  {
    title: 'Assistant Director (A&D Dept.)',
    company: 'Robotics Club Of BRAC University',
    location: 'Brac University',
    period: '02/2023 – 12/2023',
    description: [
      'Led the design team in creating branding assets for over 10 tech events',
      'Streamlined team workflows to ensure consistent delivery of creative assets',
    ],
    type: 'leadership',
  },
];

export const education: Education = {
  degree: 'B.Sc. in Computer Science',
  institution: 'BRAC University',
  location: 'Dhaka, Bangladesh',
  period: '2020 – 2024',
  coursework: [
    'Programming Language I & II (Python 3)',
    'Data Structures',
    'Algorithms',
    'Software Engineering',
    'Data Communications',
    'Database Systems',
    'System Analysis and Design',
    'Artificial Intelligence',
  ],
  recognition:
    '1st place in War Room Debate at Banglalink HQ (2023), organized by IEEE BRACU CS SBC',
};

export const projects: Project[] = [
  {
    title: 'Penta Solutions Website',
    description:
      'Collaborating with frontend and backend teams to build a fully functional company website using modern web technologies.',
    tech: ['NEXT JS', 'Tailwind CSS', 'Shadcn UI', 'Payload CMS'],
    period: '06/2025 – Present',
    status: 'Completed',
    iconKey: 'GoOrganization',
    color: 'from-aot-green to-aot-green-dim',
  },
  {
    title: 'VanillaPDF',
    description:
      'Built a Gemini-like chatbot using the Gemini API. An AI-powered conversational interface with modern UI.',
    tech: ['NEXT JS', 'Tailwind CSS', 'Gemini-CLI'],
    period: '03/2025 – Present',
    status: 'Under Development',
    iconKey: 'VscFilePdf',
    color: 'from-aot-cream to-aot-green',
    live: 'https://vanillapdf.netlify.app/',
  },
  {
    title: 'HRMS Mobile App',
    description:
      'A web application designed to help users manage their personal expenses efficiently with intuitive tracking and analytics.',
    tech: ['React JS', 'React Native', 'Expo', "O'Auth"],
    period: '03/2025 – 05/2025',
    status: 'Completed',
    iconKey: 'HiDevicePhoneMobile',
    color: 'from-aot-green-dim to-aot-cream',
  },
  {
    title: 'Resturent Website',
    description:
      'A web application designed to help users manage their personal expenses efficiently with intuitive tracking and analytics.',
    tech: ['Python', 'Django'],
    period: '07/2025',
    status: 'Completed',
    iconKey: 'MdOutlineFoodBank',
    color: 'from-aot-green-dim to-aot-cream',
    live: 'https://github.com/bishaldebroy007/resturent-menu-django',
  },
  {
    title: 'SmartSpend',
    description:
      'A web application designed to help users manage their personal expenses efficiently with intuitive tracking and analytics.',
    tech: ['React JS', 'Tailwind CSS', 'Daisy UI'],
    period: '03/2025 – 05/2025',
    status: 'Completed',
    iconKey: 'TbMoneybag',
    color: 'from-aot-green-dim to-aot-cream',
  },
];

export const certificates: Certificate[] = [
  {
    title: 'Basics of Web Development',
    description: 'HTML, CSS, Bootstrap & JavaScript',
    issuer: "Mentors' Learning",
    date: 'March 2025',
  },
  {
    title: 'Intermediate Git',
    description: 'Git & GitHub',
    issuer: 'DataCamp',
    date: 'March 2025',
  },
  {
    title: 'Introduction to Python',
    description: 'Python Programming Language & NumPy',
    issuer: 'DataCamp',
    date: 'March 2025',
  },
];

export const publication: Publication = {
  title:
    'Bridging the Gap: Exploring the Factors Influencing Women\'s Adoption of Mobile Financial Services (MFS) in Rural Areas of Bangladesh',
  conference: "COMPASS '24: ACM SIGCAS/SIGCHI Conference",
  authors:
    'Bishal Deb Roy, Sumaia Arefin Ritu, Anika Priodorshinee Mrittika, and Jannatun Noor',
  url: 'https://dl.acm.org/doi/10.1145/3663670.3663678',
};

export const contactInfo: ContactInfo[] = [
  {
    label: 'Email',
    value: 'rajroybishal@duck.com',
    href: 'mailto:rajroybishal@duck.com',
    iconType: 'email',
  },
  {
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    href: '#',
    iconType: 'location',
  },
];

export const contactSocials: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bishal-deb-roy-0b31241a0/',
    icon: 'in',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/bishaldebroy007',
    icon: 'GH',
  },
  {
    name: 'GitLab',
    url: 'https://gitlab.com/bishal.deb.roy',
    icon: 'GL',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@bishal-deb-roy',
    icon: 'M',
  },
  {
    name: 'ORCID',
    url: 'https://orcid.org/0009-0000-8224-4866',
    icon: 'iD',
  },
];

export const footerLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bishal-deb-roy-0b31241a0/',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/bishaldebroy007',
    icon: 'github',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@bishal-deb-roy',
    icon: 'medium',
  },
  {
    name: 'Email',
    url: 'mailto:bishaldebroy2000@gmail.com',
    icon: 'email',
  },
];
