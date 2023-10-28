import { Global, css } from '@emotion/react'

const style = css`
  :root{
    font-size: 10px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #45537c;
  }
  body{
    height: 100vh;
    background-color: #f2f2f2;
  }
`

function GlobalStyles() {
  return (
    <Global styles={style}/>
  )
}

export default GlobalStyles