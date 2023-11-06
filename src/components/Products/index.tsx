import { MasonryGrid } from '@egjs/react-grid';
import * as S from './styles';
import ProductItem from './ProductItem';
import { useState, useMemo } from 'react';
import { useQuery } from 'react-query';
import { getPosts } from '../../api/postsAPI';
import Skeleton from '../common/Skeleton';
import { useIsMobile, useIsTablet } from '../../hooks/mediaQuery';
import { Product } from '../../interface/products';
/*eslint-disable*/

function Products() {
  const [products, setProducts] = useState([]);
  const mobile = useIsMobile();
  const tablet = useIsTablet();
  const { isLoading } = useQuery('products', getPosts, {
    onSuccess: (data) => {
      setProducts(data);
    },
  });
  const productsMemo = useMemo(() => products, [products]);

  return (
    <S.Container>
      <S.Title>ARTWORK</S.Title>
      <MasonryGrid style={{ width: '100%' }} gap={16} align={'center'} column={mobile ? 2 : tablet ? 4 : 5}>
        {isLoading ? (
          // 로딩 중일 때 Skeleton 컴포넌트를 표시
          <Skeleton />
        ) : (
          // 데이터가 로딩되고 나면 제품 목록을 렌더링
          productsMemo?.map((item:Product, value) => (
            <S.ProductItem key={value * 20} to={`/products/${item.productId}?qr=false`}>
              <ProductItem item={item} />
            </S.ProductItem>
          ))
        )}
      </MasonryGrid>
    </S.Container>
  );
}

export default Products;
// {productsMemo &&
//
//   })}
