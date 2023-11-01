import styled from '@emotion/styled';
import theme from '../../../styles/theme';
import { Link, NavLink } from 'react-router-dom';

export const Header = styled.header`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  height: 4.8rem;
  background-color: ${theme.colors.black};
  position: sticky;
  top: 0;
  z-index: 999;
  @media (max-width: 420px) {
    padding: 0 1rem;
  }
`;

export const LogoWrap = styled(NavLink)`
  height: 2.2rem;
  @media (max-width: 420px) {
    height: 1.6rem;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const NavItem = styled(Link)<{ active: string }>`
  cursor: pointer;
  ${theme.font.mobile.r14};
  color: ${(props) => (props.active === 'true' ? theme.colors.white : theme.colors.gray)};
  text-decoration: none;
  border-bottom: ${(props) => (props.active === 'true' ? '2px solid #fff' : 'none')};
  padding-bottom: 0.2rem;
`;
