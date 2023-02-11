import Shimmer from '../../components/loading/shimmer/Shimmer'

export default function ShimmerPage() {
  return (
    <div>
      <Shimmer width={500}>
        <div className="p-16">Test</div>
      </Shimmer>
    </div>
  )
}
