import { useEffect } from 'react'
import './App.css'
import Lenis from '@studio-freight/lenis'
import BeforeSign from './Pages/BeforeSign/BeforeSign'

function App() {
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])
  return (
    <>
      <BeforeSign />
    </>
  )
}

export default App
