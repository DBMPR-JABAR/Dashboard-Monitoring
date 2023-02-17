import Container from '../../container/Container'
import SapuLobangSubSection from './sapu_lobang/SapuLobangSubSection'

export default function SipelajarSection() {
  return (
    <Container>
      <div className="mt-16">
        <span className="block text-center font-intro text-2xl font-bold">
          SipelajarSection
        </span>
        <span className="mt-3 block text-center font-intro">
          Sistem Pemeliharaan Jalan dan Jembatan Jawa Barat
        </span>
      </div>
      <SapuLobangSubSection />
    </Container>
  )
}
