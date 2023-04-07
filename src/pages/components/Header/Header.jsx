import useIsDesktop from '@/hooks/useIsDesktop';
import * as S from './styled';
import BurguerIcon from './images/menu.svg';

function Header() {
  const isDesktop = useIsDesktop();

  return (
    <header>
      <S.Container>
        <S.MenuWrapper>
          {isDesktop &&
            <>
              <S.Link href="/dicas">Dicas</S.Link>
              <S.Link>Presentes</S.Link>
            </>
          }
          <S.PresenceButton>Confirmar presença</S.PresenceButton>
          {!isDesktop && 
            <S.BurguerButton>
              <BurguerIcon />
            </S.BurguerButton>
          }
        </S.MenuWrapper>
      </S.Container>
    </header>
  );
}

export default Header;
