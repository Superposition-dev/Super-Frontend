import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 1rem;
`;

export const Title = styled.h1`
  ${theme.font.mobile.r30};
  font-family: 'Lemon', serif;
  color: ${theme.colors.white};
  text-align: center;
  margin: 1rem 0 2rem;
`;

export const ProductItem = styled(Link)`
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  width: calc(20% - 1.6rem);
  height: auto;
  @media (max-width: 420px) {
    width: calc(50% - 1.6rem);
  }
`;
