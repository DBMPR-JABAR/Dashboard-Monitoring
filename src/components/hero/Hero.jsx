import Image from 'next/image'
import discussionSvg from '../../assets/images/discussion.svg'

export default function Hero() {
  return (
    <div className="px-6 py-16 md:flex md:justify-between md:items-center md:px-10 lg:px-16 xl:px-32">
      <span className="block text-2xl text-gray-900 font-bold font-intro text-center mb-8 max-w-md md:mr-16 md:text-left xl:text-3xl xl:leading-[3.25rem]">
        Selamat Datang Dashboard Monitoring Temanjabar
      </span>
      <Image
        className="my-3 w-4/5 m-auto md:w-1/2 xl:w-1/3 md:m-0"
        src={discussionSvg}
        alt="Logo Temanjabar"
      />
    </div>
  )
}
