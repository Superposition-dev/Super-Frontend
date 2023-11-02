import * as S from './styles';
/*eslint-disable */
function ProductItem({ item }: any) {
  const { picture, name, title, tag } = item;
  return (
    <>
      <S.Image src={picture} alt={'test'} />
      <S.TagList>
        {tag &&
          tag.map((item: string) => {
            return <S.Tag key={item}>#{item}</S.Tag>;
          })}
      </S.TagList>
      <S.ItemTitle>{title}</S.ItemTitle>
      <S.Artist>{name}</S.Artist>
    </>
  );
}

export default ProductItem;
