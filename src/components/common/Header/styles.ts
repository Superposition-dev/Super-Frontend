import styled from "@emotion/styled";

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
`

export const Nav = styled.ul`
  display: flex;
  align-items: center;

`;

export const NavItem = styled.li`
  cursor: pointer;  
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
`