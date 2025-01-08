import React, { useState, useEffect } from 'react';


import FaqPage from '../../pages/questions/faqSection';
import Landing_page from '../../2025-Components/Landing_page/Landing_page';
import FrontPage2025 from '../frontpage2025design/frontpage2025';
import About from '../../2025-Components/About/About';
import Speakersm from '../Speakers-mobile/Speakersm';
import SliderComponent from '../Stry/SliderComponent';
import VideoSection from '../../2025-Components/Video Section/VideoSection';

const Main = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 968);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 968);
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Landing_page />
      <FrontPage2025 />
      <About />
      {isMobile ? <Speakersm /> : <SliderComponent />}
      <VideoSection />
      <FaqPage />
    </div>
  );
};

export default Main;
