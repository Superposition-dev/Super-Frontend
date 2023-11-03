import { useLocation, useParams } from 'react-router-dom';
import * as S from './styles';
import { useQuery } from 'react-query';
import { getPost } from '../../api/postsAPI';
import { useState } from 'react';

export default function Detail() {
  const [products, setProducts] = useState([]); // [1
  const { id } = useParams();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const qr = query.get('qr');
  const { data } = useQuery('products', () => getPost(id, qr), {
    onSuccess: (data) => {
      console.log(data);
      setProducts(data.product);
    },
  });
  const number = products[0] && String(products[0].productId).padStart(3, '0');
  return (
    <S.Tool>
      {products[0] && (
        <>
          <S.ImageWrap>
            <S.StyledImage src={products[0].picture} alt="작품 이미지" />
          </S.ImageWrap>
          <S.Writing>
            무단 도용 및 재배포를 금지합니다.
            <br />@ 2023.{`${products[0].name}`}. All rights reserved.
          </S.Writing>
          <S.InfoWrap>
            <S.Tools>
              <div style={{ marginBottom: '1rem' }}>
                <S.Anrdma>
                  <S.Name>{products[0].title}</S.Name>
                  <S.Num>{`No.Sup${number}`}</S.Num>
                </S.Anrdma>
                <S.Tags>
                  {products[0].tag &&
                    products[0].tag.map((item: string) => {
                      return <S.Tag key={item}>#{item}</S.Tag>;
                    })}
                </S.Tags>
              </div>
              <S.icons>
                <S.Function src="/icons/instagram.svg" alt="인스타그램" />
                <S.Function src="/icons/emptLike.svg" alt="좋아요 하트" />
              </S.icons>
            </S.Tools>
            <div>
              <S.One>
                <S.InfoTitle>작가</S.InfoTitle>
                <S.Atname>{products[0].name}</S.Atname>
              </S.One>
              <S.Two>
                <S.InfoTitle>작품 정보</S.InfoTitle>
                <S.Cen>
                  캔버스에 유화, 73*73cm
                  <br />
                  2023
                </S.Cen>
              </S.Two>
              <S.Three>
                <S.InfoTitle>작품 설명</S.InfoTitle>
                <S.Artwork>{products[0].description}</S.Artwork>
              </S.Three>
            </div>
            <S.Price>\ 1,000,000 원</S.Price>
            <S.Btn>구매하기</S.Btn>
          </S.InfoWrap>
        </>
      )}
    </S.Tool>
  );
}
