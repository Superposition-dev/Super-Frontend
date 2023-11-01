import styled from '@emotion/styled';
export const Layout = styled.div`
  position: relative;
`;
export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/images/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  filter: grayscale(100%);
  top: 0;
  left: 0;
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
  @media (max-width: 420px) {
    //모바일 대응
    width: 100vw;
    max-width: 100vw;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
