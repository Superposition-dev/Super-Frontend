import { useState, useEffect } from 'react';
import * as S from './styles';
import { AiOutlineArrowUp } from 'react-icons/ai';

function UpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <S.UpButtonContainer onClick={scrollToTop}>
          <AiOutlineArrowUp />
        </S.UpButtonContainer>
      )}
    </>
  );
}

export default UpButton;
