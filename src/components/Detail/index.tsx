import { useLocation, useParams } from 'react-router-dom';
import * as S from './styles';
import { useMutation, useQuery } from 'react-query';
import { getPost, likePost } from '../../api/postsAPI';
import { useState, useEffect } from 'react';
import { patchGoogle, patchInsta, patchView } from '../../api/logAPI';
import { checkLog, toggleLike } from '../../util/localstorage';
import { Product } from '../../interface/products';

const GOOGLE_FORM_URL = 'https://forms.gle/uH2GTcxsqKra889y6';

export default function Detail() {
  const [products, setProducts] = useState<Product>(null!);
  const { id } = useParams();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const qr = query.get('qr');
  const likedPosts = JSON.parse(String(localStorage.getItem('likedPosts'))) || [];
  const isLiked = products && likedPosts.includes(products.productId);
  useQuery(`product`, () => getPost(Number(id), qr as string), {
    onSuccess: (data) => {
      setProducts(data);
      console.log(data, products);
    },
  });
  const { mutate: likeMutate } = useMutation(likePost);

  const { mutate: instarMutate } = useMutation(patchInsta, {
    onSuccess: () => {
      console.log('인스타 1회');
    },
  });

  const { mutate: buyMutate } = useMutation(patchGoogle, {
    onSuccess: () => {
      console.log('구글 1회');
    },
  });

  const { mutate: viewMutate } = useMutation(patchView, {
    onSuccess: () => {
      console.log('뷰 1회');
    },
  });

  const onInstarClick = (id: number, url: string) => {
    checkLog('insta', id) === true ? window.open(url, '_blank') : instarMutate(id);

    window.open(url, '_blank');
  };

  const onBuyClick = (id: number) => {
    checkLog('buy', id) === true
      ? window.open(GOOGLE_FORM_URL, '_blank')
      : buyMutate(id);
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  const onLikeClick = async (id: number) => {
    const like = await toggleLike(id);
    likeMutate({ id, like });
  };

  const onView = (id: number) => {
    checkLog('view', id) === true ? console.log('이미 봄') : viewMutate(id);
  };

  useEffect(() => {
    if (!products) return;
    onView(products && products.productId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return (
    <S.Tool>
      {products && (
        <>
          <S.ImageWrap>
            <S.StyledImage src={products.picture} alt="작품 이미지" />
          </S.ImageWrap>
          <S.Writing>
            무단 도용 및 재배포를 금지합니다.
            <br />@ 2023.{`${products.artist}`}. All rights reserved.
          </S.Writing>
          <S.InfoWrap>
            <S.Tools>
              <div style={{ width:'100%', marginBottom: '1rem' }}>
                <S.Name>{products.title}</S.Name>
                <S.Anrdma>
                  <S.Num>{`No.Sup${String(products.productId).padStart(3, '0')}`}</S.Num>
                  <S.icons>
                    <S.Function
                      onClick={() => onInstarClick(products.productId, products.instar)}
                      src="/icons/instagram.svg"
                      alt="인스타그램"
                    />
                    <S.HeartWrap onClick={() => onLikeClick(products.productId)}>
                      {isLiked ? <S.FillHeart /> : <S.EmptHeart />}
                    </S.HeartWrap>
                  </S.icons>
                </S.Anrdma>
                <S.Tags>
                  {products.tag &&
                    products.tag.map((item: string) => {
                      return <S.Tag key={item}>#{item}</S.Tag>;
                    })}
                </S.Tags>
              </div>
            </S.Tools>
            <div>
              <S.One>
                <S.InfoTitle>작가</S.InfoTitle>
                <S.Atname>{products.artist}</S.Atname>
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
                <S.Artwork>{products.description}</S.Artwork>
              </S.Three>
            </div>
            <S.Price>{`${String(products.price).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}원</S.Price>
            <S.Btn onClick={() => onBuyClick(products.productId)}>구매하기</S.Btn>
          </S.InfoWrap>
        </>
      )}
    </S.Tool>
  );
}
