import { useState, useEffect } from 'react';

const useWidth = () => {
  const [width, setWidth] = useState<number | undefined>(undefined); // default width, detect on server.

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
};

export default useWidth;
