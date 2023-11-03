import styled from '@emotion/styled';
import theme from '../../../styles/theme';
export const Image = styled.img`
  width: 100%;
  border-radius: 0.5rem;
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin-top: 0.5rem;
  gap: 0.2rem;
  flex-wrap: wrap;
`;

export const Tag = styled.li`
  color: ${theme.colors.gray};
  ${theme.font.mobile.r14};
  word-wrap: break-word;
`;

export const ItemTitle = styled.h2`
  ${theme.font.mobile.r18};
  line-height: 1.5;
  color: ${theme.colors.white};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Artist = styled.h3`
  ${theme.font.mobile.r14};
  color: ${theme.colors.lightGray};
  margin-top: 0.2rem;
`;
