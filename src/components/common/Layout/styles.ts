import styled from '@emotion/styled';
import theme from '../../../styles/theme';
export const Layout = styled.div`
  position: relative;
`;

export const Main = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  position: relative;
  overflow-y: scroll;
  margin: 0 auto;
  width: 100%;
  min-height: calc(100vh - 4.8rem);
  height: auto;
  background: linear-gradient(180deg, ${theme.colors.black} 70%, ${theme.colors.purple});
  background-attachment: fixed;
  padding-bottom: 3rem;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 420px) {
    //모바일 대응
    width: 100vw;
    max-width: 100vw;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
