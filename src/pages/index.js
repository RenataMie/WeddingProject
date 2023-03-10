import Head from 'next/head'
import * as S from './home/styled';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mie & William</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <S.MainContainer>
        <S.TitleContainer>
          <S.Title>Mie & William</S.Title>
        </S.TitleContainer>
      </S.MainContainer>
    </>
  )
}
