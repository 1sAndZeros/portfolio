import user from '../assets/svg-icons/user.svg';
import mail from '../assets/svg-icons/mail.svg';
import doc from '../assets/svg-icons/doc.svg';
import home from '../assets/svg-icons/home.svg';
import projects from '../assets/svg-icons/projects.svg';

const pages: Page[] = [
  {
    id: 0,
    title: 'Home',
    link: '/',
    img: home,
  },
  {
    id: 1,
    title: 'About Me',
    link: 'about',
    img: user,
  },
  {
    id: 2,
    title: 'Projects',
    link: 'projects',
    img: projects,
  },
  {
    id: 3,
    title: 'Contact Me',
    link: 'contact',
    img: mail,
  },
  {
    id: 4,
    title: 'Resume',
    link: 'resume',
    img: doc,
  },
];

export default pages;

export interface Page {
  id: number;
  title: string;
  link: string;
  img: string;
}
