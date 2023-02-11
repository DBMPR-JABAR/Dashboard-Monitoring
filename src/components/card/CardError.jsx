import Image from 'next/image'
import dotsGridAccentError from '../../assets/images/dots-grid-accent-red.svg'

export default function CardError({ children, className }) {
  return (
    <div
      className={`relative p-6 rounded-lg border border-red-600 bg-red-100 overflow-hidden ${className}`}
    >
      <Image
        src={dotsGridAccentError}
        alt="Dot Grid Accent Red"
        className="absolute top-3 right-3 h-4/5"
      />
      {children}
    </div>
  )
}
