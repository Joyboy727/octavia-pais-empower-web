import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useSmoothScroll = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change with smooth animation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
};

export default useSmoothScroll;