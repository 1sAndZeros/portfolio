import user from '../../assets/user.svg';
import mail from '../../assets/mail.svg';
import doc from '../../assets/doc.svg';
import home from '../../assets/home.svg';
import projects from '../../assets/projects.svg';

const pages = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    img: home,
  },
  {
    id: 2,
    title: 'About Me',
    link: 'about',
    img: user,
  },
  {
    id: 3,
    title: 'Projects',
    link: 'projects',
    img: projects,
  },
  {
    id: 4,
    title: 'Contact Me',
    link: 'contact',
    img: mail,
  },
  {
    id: 5,
    title: 'Resume',
    link: 'resume',
    img: doc,
  },
];

export default pages;
