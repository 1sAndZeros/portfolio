import { Link } from 'react-router-dom';

function SidebarItem({ title, link, img }) {
  return (
    <li>
      <Link
        to={link}
        className='flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
      >
        <img src={img} alt='icon' />
        <span className='ml-3'>{title}</span>
      </Link>
    </li>
  );
}

export default SidebarItem;
