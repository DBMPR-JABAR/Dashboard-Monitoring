import Link from 'next/link'

export default function TextLink({ text, href = '#', className, onClick }) {
  return (
    <Link
      href={href}
      className={`text-primaryGreen font-lato font-bold ${className}`}
      onClick={onClick}
    >
      {text}
    </Link>
  )
}
