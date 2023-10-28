import Header from '../Header';
import * as S from './styles';
import { Outlet } from 'react-router-dom';

function Layout() {

  return (
    <S.Layout>
      <S.Main>
      <Header/>
        <Outlet/>
      </S.Main>
    </S.Layout>
  );
}

export default Layout;