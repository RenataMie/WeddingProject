import * as S from './styled';

function Header() {

  return (
    <header>
      <S.Container>
        <S.MenuWrapper>
          <a>Dicas</a>
          <a>Lista de presentes</a>
          <button>Confirmar presença</button>
        </S.MenuWrapper>
      </S.Container>
    </header>
  );
}

export default Header;
