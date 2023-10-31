import * as S from './styles';

function Header() {
  return (
    <S.Header>
      <S.LogoWrap to="/">
        <S.Logo src="/images/purpleLogo.png" alt="logo" />
      </S.LogoWrap>
      <S.Nav>
        <S.NavItem to="/" color="gray">
          About us
        </S.NavItem>
        <S.NavItem to="/products">작품 목록</S.NavItem>
      </S.Nav>
    </S.Header>
  );
}

export default Header;
