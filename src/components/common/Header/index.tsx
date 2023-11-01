import { useLocation } from 'react-router-dom';
import * as S from './styles';

function Header() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <S.Header>
      <S.LogoWrap to="/">
        <S.Logo src="/images/purpleLogo.png" alt="logo" />
      </S.LogoWrap>
      <S.Nav>
        <S.NavItem to="/" active={path === '/' ? 'true' : 'false'}>
          About us
        </S.NavItem>
        <S.NavItem to="/products" active={path === '/products' ? 'true' : 'false'}>
          작품 목록
        </S.NavItem>
      </S.Nav>
    </S.Header>
  );
}

export default Header;
