import { useState } from 'react'

import Image from 'next/image'

import arrowRightFillWhiteSvg from '../../../assets/icon/arrow_right_fill_white.svg'

export default function AppCard({ appName, logo, link }) {
  const [isOnHover, setIsOnHover] = useState(false)

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="block pt-8 bg-white rounded-lg m-6 overflow-hidden md:w-1/3 md:m-4 lg:w-1/4 xl:w-1/5 hover:cursor-pointer"
      onMouseEnter={() => setIsOnHover(true)}
      onMouseLeave={() => setIsOnHover(false)}
    >
      <Image
        src={logo}
        className="w-48 mx-auto sm:mx-auto sm:h-20"
        alt={`Logo ${appName}`}
      />
      <div
        className={`flex justify-center items-center py-3 px-6 mt-8 transition-all ${
          isOnHover ? 'bg-green-700' : 'bg-primaryGreen'
        }`}
      >
        <span
          className={`text-white font-bold font-lato transition-all ${
            isOnHover ? 'mr-4' : 'mr-2'
          }`}
        >
          {appName}
        </span>
        <Image
          src={arrowRightFillWhiteSvg}
          className="w-4"
          alt={`Logo ${appName}`}
        />
      </div>
    </a>
  )
}
