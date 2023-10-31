import React from 'react';
import * as S from './styles';
function Main() {
  return (
    <S.Container>
      <S.Layout>
        <S.LogoImg src="/images/fullLogo.png" alt="FullLogo" />
        <S.TextWrap>
          <S.Text>슈퍼포지션은 예술과 공간이</S.Text>
          <S.Text>함께 어우러져 상생할 수 있는</S.Text>
          <S.Text>세상을 꿈 꿉니다.</S.Text>
        </S.TextWrap>
        <S.SubTitle>what we're doing?</S.SubTitle>
        <S.BallWrap>
          <S.Ball>공간과 미술의 만남</S.Ball>
          <S.Ball>오프라인 전시</S.Ball>
          <S.Ball>작품 거래 플랫폼</S.Ball>
        </S.BallWrap>
        <S.SNS>
          <S.Instagram src="/icons/whiteInsta.svg" />
          <S.SNSLinks>
            <S.SNSLink href="https://instagram.com/superposition.official?igshid=MzMyNGUyNmU2YQ==">
              @superposition.official
            </S.SNSLink>
            <S.SNSLink href="https://instagram.com/superposition_for_sale?igshid=MzMyNGUyNmU2YQ==">
              @superposition_for_sale
            </S.SNSLink>
          </S.SNSLinks>
        </S.SNS>
      </S.Layout>
    </S.Container>
  );
}

export default Main;
