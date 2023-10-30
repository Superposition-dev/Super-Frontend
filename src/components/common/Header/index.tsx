import * as S from './styles';

function Header() {
  return (
    <S.Header>
      <S.LogoWrap>
        <S.Logo src="/images/logo.png" alt="logo" />
      </S.LogoWrap>
      <S.Nav>
        <S.NavItem color="gray">About us</S.NavItem>
        <S.NavItem>작품 목록</S.NavItem>
      </S.Nav>
    </S.Header>
  );
}

export default Header;
