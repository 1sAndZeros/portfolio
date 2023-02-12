function SidebarItem({ title, link, img }) {
  return (
    <li>
      <a
        href={link}
        className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
      >
        <img src={img} alt='icon' />
        <span className='ml-3'>{title}</span>
      </a>
    </li>
  );
}

export default SidebarItem;
