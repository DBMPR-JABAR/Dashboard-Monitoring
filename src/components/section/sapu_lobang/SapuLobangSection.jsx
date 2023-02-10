import Container from '../../container/Container'
import SapuLobangChart from './SapuLobangChart'

export default function SapuLobangSection() {
  return (
    <Container>
      <div className="mt-16">
        <span className="block text-center font-intro font-bold text-xl">
          Sipelajar
        </span>
        <span className="hidden mx-2 font-intro">-</span>
        <span className="block font-intro text-center mt-3">
          Sistem Pemeliharaan Jalan dan Jembatan Jawa Barat
        </span>
        <div className="w-full bg-white mt-8 rounded-lg">
          <span className="inline-block m-6 font-bold">Sapu Lobang</span>
          <div className="border-t border-gray-300 p-6 overflow-x-scroll">
            <SapuLobangChart />
          </div>
        </div>
      </div>
    </Container>
  )
}
