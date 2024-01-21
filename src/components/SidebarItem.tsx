import { Link } from 'react-router-dom';
import '../css/sidebar.css';
import React from 'react';

interface Props {
  title: string;
  link: string;
  img: string;
}

const SidebarItem: React.FC<Props> = ({ title, link, img }) => {
  const details = (
    <>
      <img src={img} alt='icon' className='sidebar-icon' />
      <span className='ml-3'>{title}</span>
    </>
  );

  if (title === 'Resume') {
    return (
      <li>
        <a
          href='\CV.pdf'
          target='_blank'
          rel='noreferrer'
          className='sidebar-item'
        >
          {details}
        </a>
      </li>
    );
  } else {
    return (
      <li>
        <Link to={link} className='sidebar-item'>
          {details}
        </Link>
      </li>
    );
  }
};

export default SidebarItem;
