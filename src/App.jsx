import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import Hero from './Sections/Hero'
import How from './Sections/How'
import Team from './Sections/Team'
import Journey from './Sections/Journey'
import Connect from './Components/Connect'
import Footer from './Sections/Footer'

function App() {
 
  return (
    <>
      <main>
          
       
       <section className=' bg-primary' >
       <Nav/>
            <Hero className='padding-x pb'/>  
       </section>
       <section className='padding-x bg-slate-50'>
              <How/>
       </section>
       <section className='padding-x  bg-slate-green '>
              <Team/>
       </section>
       <section className='padding-x'>
              <Journey/>
       </section>
       <section className='padding-x bg-stroke'>
              <Connect/>
       </section>
       <section className='padding-x padding-b pt-7  bg-black'>
       <Footer/>
       </section>

      </main>
    </>
  )
}

export default App
