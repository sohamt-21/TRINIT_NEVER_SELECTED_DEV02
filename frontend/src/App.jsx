import { useEffect } from 'react'
import './App.css'
import Lenis from '@studio-freight/lenis'
import MainRender from './Pages/MainRender';
import {Routes,Route} from 'react-router-dom';
import Profile from './Pages/Profile';
import Student from './Pages/SampleProfiles/Student';
import Tutor from './Pages/SampleProfiles/Tutor';
import FilterTrial from './Pages/FilterTrial';

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
      <Routes>
        <Route path='/' Component={MainRender} />
        <Route path='/profile' Component={Profile} />
        <Route path='/studProfile' Component={Student} />
        <Route path='/TutProfile' Component={Tutor} />
        {/* <Route path='/' Component={FilterTrial} /> */}
    
      </Routes>
    </>
  )
}

export default App
