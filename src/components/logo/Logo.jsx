import Image from 'next/image'
import logoDashboard from '../../assets/logo/logo_dashboard_monitoring.png'

export default function Logo({ height, width }) {
  return (
    <Image
      height={height ?? 48}
      width={width}
      src={logoDashboard}
      alt="Logo Temanjabar"
    />
  )
}
