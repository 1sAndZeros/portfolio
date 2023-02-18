import { Link } from 'react-router-dom';
import './sidebar.css';

function SidebarItem({ title, link, img }) {
  return (
    <li>
      <Link to={link} className='sidebar-item mx-3'>
        <img src={img} alt='icon' className='sidebar-icon' />
        <span className='ml-3'>{title}</span>
      </Link>
    </li>
  );
}

export default SidebarItem;
