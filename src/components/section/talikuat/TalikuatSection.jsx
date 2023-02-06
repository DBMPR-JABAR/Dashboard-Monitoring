import { LineChart, Line } from 'recharts'

import Container from '../../container/Container'
import TestChart from './TestChart'

const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }]

export default function TalikuatSection() {
  return (
    <Container>
      <div className="mt-16">
        <span className="block text-center font-intro font-bold text-xl">
          Talikuat
        </span>
        <span className="hidden mx-2 font-intro">-</span>
        <span className="block font-intro text-center mt-3">
          Sistem Kendali Mutu Kegiatan Infrastruktur
        </span>
        <div className="w-full bg-white mt-8 rounded-lg">
          <span className="inline-block m-6">Test</span>
          <div className="border-t border-gray-300 py-6  overflow-scroll">
            <TestChart />
          </div>
        </div>
      </div>
    </Container>
  )
}
