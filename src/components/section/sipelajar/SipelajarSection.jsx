import Container from '../../container/Container'
import SapuLobangSubSection from './sapu_lobang/SapuLobangSubSection'

export default function SipelajarSection() {
  return (
    <Container>
      <div className="mt-16">
        <span className="block text-center font-intro font-bold text-2xl">
          Sipelajar
        </span>
        <span className="block font-intro text-center mt-3">
          Sistem Pemeliharaan Jalan dan Jembatan Jawa Barat
        </span>
      </div>
      <SapuLobangSubSection />
    </Container>
  )
}
