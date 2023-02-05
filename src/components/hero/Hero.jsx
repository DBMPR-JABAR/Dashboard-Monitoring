import Image from 'next/image'
import discussionSvg from '../../assets/images/discussion.svg'

export default function Hero() {
  return (
    <div className="flex-row justify-center items-center px-6 py-16">
      <div>
        <span className="block text-2xl text-gray-900 font-bold font-intro text-center mb-8">
          Selamat Datang Dashboard Monitoring Temanjabar
        </span>
      </div>
      <Image
        className="my-3 w-4/5 m-auto"
        src={discussionSvg}
        alt="Logo Temanjabar"
      />
    </div>
  )
}
