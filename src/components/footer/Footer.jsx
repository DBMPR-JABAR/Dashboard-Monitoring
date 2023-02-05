import Image from 'next/image'
import FooterSection from './FooterSection'
import Logo from '../logo/Logo'

import useWindowDimensions from '../../hooks/useWindowDimensions'

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
  const { width } = useWindowDimensions()

  return (
    <footer className="mt-32 bg-white">
      <div className="px-8 py-12 border-b border-gray-300 relative">
        <div className="relative z-10">
          <Logo height={48} />
          <div className="mt-12 lg:flex">
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
              <FooterSection
                title="Email"
                source={mailFillGreenSvg}
                useBorderBottom={width < 640}
              >
                temanjabar@jabarprov.go.id
              </FooterSection>
            </div>
            <div className="flex-1 mr-6">
              <FooterSection
                title="Ekosistem Temanjabar"
                source={layersFillGreenSvg}
                useBorderBottom={width < 640}
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
                <div className="flex w-1/2 justify-between md:w-1/4 lg:w-2/3">
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
          className="absolute bottom-0 right-0 z-0 w-56 md:w-72"
          src={logoTjGray}
          alt="Logo Temanjabar"
        />
      </div>
      <div className="px-8 py-6 bg-primaryGreen text-center text-sm text-white">
        <span className="block mb-1 lg:inline-block lg:mb-0 lg:mr-1">
          Copyright © 2023
        </span>
        <span className="block mb-1 lg:inline-block lg:mr-1">
          Dinas Bina Marga dan Penataan Ruang Provinsi Jawa Barat
        </span>
        <span className="block">All Right Reserved</span>
      </div>
    </footer>
  )
}
