import '../styles/globals.css'

import { Chart as ChartJS, registerables } from 'chart.js'
import { Provider } from 'react-redux'
import AppWrapper from '../components/wrapper/AppWrapper'

import appStore from '../state/redux/appStore'

ChartJS.register(...registerables)

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
