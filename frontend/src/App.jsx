import { useEffect } from 'react'
import './App.css'
import Lenis from '@studio-freight/lenis'
import MainRender from './Pages/MainRender';
import {Routes,Route} from 'react-router-dom';
import Profile from './Pages/Profile';
import TutDash from './Pages/TutorDashBoard/TutDash';
import ViewTutor from './Pages/ViewTutor/ViewTutor';
import StriprWrapper from './Pages/ViewTutor/StripeWrapper';


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
        <Route path='/view' element={<ViewTutor/>} />
        <Route path='/stripe' Component={StriprWrapper} />
        <Route path='/tutDash' Component={TutDash} />
      </Routes>
    </>
  )
}

export default App
