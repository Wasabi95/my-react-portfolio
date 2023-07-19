import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import s from './BaseLayout.module.scss';
import Header from '../../components/Header/Header';
import Particles from '../../components/UIElements/Particles/Particles';
import Footer from '../../components/Footer/Footer';
import MainNavigation from '../../components/Navigation/MainNavigation/MainNavigation';

const ScrollToTopButton = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300); // Show button when scrolled 300px or more
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    onClick(); // Invoke the onClick function from the parent component
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
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
    <button className={s.scrollToTopButton} style={buttonStyle} onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  );
};

const BaseLayout = ({ children }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={s.layout}>
      <Particles />

      <Header>
        <MainNavigation />
      </Header>

      <div className={s.container}>{children}</div>

      <Footer />

      <ScrollToTopButton onClick={scrollToTop} />
    </div>
  );
};

export default BaseLayout;

