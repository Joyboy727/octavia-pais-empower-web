import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollRestoration = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollPositions = JSON.parse(sessionStorage.getItem('scrollPositions') || '{}');
    if (scrollPositions[pathname]) {
      window.scrollTo(0, scrollPositions[pathname]);
    }

    const handleScroll = () => {
      const updatedScrollPositions = JSON.parse(sessionStorage.getItem('scrollPositions') || '{}');
      updatedScrollPositions[pathname] = window.scrollY;
      sessionStorage.setItem('scrollPositions', JSON.stringify(updatedScrollPositions));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return null;
};

export default ScrollRestoration;