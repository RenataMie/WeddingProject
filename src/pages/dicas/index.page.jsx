import Header from "../components/Header/Header";
import * as S from './styled';

export default function Dicas() {

  return (
    <S.MainContainer>
      <Header />
      <S.ButtonsContainer>
        <S.Button>Local da Festa</S.Button>
        <S.Button>Hospedagem</S.Button>
        <S.Button>Salão de beleza</S.Button>
        <S.Button>Lazer</S.Button>
        <S.Button>Restaurantes</S.Button>
      </S.ButtonsContainer>
    </S.MainContainer>
  );
}
