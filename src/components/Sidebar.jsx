import { useRef } from 'react';
import SidebarItem from './SidebarItem';
import pages from '../data/pages';
import '../css/sidebar.css';

function Sidebar() {
  const hamburgerRef = useRef();
  return (
    <div>
      <div ref={hamburgerRef} className='hamburger-bar'>
        <h2>RIKIE PATRICK</h2>
        <button
          data-drawer-target='sidebar'
          data-drawer-toggle='sidebar'
          aria-controls='sidebar'
          aria-labelledby='sidebar'
          type='button'
          id='hamburger-btn'
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
      </div>
      <aside
        id='sidebar'
        className='-translate-x-full transition-transform md:translate-x-0'
        aria-label='sidebar'
      >
        <div className='sidebar__content'>
          <a href='/' className='flex-col'>
            <img src='profile.png' className='profile-img' alt='profile' />
            <div className='name-block'>
              <h2>RIKIE PATRICK</h2>
            </div>
          </a>
          <ul>
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
