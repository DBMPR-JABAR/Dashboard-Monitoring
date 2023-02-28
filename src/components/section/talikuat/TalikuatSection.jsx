import { useDispatch } from 'react-redux'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Select from 'react-select'
import Container from '../../container/Container'
import fetchRekapTalikuat from '../../../state/redux/dashboard/rekap/talikuat/rekapTalikuatActions'
import TalikuatChart from './TalikuatChart'

import chevronLeftFillBlackSvg from '../../../assets/icon/chevron_left_fill_black.svg'

const yearOptions = [
  { value: 2022, label: '2022' },
  { value: 2023, label: '2023' },
]

const uptdOptions = [
  { value: 'all', label: 'Semua UPTD' },
  { value: 1, label: 'UPTD I' },
  { value: 2, label: 'UPTD II' },
  { value: 3, label: 'UPTD III' },
  { value: 4, label: 'UPTD IV' },
  { value: 5, label: 'UPTD V' },
  { value: 6, label: 'UPTD VI' },
]

export default function TalikuatSection() {
  const dispatch = useDispatch()

  const [year, setYear] = useState(2023)
  const [uptd, setUptd] = useState(null)
  const [paketPekerjaan, setPaketPekerjaan] = useState(null)

  useEffect(() => {
    dispatch(fetchRekapTalikuat(year, uptd))
  }, [dispatch, year, uptd])

  const handlePaketPekerjaanOnClick = useCallback(
    (paket) => setPaketPekerjaan(paket),
    []
  )

  const handleYearOnChanged = (value) => {
    setYear(value.value)
  }

  const handleUptdOnChanged = (value) => {
    setUptd(value.value)
  }

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
          <div className="mb-6 grid lg:mb-0 lg:grid-cols-12">
            <div className="flex items-center lg:col-span-8">
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
                    : 'Data Progress Paket Pekerjaan'}
                </span>
              </div>
            </div>
            {paketPekerjaan === null && (
              <div className="mx-8 grid grid-cols-2 gap-4 lg:col-span-4 lg:mx-0 lg:my-4 lg:mr-8">
                <div className="col-span-1">
                  <SelectYear
                    value={yearOptions.find((option) => option.value === year)}
                    onChange={handleYearOnChanged}
                  />
                </div>
                <div className="col-span-1">
                  <SelectUPTD
                    value={uptdOptions.find((option) => option.value === uptd)}
                    onChange={handleUptdOnChanged}
                  />
                </div>
              </div>
            )}
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

const selectStyles = {
  indicatorSeparator: () => ({ display: 'hidden' }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    color: '#16A75C',
    '&:hover': {
      color: '#16A75C',
    },
  }),
  control: (baseStyles) => ({
    ...baseStyles,
    fontFamily: 'Intro',
    fontSize: 13,
    backgroundColor: '#F5F5F5',
    borderColor: '#BDBDBD',
    boxShadow: 0,
    '&:hover': {
      borderColor: '#16A75C',
    },
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    fontFamily: 'Intro',
    fontSize: 13,
    color: state.isSelected ? 'White' : '#212121',
    backgroundColor: state.isSelected ? '#16A75C' : 'White',
    ':hover': {
      backgroundColor: '#4DC27E',
      color: 'White',
    },
  }),
}

function SelectYear({ value, onChange }) {
  return (
    <div>
      <span className="mb-2 block font-intro text-sm font-bold">Tahun</span>
      <Select
        defaultValue={value}
        placeholder="Pilih Tahun"
        options={yearOptions}
        styles={selectStyles}
        onChange={onChange}
      />
    </div>
  )
}

function SelectUPTD({ value, onChange }) {
  return (
    <div>
      <span className="mb-2 block font-intro text-sm font-bold">UPTD</span>
      <Select
        defaultValue={value}
        placeholder="Pilih UPTD"
        options={uptdOptions}
        styles={selectStyles}
        onChange={onChange}
      />
    </div>
  )
}
