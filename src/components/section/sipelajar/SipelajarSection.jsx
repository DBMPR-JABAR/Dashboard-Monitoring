import Container from '../../container/Container'
import SapuLobangChart from './SapuLobangChart'

export default function SipelajarSection() {
  return (
    <Container>
      <div className="mt-16">
        <span className="block text-center font-intro font-bold text-xl lg:inline-block lg:text-left lg:text-2xl">
          Sipelajar
        </span>
        <span className="hidden mx-2 font-intro lg:inline-block">-</span>
        <span className="block font-intro text-center mt-3 lg:inline-block lg:text-left lg:text-xl">
          Sistem Pemeliharaan Jalan dan Jembatan Jawa Barat
        </span>
        <div className="w-full bg-white mt-8 rounded-lg">
          <span className="inline-block my-6 mx-8 font-bold font-lora text-xl lg:text-2xl">
            Sapu Lobang
          </span>
          <div className="border-t border-gray-300 overflow-x-auto">
            <SapuLobangChart />
          </div>
        </div>
      </div>
    </Container>
  )
}
