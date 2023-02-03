import Head from 'next/head';
import Logo from '../components/nav/Logo';
import Hero from '../components/hero/Hero';
import OverviewSection from '@/components/section/overview/OverviewSection';


export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard Monitoring</title>
        <meta name="description" content="Dashboard Monitoring Kegiatan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/logo_temanjabar.ico" />
      </Head>
      <nav className="flex justify-between items-center py-3 px-44">
        <Logo />
        <div>
          <a href='#' className='font-lato text-sm font-bold text-gray-800'>
            <span>Home</span>
          </a>
        </div>
      </nav>
      <Hero />
      <main>
        <OverviewSection />
      </main>
    </>
  )
}
