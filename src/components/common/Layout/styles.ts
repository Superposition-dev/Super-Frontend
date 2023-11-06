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
  -webkit-overflow-scrolling: touch;
  filter: grayscale(100%);
  top: 0;
  left: 0;
`;

export const Cover = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  -webkit-overflow-scrolling: touch;
  top: 0;
  left: 0;
`;

export const Main = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  height: auto;
`;
