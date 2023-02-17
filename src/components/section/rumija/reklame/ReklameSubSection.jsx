import ReklameChart from './ReklameChart'

export default function ReklameSubSection() {
  return (
    <>
      <div className="mt-16">
        <span className="font-lora text-xl font-bold">Pemasangan Reklame</span>
      </div>
      <div className="mt-8 w-full rounded-lg border border-gray-300 bg-white">
        <span className="my-6 mx-8 inline-block font-lora text-xl font-bold">
          Chart Pemasangan Reklame
        </span>
        <div className="overflow-x-auto border-t border-gray-300">
          <ReklameChart />
        </div>
      </div>
    </>
  )
}
