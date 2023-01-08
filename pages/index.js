import HomeSection from '../components/sections/Home';
import Head from 'next/head';
import Footer from '../components/Footer'
import { useEffect } from 'react';
import dynamic from 'next/dynamic'

const NavBarWithoutSSR = dynamic(() => import('../components/Navigation Bar'), { ssr: false })

export default function Home() {

  useEffect(() => {
    document.documentElement.style.setProperty('--height', `${window.innerHeight}px`)
    window.addEventListener('resize', (e) => {
      document.documentElement.style.setProperty('--height', `${window.innerHeight}px`)
    })
  }, [])

  return (
    <>
      <Head>
        <title>Ikhtiyaar</title>
      </Head>
      <NavBarWithoutSSR />
      <HomeSection />
      <Footer />
    </>
  )
}
