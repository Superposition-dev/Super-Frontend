import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Background = styled.div`
  width: 100%;
  top: 0;
  position: absolute;
  background-image: url('/images/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: grayscale(100%);
  z-index: -1;
`;

export const Cover = styled.div`
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: -1;
`;

export const TextWrap = styled.div`
  color: ${theme.colors.white};
  text-align: center;
  margin-bottom: 4rem;
`;

export const Text = styled.div`
  ${theme.font.mobile.b20}
  font-weight: 500;
`;

export const SubText = styled.div`
  ${theme.font.mobile.r14}
`;

export const Button = styled.button`
  width: 14rem;
  height: 5rem;
  background-color: transparent;
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.white};
  border-radius: 0.5rem;
  cursor: pointer;
  ${theme.font.mobile.r14}
  :hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    font-weight: 700;
  }
`;
