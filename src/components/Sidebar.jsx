import SidebarItem from './SidebarItem';
import pages from '../data/pages';
import '../css/sidebar.css';

function Sidebar() {
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
        id='sidebar'
        className='-translate-x-full transition-transform sm:translate-x-0'
        aria-label='Sidebar'
      >
        <div className='h-full overflow-y-auto py-4'>
          <a href='/' className='flex-col'>
            <img src='profile.png' className='relative w-full' alt='profile' />
            <div className='name-block'>
              <h2>RIKIE PATRICK</h2>
            </div>
          </a>
          <ul className='mt-5 space-y-2'>
            {pages.map((page) => {
              return (
                <SidebarItem
                  key={page.id}
                  title={page.title}
                  link={page.link}
                  img={page.img}
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
