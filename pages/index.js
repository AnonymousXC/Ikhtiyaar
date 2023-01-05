import NavBar from '../components/Navigation Bar'
import HomeSection from '../components/sections/Home'
import { useEffect } from 'react'

export default function Home() {


  useEffect(() => {
    document.documentElement.style.setProperty('--height', `${window.innerHeight}px`)
    window.addEventListener('resize', (e) => {
      document.documentElement.style.setProperty('--height', `${window.innerHeight}px`)
    })
  }, [])

  return (
    <>
      <NavBar />
      <HomeSection />
    </>
  )
}
