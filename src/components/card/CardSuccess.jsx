import Image from 'next/image'
import dotsGridAccentGreen from '../../assets/images/dots-grid-accent-green.svg'

export default function CardSuccess({ children, className }) {
  return (
    <div
      className={`relative p-6 rounded-lg border border-green-600 bg-green-100 overflow-hidden ${className}`}
    >
      <Image
        src={dotsGridAccentGreen}
        alt="Dot Grid Accent Green"
        className="absolute top-3 right-3 h-4/5"
      />
      {children}
    </div>
  )
}
