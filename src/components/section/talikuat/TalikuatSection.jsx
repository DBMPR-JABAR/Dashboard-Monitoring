import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Container from '../../container/Container'
import fetchRekapTalikuat from '../../../state/redux/dashboard/rekap/talikuat/rekapTalikuatActions'
import LoadingSpinnerWithText from '../../loading/spinner/LoadingSpinnerWithText'
import TalikuatChart from './TalikuatChart'

export default function TalikuatSection() {
  const rekapTalikuat = useSelector((state) => state.dashboard.rekap.talikuat)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRekapTalikuat())
  }, [dispatch])

  const showPaket = () => {
    if (rekapTalikuat.isLoading) {
      return <LoadingSpinnerWithText />
    } else {
      return rekapTalikuat.data
        .filter((elem) => !elem.nm_paket.toLowerCase().includes('test'))
        .map((paket) => <div key={paket.id}>{paket.nm_paket}</div>)
    }
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
        <div className="w-full bg-white mt-8 rounded-lg border border-gray-300">
          <span className="inline-block my-6 mx-8 font-bold font-lora text-xl">
            Chart Talikuat
          </span>
          <div className="border-t border-gray-300 overflow-x-auto overflow-y-auto max-h-[600px]">
            <TalikuatChart />
          </div>
        </div>
      </div>
    </Container>
  )
}
