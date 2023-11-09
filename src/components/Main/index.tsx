import * as S from './styles';
function Main() {
  return (
    <S.Container>
      <S.Layout>
        <S.TitleWrap>
          <S.LogoImg src="/images/whiteLogo.png" alt="FullLogo" />
          <S.TextWrap>
            <S.Text>슈퍼포지션은 예술과 공간이</S.Text>
            <S.Text>함께 어우러져 상생할 수 있는</S.Text>
            <S.Text>세상을 꿈 꿉니다.</S.Text>
          </S.TextWrap>
        </S.TitleWrap>
        <S.SubTitle>
          What we're doing
          <S.Cat src="/images/onlyCat.png" alt="cat" />
        </S.SubTitle>
        <S.BallContainer>
          <S.BallWrap>
            <S.Ball>공간과 미술의 만남</S.Ball>
            <S.Ball>오프라인 전시</S.Ball>
            <S.Ball>작품 거래 플랫폼</S.Ball>
          </S.BallWrap>
          <S.DashedBall />
        </S.BallContainer>
        <S.SNS>
          <S.Instagram src="/icons/whiteInsta.svg" />
          <S.SNSLinks>
            <S.SNSLink target="_blank" href="https://instagram.com/superposition.official?igshid=MzMyNGUyNmU2YQ==">
              @superposition.official
            </S.SNSLink>
            <S.SNSLink target="_blank" href="https://instagram.com/superposition_for_sale?igshid=MzMyNGUyNmU2YQ==">
              @superposition_for_sale
            </S.SNSLink>
          </S.SNSLinks>
        </S.SNS>
      </S.Layout>
    </S.Container>
  );
}

export default Main;
