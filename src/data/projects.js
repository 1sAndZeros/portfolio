import machineImg from '../assets/project-images/tools.jpg';
import foodImg from '../assets/project-images/food.jpg';
import footballImg from '../assets/project-images/football.jpg';
import playerImg from '../assets/project-images/player.jpg';
import padlockImg from '../assets/project-images/padlock.jpg';

const projects = [
  {
    id: 1,
    img: playerImg,
    name: 'Player Guesser',
    description:
      "Guess a randomly chosen footballer based on given stats. It's Wordle for sports fans",
    siteLink: 'https://github.com/1sAndZeros',
    codeLink: 'https://github.com/1sAndZeros',
  },
  {
    id: 2,
    img: machineImg,
    name: 'Machine Database',
    description:
      'Overview of machine workshop. Shows workloads and component information',
    siteLink: 'https://github.com/1sAndZeros',
    codeLink: 'https://github.com/1sAndZeros',
  },
  {
    id: 3,
    img: footballImg,
    name: 'The Consortium',
    description: 'Track betting statistics for the squad',
    siteLink: 'https://github.com/1sAndZeros',
    codeLink: 'https://github.com/1sAndZeros',
  },
  {
    id: 4,
    img: foodImg,
    name: 'Recipe Shopper',
    description: 'Generate a shopping list from chosen recipes',
    siteLink: 'https://github.com/1sAndZeros',
    codeLink: 'https://github.com/1sAndZeros',
  },
  {
    id: 5,
    img: padlockImg,
    name: 'Password Generator',
    description: 'Generate a secure password',
    siteLink: 'https://rp-pwd-gen.netlify.app/',
    codeLink: 'https://github.com/1sAndZeros/password-generator',
  },
];

export default projects;
