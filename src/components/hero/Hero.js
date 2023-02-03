import Image from 'next/image';
import discussionSvg from '../../assets/images/discussion.svg';

export default function Hero() {
    return (
        <div className="flex justify-between items-center px-48 py-16">
            <div>
                <span className="block max-w-md text-4xl text-gray-900 font-bold font-intro tracking-wide leading-[3.25rem]">
                    Selamat Datang Dashboard Monitoring Temanjabar
                </span>
            </div>
            <Image
                className="my-3 mx-5 max-w-sm"
                src={discussionSvg}
                alt="Logo Temanjabar" />
        </div>
    );
}