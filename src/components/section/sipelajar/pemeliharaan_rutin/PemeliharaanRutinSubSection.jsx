import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchRekapPemeliharaan } from '../../../../state/redux/dashboard/rekap/pemeliharaan'
import PemeliharaanRutinChart from './PemeliharaanRutinChart'

export default function PemeliharaanRutinSubSection() {
  const rekapPemeliharaanState = useSelector(
    (state) => state.dashboard.rekap.pemeliharaan
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRekapPemeliharaan())
  }, [dispatch])

  return (
    <>
      <div className="mt-16">
        <span className="font-lora text-xl font-bold">Pemeliharaan Rutin</span>
      </div>
      <div className="mt-8 w-full rounded-lg border border-gray-300 bg-white">
        <span className="my-6 mx-8 inline-block font-lora text-xl font-bold">
          Chart Pemeliharaan Rutin
        </span>
        <div className="overflow-x-auto border-t border-gray-300">
          <PemeliharaanRutinChart />
        </div>
      </div>
    </>
  )
}
