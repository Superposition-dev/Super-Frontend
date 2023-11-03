import { useNavigate } from 'react-router-dom';
import SvgComponents from './SvgComponents';
import * as S from './styles';

function Error404() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  return (
    <>
      <S.Container>
        <S.Background />
        <S.Cover />
        <SvgComponents />
        <S.TextWrap>
          <S.Text>죄송합니다</S.Text>
          <S.Text>페이지를 찾을 수 없습니다.</S.Text>
        </S.TextWrap>
        <S.TextWrap>
          <S.SubText>존재하지 않는 주소를 입력하셨거나,</S.SubText>
          <S.SubText>
            요청하신 페이지의 주소가 변경 혹은 삭제되어
            <br />
            찾을 수 없습니다.
          </S.SubText>
        </S.TextWrap>
        <S.Button onClick={onClick}>메인으로</S.Button>
      </S.Container>
    </>
  );
}

export default Error404;
