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
  padding: 0 2rem;
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
  margin-top: 4rem;
`;

export const BallWrap = styled.div`
  width: 60rem;
  height: auto;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-self: center;
  place-items: center;
  @media (max-width: 420px) {
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 20px;
    place-items: center;
    div:nth-child(1) {
      grid-area: 1 / 2 / 2 / 3;
    }
    div:nth-child(2) {
      grid-area: 2 / 1 / 3 / 2;
    }
    div:nth-child(3) {
      grid-area: 2 / 3 / 3 / 4;
    }
  }
`;

export const Ball = styled.div`
  width: 8.2rem;
  height: 8.2rem;
  border-radius: 50%;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  ${theme.font.mobile.r14};
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
  flex-direction: column;
  gap: 0.2rem;
`;
export const SNSLink = styled.a`
  display: block;
  background-color: ${theme.colors.white};
  padding: 0.2rem 0.5rem;
  color: ${theme.colors.black};
  ${theme.font.mobile.r12};
  text-decoration: none;
`;
