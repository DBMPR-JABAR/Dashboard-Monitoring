import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import Head from 'next/head'
import OverviewSection from '../../components/section/overview/OverviewSection'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import TalikuatSection from '../../components/section/talikuat/TalikuatSection'
import SipelajarSection from '../../components/section/sipelajar/SipelajarSection'
import LoadingSpinner from '../../components/loading/spinner/LoadingSpinner'
import Container from '../../components/container/Container'

export default function DashboardPage() {
  const authState = useSelector((state) => state.auth)
  const router = useRouter()

  useEffect(() => {
    const checkAuthentication = async () => {
      if (!authState.user && !authState.isLoading) {
        await router.replace('/login')
      }
    }

    checkAuthentication()
  }, [router, authState])

  const showLoading = () => {
    return <LoadingSpinner />
  }
  const showDashboardComponent = () => {
    return (
      <>
        <Nav />
        <main>
          <Container>
            <div className="my-16">
              <span className="block text-center font-intro text-2xl font-bold">
                Dashboard Monitoring Teman Jabar
              </span>
              <span className="mt-3 block text-center font-intro">
                Dinas Bina Marga dan Penataan Ruang Provinsi Jawa Barat
              </span>
            </div>
          </Container>
          <OverviewSection />
          <TalikuatSection />
          <SipelajarSection />
        </main>
        <Footer />
      </>
    )
  }

  const render = () => {
    if (authState.user) {
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
      <div className="bg-green-50/[0.5]">{render()}</div>
    </>
  )
}
