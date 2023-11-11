import * as S from './styles';
import ProductItem from './ProductItem';
import { useState, useMemo, useRef } from 'react';
import { useQuery } from 'react-query';
import { getPosts } from '../../api/postsAPI';
import Skeleton from '../common/Skeleton';
import { useIsMobile, useIsTablet } from '../../hooks/mediaQuery';
import { Product } from '../../interface/products';
import Cat from './Catsvg';

/*eslint-disable*/

function Products() {
  const [products, setProducts] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const searchInput = useRef<HTMLInputElement>(null);
  const mobile = useIsMobile();
  const tablet = useIsTablet();
  const { isFetching, refetch, isError } = useQuery('products', () => getPosts(searchInput.current?.value), {
    onSuccess: (data) => {
      setProducts(data);
    },
    retry: false,
  });
  const productsMemo = useMemo(() => products, [products]);
  console.log(isError)
  const onSearchClick = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  return (
    <S.Container>
      <S.TitleWrap>
        <S.Title>ARTWORK</S.Title>
        <S.Search
          onClick={() => {
            setIsSearch(!isSearch);
          }}
        />
      </S.TitleWrap>
      <S.SearchWrap onSubmit={onSearchClick} isSearch={isSearch}>
        <S.SearchInput placeholder="작가 또는 작품명을 입력해주세요." ref={searchInput} />
        <S.Button>검색</S.Button>
      </S.SearchWrap>
      {
        isError ?(
          
          <S.Error>
            <Cat/>
            <S.ErrorText>검색 결과가 존재하지 않습니다.</S.ErrorText>
          </S.Error>
        ):(
          <S.MasonryItems mobile={mobile} tablet={tablet}>
            {isFetching ? (
              // 로딩 중일 때 Skeleton 컴포넌트를 표시
              <Skeleton />
            ) : (
              // 데이터가 로딩되고 나면 제품 목록을 렌더링
              productsMemo?.map((item: Product, value) => (
                <S.ProductItem key={value * 20} to={`/products/${item.productId}?qr=false`}>
                  <ProductItem item={item} />
                </S.ProductItem>
              ))
            )}
          </S.MasonryItems>
          )
        }
</S.Container>
  );
}

export default Products;
