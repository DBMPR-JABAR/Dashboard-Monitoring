import Head from 'next/head'
import Hero from '../components/hero/Hero'
import OverviewSection from '../components/section/overview/OverviewSection'
import Footer from '../components/footer/Footer'
import Nav from '../components/nav/Nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard Monitoring</title>
        <meta name="description" content="Dashboard Monitoring Kegiatan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/logo_temanjabar.ico" />
      </Head>
      <Nav />
      <Hero />
      <main>
        <OverviewSection />
      </main>
      <Footer />
    </>
  )
}
