import React from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(100, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;
