import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

export const Tool = styled.div`
  background-color: ${theme.colors.black};
`;

export const ImageWrap = styled.div`
  width: 100%;
  min-height: 35rem;
  background-color: ${theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImage = styled.img`
  width: 100%;
  min-height: 35rem;
`;

export const Writing = styled.p`
  color: #b8b8b8;
  font-size: 1rem;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.4rem;
  word-wrap: break-word;
  text-align: center;
  margin-top: 1rem;
`;

export const Tools = styled.ul`
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: center;
`;

export const Anrdma = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const icons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Name = styled.p`
  text-align: right;
  color: #fefefe;
  ${theme.font.mobile.b20};
  word-wrap: break-word;
`;

export const Num = styled.p`
  color: ${theme.colors.gray};
  ${theme.font.mobile.r12};
  word-wrap: break-word;
`;

export const InfoWrap = styled.div`
  padding: 1.5rem;
`;

export const Tags = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 1rem;
`;

export const Tag = styled.div`
  ${theme.font.mobile.b12};
  color: ${theme.colors.white};
`;

export const One = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const InfoTitle = styled.p`
  color: #797979;
  ${theme.font.mobile.r16};
  word-wrap: break-word;
  width: 25%;
`;

export const Atname = styled.p`
  color: #fefefe;
  ${theme.font.mobile.r16};
  word-wrap: break-word;
`;

export const Two = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const Work = styled.p`
  color: #797979;
  ${theme.font.mobile.r16};
  word-wrap: break-word;
`;

export const Cen = styled.p`
  color: #fefefe;
  ${theme.font.mobile.r16};
  word-wrap: break-word;
`;

export const Year = styled.p`
  color: #fefefe;
  ${theme.font.mobile.r14};
  word-wrap: break-word;
`;

export const Three = styled.div`
  display: flex;
  margin-top: 1rem;
  word-break: keep-all;
`;

export const Ex = styled.p`
  color: #797979;
  ${theme.font.mobile.r16};
`;

export const Artwork = styled.p`
  width: 70%;
  color: #fefefe;
  ${theme.font.mobile.r16};
`;

export const Price = styled.p`
  color: #fefefe;
  font-size: 2rem;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 2.4rem;
  word-wrap: break-word;
  margin-top: 4rem;
  margin-bottom: 8rem;
`;

export const Btn = styled.button`
  cursor: pointer;
  background-color: #6e28ac;
  color: #fefefe;
  width: 100%;
  height: 5.5rem;
  font-weight: 700;
  font-size: 2rem;
  margin-top: 15rem;
  border: none;
  position: fixed;
  -webkit-overflow-scrolling: touch;
  bottom: 0;
  left: 0;
`;

export const Function = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

export const HeartWrap = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmptHeart = styled(FaRegHeart)`
  font-size: 2.4rem;
  text-align: center;
  color: #fefefe;
`;

export const FillHeart = styled(FaHeart)`
  font-size: 2.4rem;
  color: #ff0000;
  text-align: center;
`;
