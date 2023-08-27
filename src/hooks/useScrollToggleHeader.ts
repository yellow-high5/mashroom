import { useScroll } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const useScrollToggleHeader = (): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [hideHeader, setHideHeader] = useState<boolean>(false);

  const { scrollY } = useScroll();
  const handleScroll = () => {
    if (scrollY.get() < 20) {
      setHideHeader(false);
    } else {
      const hidden = scrollY.get() > scrollY.getPrevious();
      setHideHeader(hidden);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return [hideHeader, setHideHeader];
};

export default useScrollToggleHeader;
