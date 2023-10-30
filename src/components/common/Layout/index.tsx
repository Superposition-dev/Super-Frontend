import Header from '../Header';
import UpButton from '../UpBtn';
import * as S from './styles';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <S.Layout>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
      <UpButton />
    </S.Layout>
  );
}

export default Layout;
