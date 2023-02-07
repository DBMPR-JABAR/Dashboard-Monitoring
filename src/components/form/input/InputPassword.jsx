import { useState } from 'react'

import Image from 'next/image'

import visibleFillBlackSvg from '../../../assets/icon/visible_fill_black.svg'
import invisibleFillBlackSvg from '../../../assets/icon/invisible_fill_black.svg'

export default function InputPassword({ placeHolderText }) {
  const [isVisible, setIsVisible] = useState(false)

  const handleVisibility = () => setIsVisible((visible) => !visible)

  return (
    <div className="relative">
      <input
        className="w-full rounded-lg border border-gray-400 bg-gray-50 p-3 focus:border-primaryGreen focus:border-2"
        placeholder={placeHolderText}
        type={isVisible ? 'text' : 'password'}
      />
      <Image
        src={isVisible ? invisibleFillBlackSvg : visibleFillBlackSvg}
        className="absolute w-6 top-1/2 -translate-y-1/2 right-3"
        alt="Icon Visible"
        onClick={handleVisibility}
      />
    </div>
  )
}
