import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import '../styles/PageHeader.css';

const PageHeader = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check if we've scrolled past the header
      const headerHeight = document.querySelector('.page-header').offsetHeight;
      setIsVisible(window.scrollY < headerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`page-header ${isVisible ? 'visible' : 'fade-out'}`}>
      <div className="ascii-art ribbon" style={{ transform: `translateY(${scrollY * 0.2}px)` }}></div>
      <div className="ascii-art star" style={{ transform: `translateY(${scrollY * 0.4}px)` }}></div>
      <div className="ascii-art stars" style={{ transform: `translateY(${scrollY * 0.3}px)` }}></div>
      
      <Container className="header-content">
        <h1 className="header-title">Vonni</h1>
        <p className="header-subtitle">我的作品集</p>
      </Container>
    </header>
  );
};

export default PageHeader;
