import { MasonryGrid } from '@egjs/react-grid';
import * as S from './styles';
import ProductItem from './ProductItem';
import { useState, useMemo } from 'react';
import { useQuery } from 'react-query';
import { getPosts } from '../../api/postsAPI';
import Skeleton from '../common/Skeleton';
import { useIsMobile, useIsTablet } from '../hooks/mediaQuery';
/*eslint-disable*/

function Products() {
  const [products, setProducts] = useState([]);
  const { isLoading } = useQuery('products', getPosts, {
    onSuccess: (data) => {
      setProducts(data);
      console.log(data);
    },
  });
  const productsMemo = useMemo(() => products, [products]);
  const mobile = useIsMobile();
  const tablet = useIsTablet();
  return (
    <S.Container>
      <S.Title>ARTWORK</S.Title>
      <MasonryGrid style={{ width: '100%' }} gap={16} align={'center'} column={mobile ? 2 : tablet ? 4 : 5}>
        {isLoading ? (
          // 로딩 중일 때 Skeleton 컴포넌트를 표시
          <Skeleton />
        ) : (
          // 데이터가 로딩되고 나면 제품 목록을 렌더링
          productsMemo?.map((item, value) => <ProductItem item={item} key={value * 20} />)
        )}
      </MasonryGrid>
    </S.Container>
  );
}

export default Products;
// {productsMemo &&
//
//   })}
