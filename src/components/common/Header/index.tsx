import * as S from './styles'

function Header() {
  return (
    <S.Header>
      <S.LogoWrap>
        <S.Logo src="/Logo.png" alt="logo" />
      </S.LogoWrap>
      <S.Nav>
        <S.NavItem>작품목록</S.NavItem>
      </S.Nav>
    </S.Header>
  )
}

export default Header