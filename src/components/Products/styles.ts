import styled from '@emotion/styled';
import theme from '../../styles/theme';

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
