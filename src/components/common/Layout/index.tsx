import * as S from './styles';
import { Outlet } from 'react-router-dom';

function Layout() {

  return (
    <S.Layout>
      <S.Main>
        <Outlet/>
      </S.Main>
    </S.Layout>
  );
}

export default Layout;