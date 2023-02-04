import FooterSection from '../logo/FooterSection'
import Logo from '../logo/Logo'

import locationFillGreenSvg from '../../assets/icon/location_fill_green.svg'
import phoneFillGreenSvg from '../../assets/icon/phone_fill_green.svg'
import mailFillGreenSvg from '../../assets/icon/mail_fill_green.svg'

export default function Footer() {
  return (
    <footer className="mt-32 bg-white">
      <div className="px-32 py-12 border-b border-gray-300">
        <Logo height={80} />
        <div className="flex mt-12">
          <div className="flex-1 mr-6">
            <FooterSection
              title="DBMPR Provinsi Jawa Barat"
              desc="Jl. Asia Afrika No.79, Braga, Kec. Lengkong, Kota Bandung, Jawa Barat 40111"
              source={locationFillGreenSvg}
              useBorderBottom
            />
            <FooterSection
              title="Telepon"
              desc="+62 367 467 8934"
              source={phoneFillGreenSvg}
              useBorderBottom
            />
            <FooterSection
              title="Email"
              desc="temanjabar@jabarprov.go.id"
              source={mailFillGreenSvg}
            />
          </div>
          <div className="flex-1  mr-6">Test 2</div>
          <div className="flex-1">Test 3</div>
        </div>
      </div>
      <div className="px-32 py-6 text-center">Copyright</div>
    </footer>
  )
}
