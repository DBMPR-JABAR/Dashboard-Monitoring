import Image from 'next/image'

export default function FooterSection({
  useBorderBottom,
  source,
  title,
  desc,
}) {
  return (
    <div
      className={`mt-6 pb-6 flex items-start ${
        useBorderBottom ? 'border-b border-gray-300' : ''
      }`}
    >
      <Image src={source} height={20} width={20} />
      <div className="ml-4 text-gray-800">
        <span className="block font-bold font-default text-primaryGreen">
          {title}
        </span>
        <span className="block mt-3 font-lato text-sm">{desc}</span>
      </div>
    </div>
  )
}
