import Link from 'next/link'

export default function TextLink({ text, href = '#', className, onClick }) {
  return (
    <Link
      href={href}
      className={`text-primary-green font-lato font-bold ${className}`}
      onClick={onClick}
    >
      {text}
    </Link>
  )
}
