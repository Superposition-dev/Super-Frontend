import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 6rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Layout = styled.div`
  box-sizing: border-box;
  max-width: 120rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const TitleWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.black};
  border-radius: 0 0 2.4rem 2.4rem;
  padding: 2rem 0 4rem;
`;

export const LogoImg = styled.img`
  width: 26rem;
  height: auto;
  margin-top: 1rem;
`;

export const TextWrap = styled.div`
  ${theme.font.mobile.b20};
  color: ${theme.colors.white};
  text-align: center;
  margin-top: 4rem;
`;

export const Text = styled.p``;

export const SubTitle = styled.h2`
  font-family: 'Lemon', serif;
  ${theme.font.mobile.r30};
  color: ${theme.colors.white};
  text-align: center;
  margin-top: 2rem;
`;

export const BallWrap = styled.div`
  box-sizing: border-box;
  width: 40rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-self: center;
  place-items: center;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  gap: 8rem;
  @media (max-width: 420px) {
    gap: 0;
    width: 100%;
    grid-template-columns: repeat(3, 0.5fr);
    grid-template-rows: repeat(2, 0.5fr);
    grid-column-gap: 0px;
    place-items: center;
    div:nth-of-type(1) {
      grid-area: 1 / 2 / 2 / 3;
    }
    div:nth-of-type(2) {
      grid-area: 2 / 1 / 3 / 2;
      transform: translateX(4rem);
    }
    div:nth-of-type(3) {
      grid-area: 2 / 3 / 3 / 4;
      transform: translateX(-4rem);
    }
  }
`;

export const BallContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40rem;
  margin-top: 1rem;
`;

export const DashedBall = styled.div`
  display: none;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  border: 1px dashed ${theme.colors.white};
  position: absolute;
  top: 40px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;
  @media (max-width: 420px) {
    display: block;
  }
`;

export const Ball = styled.div`
  box-sizing: border-box;
  width: 13.5rem;
  height: 13.5rem;
  border-radius: 50%;
  border: 1px solid ${theme.colors.white};
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  ${theme.font.mobile.b20};
  font-weight: bold;
  text-align: center;
  word-break: keep-all;
  padding: 1rem;
`;

export const SNS = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  gap: 1rem;
  transform: translateX(-1.2rem);
`;

export const Instagram = styled.img``;

export const SNSLinks = styled.div`
  display: flex;
  gap: 0.2rem;
  a:nth-of-type(1) {
    background-color: ${theme.colors.purple};
  }
  a:nth-of-type(2) {
    background-color: #2c2c2c;
  }
`;
export const SNSLink = styled.a`
  cursor: pointer;
  display: block;
  padding: 0.2rem 0.8rem;
  color: ${theme.colors.white};
  ${theme.font.mobile.r12};
  text-decoration: none;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
`;
