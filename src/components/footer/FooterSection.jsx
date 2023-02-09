import Image from 'next/image'

export default function FooterSection({
  useBorderBottom,
  source,
  title,
  children,
}) {
  return (
    <div
      className={`mt-6 pb-6 grid grid-cols-[min-content_auto] items-center ${
        useBorderBottom ? 'border-b border-gray-300' : ''
      }`}
    >
      <div className="flex h-4 w-6 mr-4">
        <Image src={source} alt="Icon" />
      </div>
      <span className="block font-bold font-default text-primary-green">
        {title}
      </span>
      <span className="block mt-3 col-start-2 col-end-auto font-lato text-sm">
        {children}
      </span>
    </div>
  )
}
