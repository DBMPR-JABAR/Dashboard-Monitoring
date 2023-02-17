import { useDispatch } from 'react-redux'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Container from '../../container/Container'
import fetchRekapTalikuat from '../../../state/redux/dashboard/rekap/talikuat/rekapTalikuatActions'
import TalikuatChart from './TalikuatChart'

import chevronLeftFillBlackSvg from '../../../assets/icon/chevron_left_fill_black.svg'

export default function TalikuatSection() {
  const dispatch = useDispatch()

  const [paketPekerjaan, setPaketPekerjaan] = useState(null)

  useEffect(() => {
    dispatch(fetchRekapTalikuat())
  }, [dispatch])

  const handlePaketPekerjaanOnClick = useCallback(
    (paket) => setPaketPekerjaan(paket),
    []
  )

  return (
    <Container>
      <div className="mt-16">
        <span className="block text-center font-intro text-2xl font-bold">
          Talikuat
        </span>
        <span className="mt-3 block text-center font-intro">
          Sistem Kendali Kinerja Mutu Kegiatan Infrastruktur
        </span>
        <div className="mt-8 w-full rounded-lg border border-gray-300 bg-white">
          <div className="my-6 mx-8 flex">
            <Image
              src={chevronLeftFillBlackSvg}
              alt="Icon Back"
              className={`${
                paketPekerjaan ? 'inline-block' : 'hidden'
              } mr-6 mt-1 h-5 hover:cursor-pointer`}
              onClick={() => setPaketPekerjaan(null)}
            />
            <span className="inline-block font-lora text-xl font-bold">
              {paketPekerjaan
                ? paketPekerjaan.data_umum.nm_paket
                : 'Chart Talikuat'}
            </span>
          </div>
          <div className="max-h-[800px] min-h-[500px] overflow-x-auto overflow-y-auto border-t border-gray-300 p-8">
            <TalikuatChart
              paketPekerjaan={paketPekerjaan}
              handlePaketPekerjaanOnClick={handlePaketPekerjaanOnClick}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
