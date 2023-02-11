import Image from 'next/image'
import dotsGridAccentBlue from '../../assets/images/dots-grid-accent-blue.svg'

export default function CardInfo({ children, className }) {
  return (
    <div
      className={`relative p-6 rounded-lg border border-blue-600 bg-blue-100 overflow-hidden ${className}`}
    >
      <Image
        src={dotsGridAccentBlue}
        alt="Dot Grid Accent Blue"
        className="absolute top-3 right-3 h-4/5"
      />
      {children}
    </div>
  )
}
