import GlobalStyle from '../styles/globals';
import { Cormorant_Garamond } from '@next/font/google'

const garamond = Cormorant_Garamond({ 
  weight: '300',
  subsets:['latin'],
  variable: '--garamond-font'
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${garamond.style.fontFamily};
        } 
      `}</style>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
