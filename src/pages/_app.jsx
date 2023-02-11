import './globals.scss'
import 'react-loading-skeleton/dist/skeleton.css'

import { Chart as ChartJS, registerables } from 'chart.js'
import { Provider } from 'react-redux'
import AppWrapper from '../components/wrapper/AppWrapper'

import appStore from '../state/redux/appStore'

ChartJS.register(...registerables)
ChartJS.defaults.font.family = 'Intro'
ChartJS.defaults.color = '#212121'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={appStore}>
      <main>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </main>
    </Provider>
  )
}
