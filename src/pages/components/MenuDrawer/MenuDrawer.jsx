import * as S from './styled';

function MenuDrawer() {
  return (
    <S.Container>
      <S.MenuWrapper>
        <S.Link href="/">Início</S.Link>
        <S.Link href="/dicas">Dicas</S.Link>
        <S.Link href="/presentes">Presentes</S.Link>
      </S.MenuWrapper>
    </S.Container>
  );
}

export default MenuDrawer;
