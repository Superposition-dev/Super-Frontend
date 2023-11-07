import { Global, css } from '@emotion/react';

const style = css`
  :root {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Pretendard-Regular', sans-serif;
    color: #45537c;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
    @media (max-width: 428px) {
      font-size: 10px;
    }
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    word-break: keep-all;
  }
  body {
    box-sizing: border-box;
    height: 100vh;
    background-color: #f2f2f2;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

function GlobalStyles() {
  return <Global styles={style} />;
}

export default GlobalStyles;
