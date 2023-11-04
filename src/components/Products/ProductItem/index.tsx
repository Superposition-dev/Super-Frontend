import * as S from './styles';
/*eslint-disable */
function ProductItem({ item }: any) {
  const { picture, artist, title, tags } = item;
  return (
    <>
      <S.Image src={picture} alt={'test'} />
      <S.TagList>
        {tags &&
          tags.map((item: string) => {
            return <S.Tag key={item}>#{item}</S.Tag>;
          })}
      </S.TagList>
      <S.ItemTitle>{title}</S.ItemTitle>
      <S.Artist>{artist}</S.Artist>
    </>
  );
}

export default ProductItem;
