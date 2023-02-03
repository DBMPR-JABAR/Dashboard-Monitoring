import Image from 'next/image';
import logoDashboard from '../../assets/logo/logo_dashboard_monitoring.png';

export default function Logo() {
    return (
        <Image
            className="max-w-logo-md"
            src={logoDashboard}
            alt="Logo Temanjabar" />
    )
}