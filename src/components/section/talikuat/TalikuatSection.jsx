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
        <span className="block text-center font-intro font-bold text-2xl">
          Talikuat
        </span>
        <span className="block font-intro text-center mt-3">
          Sistem Kendali Kinerja Mutu Kegiatan Infrastruktur
        </span>
        <div className="w-full bg-white mt-8 rounded-lg border border-gray-300">
          <div className="flex my-6 mx-8">
            <Image
              src={chevronLeftFillBlackSvg}
              alt="Icon Back"
              className={`${
                paketPekerjaan ? 'inline-block' : 'hidden'
              } h-5 mr-6 mt-1 hover:cursor-pointer`}
              onClick={() => setPaketPekerjaan(null)}
            />
            <span className="inline-block font-bold font-lora text-xl">
              {paketPekerjaan ? paketPekerjaan.nm_paket : 'Chart Talikuat'}
            </span>
          </div>
          <div className="border-t border-gray-300 overflow-x-auto overflow-y-auto max-h-[600px]">
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
