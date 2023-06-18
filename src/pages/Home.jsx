import { useEffect, useRef } from 'react';
import bgVideo from '../assets/bg-video-earth.mp4';
import mountainImg from '../assets/mountain-img.jpg';
import '../css/home.css';

function Home() {
  const animationRef = useRef();

  useEffect(() => {
    const words = ['Web Developer', 'Software Engineer', 'UI / UX Designer'];
    const len = words.length;
    const skipDelay = 15;
    const speed = 100;
    let part;
    let i = 0;
    let offset = 0;
    let forwards = true;
    let skipCount = 0;
    const wordAnimation = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          skipCount += 1;
          if (skipCount === skipDelay) {
            forwards = false;
            skipCount = 0;
          }
        }
      } else if (offset === 0) {
        forwards = true;
        i += 1;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
      part = words[i].substr(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          offset += 1;
        } else {
          offset -= 1;
        }
      }
      animationRef.current.innerHTML = part;
    }, speed);
    return () => {
      clearInterval(wordAnimation);
    };
  }, []);
  return (
    <main id='home' className='main'>
      <div id='video-container'>
        <video autoPlay loop muted id='bg-video'>
          {/* Video by Ingrid North: */}
          {/* https://www.pexels.com/video/the-sun-illuminating-earth-s-surface-1851190/{' '} */}
          <source src={bgVideo} type='video/mp4' />
        </video>
        <div className='banner'>
          <h1 className='home-title'>
            Rikie <span>Patrick</span>
          </h1>
          <h2 className='headline flex flex-wrap'>
            <span>I am a </span>
            <span ref={animationRef} className='word' />
          </h2>
        </div>
      </div>
    </main>
  );
}

export default Home;
