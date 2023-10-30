import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);
  return isMobile;
}

export function useIsTablet() {
  const [isTablet, setIsTablet] = useState(false);
  const tablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1024px)',
  });
  useEffect(() => {
    setIsTablet(tablet);
  }, [tablet]);
  return isTablet;
}
