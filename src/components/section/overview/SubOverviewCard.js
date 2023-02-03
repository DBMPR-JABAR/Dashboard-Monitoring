import Image from "next/image";
import locationSvg from '../../../assets/icon/location.svg';

export default function SubOverviewCard(props) {
    return (
        <div className="p-6 rounded-lg relative text-gray-900 bg-white">
            <div className="flex justify-between items-center">
                <span className="font-bold">{props.uptdName}</span>
                <div className="flex items-center px-4 py-1 rounded-full text-white bg-primaryGreen">
                    <span className="text-sm">Lokasi</span>
                    <Image className="ml-2" src={locationSvg} />
                </div>
            </div>
            <div className="mt-6 pb-6 border-b border-gray-300">
                <span className="block text-sm mb-1">Panjang Ruas</span>
                <span className="font-bold text-primaryGreen">{props.panjangRuas}</span>
            </div>
            <div className="flex justify-between mt-6">
                <div>
                    <span className="block text-sm mb-1">Jumlah Ruas</span>
                    <span className="font-bold text-primaryGreen">{props.jumlahRuas}</span>
                </div>
                <div>
                    <span className="block text-sm mb-1">Jumlah Jembatan</span>
                    <span className="font-bold text-primaryGreen">{props.jumlahJembatan}</span>
                </div>
            </div>
        </div>
    );
}