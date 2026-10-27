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
  linkedin: '', // paste your LinkedIn profile URL here
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
    company_name: 'Self-employed · Devvertix',
    icon: frontend,
    iconBg: '#333333',
    date: '2019 - Present',
    points: [
      'Build iOS & Android apps in React Native and native (Swift, Kotlin)',
      'Take over existing live apps and keep them stable, updated and growing',
      'Set up subscriptions, payments and store releases on both platforms',
      'Build backends with Node.js, NestJS, Django, AWS and Firebase',
      '40+ completed freelance jobs with a 5-star rating',
    ],
  },
];

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

export { services, technologies, experiences, projects, moreApps };
