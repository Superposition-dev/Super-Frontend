import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';

export const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 0.5rem;
  position: relative;
`;

export const Title = styled.h1`
  ${theme.font.mobile.r28};
  font-family: 'Lemon', serif;
  color: ${theme.colors.white};
  text-align: center;
`;

export const Search = styled(BiSearch)`
  color: ${theme.colors.white};
  font-size: 2.6rem;
  position: absolute;
  right: 1.5rem;
`;

export const SearchWrap = styled.form<{ isSearch: boolean }>`
  display: flex;
  height: ${(props) => (props.isSearch ? '3rem' : '0')};
  visibility: ${(props) => (props.isSearch ? 'visible' : 'hidden')};
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: all 0.3s ease-in-out;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 95%;
  height: 100%;
  color: ${theme.colors.black};
  margin: 0 auto;
  padding: 0 0.8rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  position: absolute;
  right: 2.4rem;
  border: none;
  background-color: transparent;
  ${theme.font.mobile.r14}
  font-weight: 700;
  cursor: pointer;
  color: ${theme.colors.black};
`;

export const MasonryItems = styled.div<{mobile:boolean,tablet:boolean}>`
  column-width: ${(props) => (props.mobile ? '20rem' : props.tablet ? '50%' : '100%')};
`

export const ProductItem = styled(Link)`
  display: inline-block;
  text-decoration: none;
  box-sizing: border-box;
  break-inside: avoid;
  padding: 0.8rem;
  cursor: pointer;
  
  width: calc(20% - 1.6rem);
  height: auto;
  @media (max-width: 1024px) {
    width: calc(25% - 1.6rem);
  }
  @media (max-width: 428px) {
    width: calc(50%);
  }
`;

export const Error = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ErrorText = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
  color: ${theme.colors.white};
  text-align: center;
`;
