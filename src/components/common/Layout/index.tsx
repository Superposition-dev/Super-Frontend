import * as S from './styles';

import { useRef } from 'react';


function Layout({ children }: { children: React.ReactNode }) {
  const mainContainerRef = useRef<HTMLDivElement>(null);

  return (
    <S.Layout>
      <S.Main>
          <div ref={mainContainerRef}>{children}</div>
      </S.Main>
    </S.Layout>
  );
}

export default Layout;