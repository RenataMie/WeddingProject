import Head from 'next/head'
import Header from './components/Header/Header';
import Infos from './components/Infos/Infos';
import useIsDesktop from '@/hooks/useIsDesktop';
import * as S from './home/styled';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';

export default function Home() {
  const isDesktop = useIsDesktop();

  return (
    <>
      <Head>
        <title>Mie & William</title>
        <meta name="description" content="Site casamento Mie e William" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <Header />
      <S.MainContainer>
        
        <S.TitleContainer>
          <S.Title>Mie & William</S.Title>
        </S.TitleContainer>
      </S.MainContainer>
      <WelcomeMessage />
      <Infos />
    </>
  )
}
