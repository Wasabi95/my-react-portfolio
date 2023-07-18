/* import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import MainSection from './MainSection/MainSection';
import IntroSection from './IntroSection/IntroSection';
import HomeLayout from '../../layouts/HomeLayout/HomeLayout';
import SectionBG from '../../components/UIElements/SectionBG/SectionBG';

const ScrollToTopButton = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300); 
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    onClick(); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buttonStyle = {
    position: 'fixed',
    bottom: '2px',
    right: '20px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
  };

  return (
    <button className="scrollToTopButton" style={buttonStyle} onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  );
};

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setShowScrollButton(scrollTop > 300); 
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HomeLayout>
      <SectionBG>
        <MainSection />
      </SectionBG>
      <IntroSection />
      {showScrollButton && <ScrollToTopButton onClick={scrollToTop} />}
    </HomeLayout>
  );
};

export default Home;
 */


import MainSection from './MainSection/MainSection';
import IntroSection from './IntroSection/IntroSection';
import HomeLayout from '../../layouts/HomeLayout/HomeLayout';
import SectionBG from '../../components/UIElements/SectionBG/SectionBG';

const Home = () => {
  return (
    <HomeLayout>
      <SectionBG>
        <MainSection />
      </SectionBG>

      <IntroSection />
    </HomeLayout>
  );
};

export default Home;