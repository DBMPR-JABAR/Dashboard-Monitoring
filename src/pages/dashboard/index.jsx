import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

import Head from 'next/head'
import Hero from '../../components/hero/Hero'
import OverviewSection from '../../components/section/overview/OverviewSection'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import TalikuatSection from '../../components/section/talikuat/TalikuatSection'
import SapuLobangSection from '../../components/section/sapu_lobang/SapuLobangSection'
import AuthContext from '../../context/auth_context'

export default function Home() {
  const router = useRouter()
  const authContext = useContext(AuthContext)

  useEffect(() => {
    const checkAuthentication = async () => {
      if (!authContext.state.user) {
        await router.replace('/login')
      }
    }

    checkAuthentication()
  }, [authContext.state.user, router])

  const showLoading = () => {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading ...
      </div>
    )
  }
  const showDashboardComponent = () => {
    return (
      <>
        <Nav />
        <Hero />
        <main>
          <OverviewSection />
          <SapuLobangSection />
        </main>
        <Footer />
      </>
    )
  }

  const render = () => {
    if (authContext.state.user) {
      return showDashboardComponent()
    }

    return showLoading()
  }

  return (
    <>
      <Head>
        <title>Dashboard Monitoring</title>
        <meta name="description" content="Dashboard Monitoring Kegiatan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/logo_temanjabar.ico" />
      </Head>
      <div className="bg-green-50">{render()}</div>
    </>
  )
}
