import { v4 as uuid } from 'uuid';
import netflix from '../assets/project-images/netflix.jpg';
import foodImg from '../assets/project-images/food.jpg';
import footballImg from '../assets/project-images/football.jpg';
import playerImg from '../assets/project-images/player.jpg';
import padlockImg from '../assets/project-images/padlock.jpg';
import socialMediaImg from '../assets/project-images/socialmedia.jpg';
import houseImg from '../assets/project-images/house.jpg';
import joyImg from '../assets/project-images/joy.jpg';
import travelImg from '../assets/project-images/travel.jpg';
import bookImg from '../assets/project-images/book.jpg';

const projects: Project[] = [
  {
    id: uuid(),
    img: travelImg,
    name: 'MyPlace',
    description:
      'Web App to track visited and desired locations and share your travel map with friends',
    techStack: ['JavaScript', 'HTML', 'CSS', 'React'],
    siteLink: 'https://myplace-acrry.onrender.com/',
    codeLink: 'https://github.com/1sAndZeros/MyPlace',
    complete: true,
  },
  {
    id: uuid(),
    img: bookImg,
    name: 'Chaptrs',
    description:
      'A mobile app for bookworms! Plan and track your bookclubs with fellow book lovers',
    techStack: ['JavaScript', 'React Native', 'Expo'],
    codeLink: 'https://github.com/elliepriestley/Chaptrs_Mobile_App',
    complete: true,
  },
  {
    id: uuid(),
    img: socialMediaImg,
    name: 'Acebook',
    description: 'Group project recreating a social media web app',
    techStack: ['JavaScript', 'HTML', 'CSS', 'React'],
    siteLink: 'https://acebook-team-air.netlify.app',
    codeLink: 'https://github.com/1sAndZeros/acebook-team-air',
    complete: true,
  },
  {
    id: uuid(),
    img: playerImg,
    name: 'Premier League\nGuessing Game',
    description:
      "Guess a randomly chosen footballer based on given stats. It's Wordle for sports fans",
    techStack: ['React', 'Material UI', 'Framer Motion', 'Vite'],
    siteLink: 'https://prem-guessing-game.netlify.app/',
    codeLink: 'https://github.com/1sAndZeros/football-guessing-game',
    complete: true,
  },
  {
    id: uuid(),
    img: netflix,
    name: 'Fletnix',
    description:
      'A clone of the Netflix UK Website. Pair programmed with ojones44',
    collaborators: [
      {
        name: 'Oliver Jones',
        githubUsername: 'ojones44',
      },
    ],
    techStack: ['React', 'Material UI', 'Framer Motion', 'Vite'],
    siteLink: 'https://fletnix-fletnify.netlify.app/',
    codeLink: 'https://github.com/ojones44/netflix-clone',
    complete: true,
  },
  {
    id: uuid(),
    img: houseImg,
    name: 'MakersBnB',
    description: 'Group project web app of an AirBnB clone',
    techStack: ['Python', 'Flask', 'PostgreSQL', 'Pytest'],
    codeLink: 'https://github.com/1sAndZeros/MakersBnb',
    collaborators: [
      {
        name: 'Yasien Watkin',
        githubUsername: 'originalbinaryhustler',
      },
    ],
    complete: true,
  },
  {
    id: uuid(),
    img: joyImg,
    name: 'Joy Challenge',
    description:
      'A web app used to display everyones chosen joy as part of the Makers Joy Challenge, including their quote and song for the day.',
    techStack: ['JavaScript', 'HTML', 'CSS', 'React'],
    siteLink: 'https://makersjoychallenge.netlify.app/',
    codeLink: 'https://github.com/1sAndZeros/makers-joy-challenge',
    complete: true,
  },
  {
    id: uuid(),
    img: footballImg,
    name: 'The Consortium',
    description: 'Track betting statistics for the squad',
    techStack: ['HTML'],
    codeLink: 'https://github.com/1sAndZeros',
    complete: false,
  },
  {
    id: uuid(),
    img: padlockImg,
    name: 'Password Generator',
    description: 'Generate a secure password',
    techStack: ['HTML', 'JavaScript', 'CSS', 'Vite'],
    siteLink: 'https://rp-pwd-gen.netlify.app/',
    codeLink: 'https://github.com/1sAndZeros/password-generator',
    complete: true,
  },
  {
    id: uuid(),
    img: foodImg,
    name: 'DishDash',
    description: 'Web app to generate a shopping list from selected recipes',
    techStack: ['HTML', 'JavaScript', 'CSS', 'Vite'],
    codeLink: 'https://github.com/1sAndZeros/',
    complete: false,
  },
];

export default projects;

export interface Project {
  id: string;
  img: string;
  name: string;
  description: string;
  siteLink?: string;
  codeLink: GitHubUrlString;
  complete: boolean;
  techStack: Tech[];
  collaborators?: Collaborator[];
}

export type Tech =
  | 'HTML'
  | 'JavaScript'
  | 'TypeScript'
  | 'CSS'
  | 'Vite'
  | 'React'
  | 'Material UI'
  | 'Framer Motion'
  | 'Yup'
  | 'Formik'
  | 'Styled Components'
  | 'Python'
  | 'Flask'
  | 'PostgreSQL'
  | 'React Native'
  | 'Expo'
  | 'Pytest';

export interface Collaborator {
  name: string;
  githubUsername: string;
}

export type GitHubUrlString = `https://github.com/${string}`;
