import useIsDesktop from '@/hooks/useIsDesktop';
import * as S from './styled';
import BurguerIcon from './images/menu.svg';
import CloseIcon from './images/close.svg';
import { useEffect, useState } from 'react';
import MenuDrawer from '../MenuDrawer/MenuDrawer';

function Header() {
  const isDesktop = useIsDesktop();
  const [y, setY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  

  const onScroll = () => {
    const currentScroll = window.pageYOffset;
    setY(currentScroll);
  };

  const openMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header>
      <S.Container $isScrolled={y} $isOpen={isOpen}>
        <S.MenuWrapper>
          {isDesktop &&
            <>
              <S.Link href="/">Início</S.Link>
              <S.Link href="/dicas">Dicas</S.Link>
              <S.Link href="/presentes">Presentes</S.Link>
            </>
          }
          <S.PresenceButton>Confirmar presença</S.PresenceButton>
          {!isDesktop && 
            <> 
              <S.BurguerButton onClick={openMenu}>
                {isOpen ? <CloseIcon /> : <BurguerIcon />}
              </S.BurguerButton>
            </>
          }
        </S.MenuWrapper>
        <S.MenuDrawerContainer $isOpen={isOpen}>
          <MenuDrawer isOpen={isOpen}/>
        </S.MenuDrawerContainer>
      </S.Container>
    </header>
  );
}

export default Header;
