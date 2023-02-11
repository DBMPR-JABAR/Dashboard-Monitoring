import Image from 'next/image'
import dotsGridAccentYellow from '../../assets/images/dots-grid-accent-yellow.svg'

export default function CardWarning({ children, className }) {
  return (
    <div
      className={`relative p-6 rounded-lg border border-yellow-600 bg-yellow-100 overflow-hidden ${className}`}
    >
      <Image
        src={dotsGridAccentYellow}
        alt="Dot Grid Accent Yellow"
        className="absolute top-3 right-3 h-4/5"
      />
      {children}
    </div>
  )
}
