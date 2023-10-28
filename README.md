# 파일 구조

components 파일 구조
1. 각 페이지 별로 폴더 생성
2. 컴포넌트 이름 별 폴더 생성
   - 각 폴더에 index.tsx와 styles.ts 로 작업
   - styles.ts의 css는 `import * as S from ./styles.ts`
   - <S.컴포넌트></S.컴포넌트> 로 작업
