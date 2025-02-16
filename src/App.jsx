import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Home from './components/Home'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 to-gray-700  text-gray-900 font-sans">
   <section id="header" className='h-[160px] lg:h-full'>

<Header/>
</section>
    <section id="home" className="h-screen flex items-center justify-center">

      <Home/>
    </section>
    <section id="about" className="h-full flex items-center justify-center">
      <About />
    </section>
    
    <section id="skills" className="h-full flex items-center justify-center"><Skills/></section>
    <section id="portfolio" className="h-full flex items-center justify-center">
      <Portfolio/>
    </section>
    <section id="contact" className="h-full flex items-center justify-center"><Contact/></section>
    <section id="footer" className="h-full flex items-center justify-center"><Footer/></section>
  </div>
  )
}

export default App