import styled from '@emotion/styled';
import theme from '../../../styles/theme';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 5.2rem;
  background-color: #000;
`;

export const LogoWrap = styled.div`
  width: 14rem;
  height: 2.2rem;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const NavItem = styled.li<{ color?: string }>`
  cursor: pointer;
  ${theme.font.mobile.r14};
  color: ${(props) => (props.color === 'gray' ? theme.colors.gray : theme.colors.white)};
`;
