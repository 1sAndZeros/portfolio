import userIcon from '../assets/svg-icons/user.svg';
import HeadingPrimary from '../components/HeadingPrimary';
import Subheading from '../components/Subheading';
import '../css/about.css';

function AboutMe() {
  return (
    <main id='about' className='main'>
      <HeadingPrimary text='About' icon={userIcon} />
      <Subheading text='Get to know me!' />
      <div className='mb-4 flex h-96 items-center justify-center rounded bg-gray-500 dark:bg-gray-800'>
        <img src='Rikie.png' className='profile-img' alt='me' />
      </div>
    </main>
  );
}

export default AboutMe;
