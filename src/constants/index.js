import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  android,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Apps',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

// Contact details shown in the Contact section. Leave a value empty to hide it.
export const contact = {
  email: 'ali.hassan.sulehree@gmail.com',
  github: 'https://github.com/say2alihassan',
  linkedin: 'https://www.linkedin.com/in/ali-hassan-full-stack',
};

const services = [
  {
    title: 'iOS & Android Apps',
    icon: frontend,
  },
  {
    title: 'Backends & APIs',
    icon: backend,
  },
  {
    title: 'App Takeover & Maintenance',
    icon: prototyping,
  },
  {
    title: 'Subscriptions & Store Releases',
    icon: ux,
  },
];

const technologies = [
  {
    name: 'React Native',
    icon: reactjs,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Android',
    icon: android,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Independent Mobile & Full-Stack Developer',
    company_name: 'Devvertix · Freelance · Remote',
    icon: frontend,
    iconBg: '#333333',
    date: 'Sep 2025 - Present',
    points: [
      'Building and maintaining mobile apps and their backends for founders',
      'Native iOS and Android, React Native, Node.js, NestJS and AWS',
      'Hands-on on every project, from first build to store releases and long-term updates',
    ],
  },
  {
    title: 'Principal Software Engineer',
    company_name: 'Freelance · Self employed · Remote',
    icon: prototyping,
    iconBg: '#333333',
    date: 'Jul 2021 - Jul 2026',
    points: [
      'Built Tabbio, an AI-powered career platform for the UAE & GCC with ATS-ready web CVs',
      'Built Awaaz-e-Sehat, a speech-first maternal health platform deployed in clinics across Pakistan, built at LUMS and funded by Google and Path.io',
      'Shipped Story-Formed Life, Groupie, MyPerfectPay, Trick And Treats and Carvonix to the App Store',
      'Integrated AI features (GPT-4o vision, voice models, automation) into production products',
      'Improved API performance by 15-20% across client codebases through query optimisation and caching',
    ],
  },
  {
    title: 'Senior Full Stack Developer',
    company_name: 'TWS · Full time',
    icon: backend,
    iconBg: '#333333',
    date: 'Mar 2023 - Aug 2025',
    points: [
      'Built and shipped Carvonix, a social platform for car enthusiasts, across mobile and backend',
      'Led full-stack development on large web apps with React, NestJS, PostgreSQL and AWS',
      'Reduced backend downtime by 40% through query optimisation and infrastructure improvements',
      'Also shipped Proppu, Centropix and Damask',
    ],
  },
  {
    title: 'Senior React Native Developer',
    company_name: 'NODLAYS',
    icon: frontend,
    iconBg: '#333333',
    date: 'Mar 2021 - Feb 2023',
    points: [
      'Led React Native development for cross-platform iOS & Android apps',
      'Managed App Store and Google Play releases',
      'Worked with design and backend teams to ship polished mobile experiences',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Coder Crew · Full time',
    icon: ux,
    iconBg: '#333333',
    date: 'Mar 2019 - Feb 2021',
    points: [
      'Built web applications with React and SQL for clients across multiple industries',
      'Increased mobile traffic by 15% through responsive design',
      'Worked across the full project lifecycle, from requirements to deployment',
    ],
  },
];

// Client reviews shown in the Reviews section. The section stays hidden until
// at least one entry is added. Only add real reviews, copied from your
// freelance profile or sent to you by clients, e.g.
// { quote: '...', name: 'Client name', role: 'Founder, Company', source: 'Upwork' },
const testimonials = [];

// Apps shown in the Apps section. `image` is optional: without it the card
// shows a plain gradient with the app name. `links` are shown as buttons.
const projects = [
  {
    id: 'project-1',
    name: 'Deplasto',
    description:
      'Built from scratch end to end and live on both stores, including in-app subscriptions.',
    tags: [
      { name: 'ios', color: 'blue-text-gradient' },
      { name: 'android', color: 'green-text-gradient' },
      { name: 'subscriptions', color: 'pink-text-gradient' },
    ],
    links: [
      { label: 'iOS', url: 'https://apps.apple.com/us/app/deplasto/id6780538449' },
      { label: 'ANDROID', url: 'https://play.google.com/store/apps/details?id=com.deplastollc.app' },
    ],
  },
  {
    id: 'project-2',
    name: 'Clicky.pk',
    description: 'Shopping and e-commerce app with 1M+ downloads.',
    tags: [
      { name: 'android', color: 'green-text-gradient' },
      { name: 'ecommerce', color: 'pink-text-gradient' },
    ],
    links: [
      { label: 'ANDROID', url: 'https://play.google.com/store/apps/details?id=com.clicky.pk&hl=en' },
    ],
  },
  {
    id: 'project-3',
    name: 'Carvonix',
    description: 'Social community app for car enthusiasts.',
    tags: [
      { name: 'ios', color: 'blue-text-gradient' },
      { name: 'community', color: 'pink-text-gradient' },
    ],
    links: [
      { label: 'iOS', url: 'https://apps.apple.com/pk/app/carvonix/id1661267102' },
      { label: 'WEBSITE', url: 'https://carvonix.com' },
    ],
  },
  {
    id: 'project-4',
    name: 'Tabbio',
    description: 'AI career platform for the UAE and GCC, with CV maker and job search.',
    tags: [
      { name: 'ios', color: 'blue-text-gradient' },
      { name: 'ai', color: 'pink-text-gradient' },
    ],
    links: [
      { label: 'iOS', url: 'https://apps.apple.com/br/app/tabbio-cv-maker-job-search/id6755083658' },
      { label: 'WEBSITE', url: 'https://tabbio.com' },
    ],
  },
  {
    id: 'project-5',
    name: 'Chuuzer',
    description: 'Live on both the App Store and Google Play.',
    tags: [
      { name: 'ios', color: 'blue-text-gradient' },
      { name: 'android', color: 'green-text-gradient' },
    ],
    links: [
      { label: 'iOS', url: 'https://apps.apple.com/us/app/chuuzer/id1498985377' },
      { label: 'ANDROID', url: 'https://play.google.com/store/apps/details?id=com.chuuzer.chuuzer' },
    ],
  },
  {
    id: 'project-6',
    name: 'Mappy',
    description: 'Map your memories and the places that matter to you.',
    tags: [{ name: 'ios', color: 'blue-text-gradient' }],
    links: [
      { label: 'iOS', url: 'https://apps.apple.com/pk/app/mappy-map-your-memories/id6749023763' },
    ],
  },
];

// Smaller list of other published apps, shown under the main cards.
const moreApps = [
  { name: 'Cohere', url: 'https://apps.apple.com/pk/app/cohere/id6443923498' },
  { name: 'Perfect Pay', url: 'https://apps.apple.com/pk/app/myperfectpay/id6738841741' },
  { name: 'Drive Mate', url: 'https://apps.apple.com/pk/app/drive-mate-share-rent-cars/id1534972421' },
  { name: 'Krave Mart', url: 'https://apps.apple.com/pk/app/krave-mart/id1597746512' },
  { name: 'Trick and Treats', url: 'https://apps.apple.com/pk/app/trick-and-treats/id1630161563' },
  { name: 'Story Formed Life', url: 'https://apps.apple.com/pk/app/story-formed-life/id1513565158' },
  { name: 'Ask AI', url: 'https://play.google.com/store/apps/details?id=com.askai.app&hl=en' },
];

export { services, technologies, experiences, projects, moreApps, testimonials };
