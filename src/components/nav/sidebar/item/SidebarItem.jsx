import Link from 'next/link'

export default function SidebarItem({ children, active, link, onClick }) {
  return (
    <Link
      href={link}
      className={`block border-b border-[#FAFAFA50] ${
        active && 'bg-[#E6F6EC80]'
      }`}
      onClick={onClick}
    >
      <span className="mx-6 my-4 inline-block font-lato text-sm font-bold text-white">
        {children}
      </span>
    </Link>
  )
}
