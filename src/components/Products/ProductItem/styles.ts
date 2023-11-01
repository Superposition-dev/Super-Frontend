import styled from '@emotion/styled';
import theme from '../../../styles/theme';

export const ProductItem = styled.div`
  cursor: pointer;
  width: calc(20% - 1.6rem);
  height: auto;
  @media (max-width: 420px) {
    width: calc(50% - 1.6rem);
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 0.5rem;
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin-top: 0.5rem;
  gap: 0.2rem;
`;

export const Tag = styled.li`
  color: ${theme.colors.gray};
`;

export const ItemTitle = styled.h2`
  ${theme.font.mobile.r14};
  color: ${theme.colors.white};
  margin-top: 0.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Artist = styled.h3`
  ${theme.font.mobile.r14};
  color: ${theme.colors.lightGray};
  margin-top: 0.2rem;
`;
