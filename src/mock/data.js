import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kristopher Long',
  subtitle: 'Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    'I was the boy who would take everything apart to find out how it works, or to make something new.Whether is was giving life to a NEC laptop or finding out how to remove the governor on a gokart, I was always driven by this need to explore and create.',
  paragraphTwo:
    "  When I faced a problem I couldn't solve, I found someone to teach me to solve it or I created a new solution.",
  paragraphThree:
    ' This perseverance has come with me through every stage of my life in every aspect.   This combination is also the most valuable thing I can offer; genuine curiosity supported by perseverance.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'Build a social networking clone.',
    info: 'This is a fullstack project leveraging Next.js, Express, TypeORM, TypeScript, and MySQL',
    info2:
      'A company wanted to host a similar to Reddit to encourage casual communication and improve connectedness. I built this app to be used internally on their servers, using their existing SQL infrastructure.',
    url: '',
    repo: 'https://github.com/Dev-kris/social_app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Create an API for a review app.',
    info: 'RESTful API using Express, MongoDB Atlas, and Mongoose.',
    info2:
      'With a frontend already developed, I was made to create a secure API and database to bring this hot sauce review application to life.',
    url: '',
    repo: 'https://github.com/Dev-kris/Pekocko', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Build an eCommerce store.',
    info: 'eCommerce website built using only HTML, CSS, Bootstrap 5, and Vanilla JS',
    info2:
      'This web store needed to be built using only vanilla JS and basic css libraries. It was then connected to an existing API and database to retrieve product data dynamically.',
    url: '',
    repo: 'https://github.com/Dev-kris/Vintera', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'click',
  btn: '',
  email: 'kristopher.j.long@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kristopher-long-a30201180/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Dev-kris',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
