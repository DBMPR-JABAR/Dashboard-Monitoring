import AppCard from './AppCard'

import logoTkWithTextPng from '../../../assets/logo/logo_tk_with_text.png'
import logoSpWithTextPng from '../../../assets/logo/logo_sp_with_text.png'
import logoRmWithTextPng from '../../../assets/logo/logo_rm_with_text.png'
import logoLkWithTextPng from '../../../assets/logo/logo_lk_with_text.png'
import Container from '../../container/Container'

export default function RelatedAppSection() {
  return (
    <Container>
      <div className="mt-16">
        <span className="block text-center font-intro font-bold text-xl">
          Ekosistem Temanjabar
        </span>
        <div className="mt-4 md:flex md:justify-center md:gap-4 md:mt-6 md:flex-wrap">
          <AppCard
            appName="Talikuat"
            logo={logoTkWithTextPng}
            link="https://tk.temanjabar.net"
          />
          <AppCard
            appName="Sipelajar"
            logo={logoSpWithTextPng}
            link="https://sp.temanjabar.net"
          />
          <AppCard
            appName="Systarumija"
            logo={logoRmWithTextPng}
            link="https://rm.temanjabar.net"
          />
          <AppCard
            appName="Labkon"
            logo={logoLkWithTextPng}
            link="https://lk.temanjabar.net"
          />
        </div>
      </div>
    </Container>
  )
}
