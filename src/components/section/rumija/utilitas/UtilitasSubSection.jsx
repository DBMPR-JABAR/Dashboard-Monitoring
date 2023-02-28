import UtilitasChart from './UtilitasChart'

export default function UtilitasSubSection() {
  return (
    <>
      <div className="mt-8">
        <span className="font-lora text-xl font-bold">Pemasangan Utilitas</span>
      </div>
      <div className="mt-8 w-full rounded-lg border border-gray-300 bg-white">
        <span className="my-6 mx-8 inline-block font-lora text-xl font-bold">
          Data Pemasangan Utilitas
        </span>
        <div className="overflow-x-auto border-t border-gray-300">
          <UtilitasChart />
        </div>
      </div>
    </>
  )
}
