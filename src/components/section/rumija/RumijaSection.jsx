import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../../container/Container'
import JalanMasukSubSection from './jalan_masuk/JalanMasukSubSection'
import ReklameSubSection from './reklame/ReklameSubSection'
import UtilitasSubSection from './utilitas/UtilitasSubSection'
import { fetchRekapRumija } from '../../../state/redux/dashboard/rekap/rumija'

export default function RumijaSection() {
  const rekapRumija = useSelector((state) => state.dashboard.rekap.rumija)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRekapRumija())
  }, [dispatch])

  return (
    <Container>
      <div className="mt-16">
        <span className="block text-center font-intro text-2xl font-bold">
          Rumija
        </span>
        <span className="mt-3 block text-center font-intro">
          Sistem Monitoring Jalan Ruang Milik Jalan
        </span>
      </div>
      <UtilitasSubSection />
      <ReklameSubSection />
      <JalanMasukSubSection />
    </Container>
  )
}
