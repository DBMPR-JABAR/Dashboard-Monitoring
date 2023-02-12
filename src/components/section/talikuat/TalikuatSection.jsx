import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Container from '../../container/Container'
import fetchRekapTalikuat from '../../../state/redux/dashboard/rekap/talikuat/rekapTalikuatActions'

export default function TalikuatSection() {
  const rekapTalikuat = useSelector((state) => state.dashboard.rekap.talikuat)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRekapTalikuat())
  }, [dispatch])

  const showPaket = () => {
    if (rekapTalikuat.data) {
      return rekapTalikuat.data
        .filter((elem) => !elem.nm_paket.toLowerCase().includes('test'))
        .map((paket) => <div key={paket.id}>{paket.nm_paket}</div>)
    }
    return null
  }

  return (
    <Container>
      <div className="mt-16">
        <span className="block text-center font-intro font-bold text-2xl">
          Talikuat
        </span>
        <span className="block font-intro text-center mt-3">
          Sistem Kendali Kinerja Mutu Kegiatan Infrastruktur
        </span>
        {showPaket()}
      </div>
    </Container>
  )
}
