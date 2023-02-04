import Image from 'next/image'
import FooterSection from './FooterSection'
import Logo from '../logo/Logo'

import locationFillGreenSvg from '../../assets/icon/location_fill_green.svg'
import phoneFillGreenSvg from '../../assets/icon/phone_fill_green.svg'
import mailFillGreenSvg from '../../assets/icon/mail_fill_green.svg'
import layersFillGreenSvg from '../../assets/icon/layers_fill_green.svg'
import peopleFillGreenSvg from '../../assets/icon/people_fill_green.svg'
import instagramSvg from '../../assets/icon/instagram_color.svg'
import twitterSvg from '../../assets/icon/twitter_color.svg'
import youtubeSvg from '../../assets/icon/youtube_color.svg'
import logoTjGray from '../../assets/logo/logo_tj_gray.png'

export default function Footer() {
  return (
    <footer className="mt-32 bg-white">
      <div className="px-32 py-12 border-b border-gray-300 relative">
        <div className="relative z-10">
          <Logo height={80} />
          <div className="flex mt-12">
            <div className="flex-1 mr-6">
              <FooterSection
                title="DBMPR Provinsi Jawa Barat"
                source={locationFillGreenSvg}
                useBorderBottom
              >
                Jl. Asia Afrika No.79, Braga, Kec. Lengkong, Kota Bandung, Jawa
                Barat 40111
              </FooterSection>
              <FooterSection
                title="Telepon"
                source={phoneFillGreenSvg}
                useBorderBottom
              >
                +62 367 467 8934
              </FooterSection>
              <FooterSection title="Email" source={mailFillGreenSvg}>
                temanjabar@jabarprov.go.id
              </FooterSection>
            </div>
            <div className="flex-1 mr-6">
              <FooterSection
                title="Ekosistem Temanjabar"
                source={layersFillGreenSvg}
              >
                <a href="#" className="block mb-2 hover:text-primaryGreen">
                  Temanjabar
                </a>
                <a href="#" className="block mb-2 hover:text-primaryGreen">
                  Talikuat
                </a>
                <a href="#" className="block mb-2 hover:text-primaryGreen">
                  Sipelajar
                </a>
                <a href="#" className="block mb-2 hover:text-primaryGreen">
                  Systarumija
                </a>
                <a href="#" className="block mb-2 hover:text-primaryGreen">
                  Labkon
                </a>
              </FooterSection>
            </div>
            <div className="flex-1">
              <FooterSection title="Ikuti Kami" source={peopleFillGreenSvg}>
                <div className="flex w-1/2 justify-between">
                  <a href="#">
                    <Image
                      src={instagramSvg}
                      height={24}
                      alt="Icon Instagram"
                    />
                  </a>
                  <a href="#">
                    <Image src={twitterSvg} height={24} alt="Icon Twitter" />
                  </a>
                  <a href="#">
                    <Image src={youtubeSvg} height={24} alt="Icon Youtube" />
                  </a>
                </div>
              </FooterSection>
            </div>
          </div>
        </div>
        <Image
          className="absolute bottom-0 right-0 z-0"
          src={logoTjGray}
          alt="Logo Temanjabar"
        />
      </div>
      <div className="px-32 py-6 bg-primaryGreen text-center text-sm text-white">
        Copyright © 2023 Temanjabar | Dinas Bina Marga dan Penataan Ruang
        Provinsi Jawa Barat. All Right Reserved
      </div>
    </footer>
  )
}
