import { Link } from 'react-router-dom';
import '../css/sidebar.css';

function SidebarItem({ title, link, img }) {
  return (
    <li>
      <Link to={link} className='sidebar-item'>
        <img src={img} alt='icon' className='sidebar-icon' />
        <span className='ml-3'>{title}</span>
      </Link>
    </li>
  );
}

export default SidebarItem;
