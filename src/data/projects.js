import netflix from '../assets/project-images/netflix.jpg';
import foodImg from '../assets/project-images/food.jpg';
import footballImg from '../assets/project-images/football.jpg';
import playerImg from '../assets/project-images/player.jpg';
import padlockImg from '../assets/project-images/padlock.jpg';
import socialMediaImg from '../assets/project-images/socialmedia.jpg';
import houseImg from '../assets/project-images/house.jpg';
import joyImg from '../assets/project-images/joy.jpg';
import travelImg from '../assets/project-images/travel.jpg';

const projects = [
  {
    id: 1,
    img: playerImg,
    name: 'Premier League\nGuessing Game',
    description:
      "Guess a randomly chosen footballer based on given stats. It's Wordle for sports fans",
    techStack: ['React', 'MaterialUI', 'Framer Motion', 'Vite'],
    siteLink: 'https://prem-guessing-game.netlify.app/',
    codeLink: 'https://github.com/1sAndZeros/football-guessing-game',
    deployed: true,
    complete: true,
  },
  {
    id: 2,
    img: netflix,
    name: 'Fletnix',
    description:
      'A clone of the Netflix UK Website. Pair programmed with ojones44',
    collaborators: [
      {
        name: 'Oliver Jones',
        githubUsername: 'ojones44',
        githubLink: 'https://github.com/ojones44/',
      },
    ],
    techStack: ['React', 'MaterialUI', 'Framer Motion', 'Vite'],
    siteLink: 'https://fletnix-fletnify.netlify.app/',
    codeLink: 'https://github.com/ojones44/netflix-clone',
    deployed: true,
    complete: true,
  },
  {
    id: 3,
    img: footballImg,
    name: 'The Consortium',
    description: 'Track betting statistics for the squad',
    siteLink: 'https://github.com/1sAndZeros',
    codeLink: 'https://github.com/1sAndZeros',
    deployed: false,
    complete: false,
  },
  {
    id: 4,
    img: socialMediaImg,
    name: 'Acebook',
    description: 'Group project recreating a social media web app',
    siteLink: 'https://acebook-team-air.netlify.app',
    codeLink: 'https://github.com/1sAndZeros/acebook-team-air',
    deployed: true,
    complete: true,
  },
  {
    id: 5,
    img: padlockImg,
    name: 'Password Generator',
    description: 'Generate a secure password',
    techStack: ['HTML', 'JavaScript', 'CSS', 'Vite'],
    siteLink: 'https://rp-pwd-gen.netlify.app/',
    codeLink: 'https://github.com/1sAndZeros/password-generator',
    deployed: true,
    complete: true,
  },
  {
    id: 6,
    img: foodImg,
    name: 'DishDash',
    description: 'Web app to generate a shopping list from selected recipes',
    techStack: ['HTML', 'JavaScript', 'CSS', 'Vite'],
    siteLink: 'https://github.com/1sAndZeros/',
    codeLink: 'https://github.com/1sAndZeros/',
    deployed: false,
    complete: false,
  },
  {
    id: 7,
    img: houseImg,
    name: 'MakersBnB',
    description: 'Group project web app of an AirBnB clone',
    techStack: ['Python', 'Flask', 'PostgreSQL', 'Pytest'],
    // siteLink: 'https://github.com/1sAndZeros/',
    codeLink: 'https://github.com/1sAndZeros/MakersBnb',
    deployed: false,
    complete: true,
  },
  {
    id: 7,
    img: joyImg,
    name: 'Joy Challenge',
    description:
      'A web app used to display everyones chosen joy as part of the Makers Joy Challenge, including their quote and song for the day.',
    techStack: ['Javascript', 'HTML', 'CSS', 'React'],
    siteLink: 'https://makersjoychallenge.netlify.app/',
    codeLink: 'https://github.com/1sAndZeros/makers-joy-challenge',
    deployed: true,
    complete: true,
  },
  {
    id: 8,
    img: travelImg,
    name: 'MyPlace',
    description:
      'Web App to track visited and desired locations and share your travel map with friends',
    siteLink: 'https://myplace-acrry.onrender.com/',
    codeLink: 'https://github.com/1sAndZeros/MyPlace',
    deployed: true,
    complete: true,
  },
];

export default projects;
