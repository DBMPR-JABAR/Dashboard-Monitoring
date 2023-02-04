import '../styles/globals.css'

import { Roboto, Lato, Lora } from '@next/font/google'
import localFont from '@next/font/local'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--display-default',
})

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--display-lato',
})

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--display-lora',
})

const intro = localFont({
  src: [
    {
      path: '../assets/fonts/intro/intro_thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/intro/intro_light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/intro/intro_regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/intro/intro_bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/intro/intro_black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--display-intro',
})

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${roboto.variable} ${intro.variable} ${lato.variable} ${lora.variable} font-default`}
    >
      <Component {...pageProps} />
    </main>
  )
}
