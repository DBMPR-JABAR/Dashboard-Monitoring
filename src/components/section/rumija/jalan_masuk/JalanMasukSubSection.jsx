import JalanMasukChart from './JalanMasukChart'

export default function JalanMasukSubSection() {
  return (
    <>
      <div className="mt-16">
        <span className="font-lora text-xl font-bold">Jalan Masuk</span>
      </div>
      <div className="mt-8 w-full rounded-lg border border-gray-300 bg-white">
        <span className="my-6 mx-8 inline-block font-lora text-xl font-bold">
          Chart Jalan Masuk
        </span>
        <div className="overflow-x-auto border-t border-gray-300">
          <JalanMasukChart />
        </div>
      </div>
    </>
  )
}
