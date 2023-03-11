import userIcon from '../assets/svg-icons/user.svg';
import HeadingPrimary from '../components/HeadingPrimary';
import Subheading from '../components/Subheading';
import '../css/about.css';

function AboutMe() {
  return (
    <main id='about' className='main'>
      <HeadingPrimary text='About' icon={userIcon} />
      <Subheading text='Get to know me!' />
      <div className='about-container'>
        <img src='Rikie.png' className='about-img' alt='me' />
        <div className='p-4'>
          <h2>Hello</h2>
          <p>
            My name is Rikie and I am a web developer with a passion passion for
            creating intuitive and engaging websites. Although my background is
            in manufacturing engineering, I have always been interested in
            technology and coding, and I&#39;ve been teaching myself web
            development for about a year.
          </p>
          <p>
            After discovering my love for coding, I decided to transition into a
            career in tech and pursue my passion for web development. I&#39;ve
            dedicated countless hours to learning the ins and outs of web
            development, from HTML, CSS, and JavaScript to more advanced topics
            like React and Node.js.
          </p>
          <p>
            As a web developer, I am committed to creating beautiful, responsive
            websites that not only look great but also function smoothly. I take
            pride in my attention to detail and my ability to collaborate with
            clients to ensure their vision is brought to life. When I&#39;m not
            coding, you can find me travelling the world, watching sports, or
            experimenting with new recipes in the kitchen. I&#39;m always
            looking for new challenges and opportunities to learn, and I&#39;m
            excited to see where my web development journey takes me next.
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutMe;
