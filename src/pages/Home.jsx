import { useEffect } from 'react';
import bgVideo from '../assets/bg-video-earth.mp4';
import mountainImg from '../assets/mountain-img.jpg';
import wordflick from '../animatedtext';

// TODO: Fix bug when text animation is rerendered

function Home() {
  useEffect(() => {
    wordflick();
  }, []);
  return (
    <main className='main'>
      <section id='home'>
        <div id='video-container'>
          <video autoPlay loop muted id='bg-video' poster={mountainImg}>
            {/* Video by Ingrid North: */}
            {/* https://www.pexels.com/video/the-sun-illuminating-earth-s-surface-1851190/{' '} */}
            <source src={bgVideo} type='video/mp4' />
          </video>
          <div className='banner'>
            <h1 className='home-title'>
              Rikie <span>Patrick</span>
            </h1>

            <h2 className='headline'>
              <span>I am a </span>
              <div className='word' />
              {/* <div className='text2'>Designer</div> */}
              {/* <div className='text3'>Engineer</div> */}
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
