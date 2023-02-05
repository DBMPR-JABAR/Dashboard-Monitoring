import Image from 'next/image'
import logoTjGreen from '../../../assets/logo/logo_tj_green.png'

export default function MainOverviewCard() {
  return (
    <div className="row-span-2 p-6 rounded-lg relative text-white bg-primaryGreen md:row-span-1 md:col-span-2">
      <div className="relative z-10">
        <div className="w-[70%]">
          <span className="font-roboto font-bold">
            DINAS BINA MARGA DAN PENATAAN RUANG PROVINSI JAWA BARAT
          </span>
        </div>
        <div className="mt-6 font-roboto">
          <span className="block text-sm mb-1">Panjang Ruas</span>
          <span className="font-bold">2.362,183 KM</span>
        </div>
        <div className="mt-6 font-roboto">
          <span className="block text-sm mb-1">Jumlah Ruas</span>
          <span className="font-bold">297</span>
        </div>
        <div className="mt-6 font-roboto">
          <span className="block text-sm mb-1">Jumlah Jembatan</span>
          <span className="font-bold">830</span>
        </div>
      </div>
      <Image
        className="absolute bottom-0 right-0 z-0 w-36 md:w-48"
        src={logoTjGreen}
        alt="Logo Temanjabar"
      />
    </div>
  )
}
