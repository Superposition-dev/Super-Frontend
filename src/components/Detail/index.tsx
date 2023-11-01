import React from 'react'
import * as S from './styles'
import Image from './예시사진1.jpeg'
import Love from "./emptLike.svg"
import Insta from "./instagram.svg"


export default function Detail() {
  return (
    <S.Tool>
      <S.StyledImage src={Image} alt="사진" />
      <S.Writing>무단 도용 및 재배포를 금지합니다. <br/>@ 2023. 김예지.  All rights reserved.</S.Writing>
    <S.Tools>
      <div>
        <S.Anrdma>
      <S.Name>작품 이름</S.Name>
      <S.Num>No.Sup001</S.Num>
      </S.Anrdma>
      <S.Tag> #태그 #태그 #태그 </S.Tag>
      </div>
      <S.icons>
      <S.Function src={Insta} alt="사진" />
      <S.Function src={Love} alt="사진" />
      </S.icons>
    </S.Tools>
    <div>
      <S.One>
        <S.Author>작가</S.Author>
        <S.Atname>김예지</S.Atname>
      </S.One>
      <S.Two>
        <S.Work>작품 정보</S.Work>
        <S.Cen>캔버스에 유화, 73*73cm</S.Cen>
      </S.Two>
      <S.Year>2023</S.Year>
        <S.Three>
        <S.Ex>작품 설명</S.Ex>
        <S.Artwork>이 작품은 김예지 작가님이 처음으로 그리고 슈<br/>
          퍼포지션에 판매하게 된 그림으로 희소성 대박 <br/>
          하지만 금액은 십만원. 이 내용은 총 100자인데 <br/>
          지금 몇자죠? 세고 오겠음. 이제야 백자</S.Artwork>
        </S.Three>
      </div>
      <S.Price>1,000,000</S.Price>
      <S.Btn>구매하기</S.Btn>
    </S.Tool>
  );
}
