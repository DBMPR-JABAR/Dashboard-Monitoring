import Image from 'next/image'
import discussionSvg from '../../assets/images/discussion.svg'

export default function Hero() {
  return (
    <div className="px-6 py-16 md:flex md:justify-between md:items-center md:px-10">
      <div>
        <span className="block text-2xl text-gray-900 font-bold font-intro text-center mb-8 md:text-left">
          Selamat Datang Dashboard Monitoring Temanjabar
        </span>
      </div>
      <Image
        className="my-3 w-4/5 m-auto md:w-1/2"
        src={discussionSvg}
        alt="Logo Temanjabar"
      />
    </div>
  )
}
