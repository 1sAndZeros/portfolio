import SidebarItem from './SidebarItem';

function Sidebar() {
  const items = [
    {
      id: 1,
      title: 'Home',
      link: '/',
      img: 'vite.svg',
    },
    {
      id: 2,
      title: 'About Me',
      link: 'about',
      img: 'vite.svg',
    },
    {
      id: 3,
      title: 'Resume',
      link: 'resume',
      img: 'vite.svg',
    },
    {
      id: 4,
      title: 'Projects',
      link: 'projects',
      img: 'vite.svg',
    },
    {
      id: 5,
      title: 'Contact Me',
      link: 'contact',
      img: 'vite.svg',
    },
  ];
  return (
    <div>
      <button
        data-drawer-target='logo-sidebar'
        data-drawer-toggle='logo-sidebar'
        aria-controls='logo-sidebar'
        type='button'
        className='mt-2 ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
      >
        <span className='sr-only'>Open sidebar</span>
        <svg
          className='h-6 w-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            clipRule='evenodd'
            fillRule='evenodd'
            d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
          />
        </svg>
      </button>

      <aside
        id='logo-sidebar'
        className='fixed top-0 left-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0'
        aria-label='Sidebar'
      >
        <div className='h-full overflow-y-auto bg-gray-300 px-3 py-4 dark:bg-gray-800'>
          <a href='/' className='flex-col'>
            <img src='profile.png' className='w-full' alt='profile' />
            <div className='mb-5 whitespace-nowrap bg-blue-400 text-center text-3xl font-semibold'>
              Rikie Patrick
            </div>
          </a>
          <ul className='space-y-2'>
            {items.map((item) => {
              return (
                <SidebarItem
                  key={item.id}
                  title={item.title}
                  link={item.link}
                  img={item.img}
                />
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
