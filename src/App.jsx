import React, { useState } from 'react';

// Import components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Discord from './components/Discord/Discord';
import Footer from './components/Footer/Footer';

const App = () => {

  const [scroll, setScroll] = useState(false);

  window.addEventListener('scroll', e => {
    if(window.scrollY === 0) {
      setScroll(false);
    }
    else {
      setScroll(true);
    }
  })

  return (
    <div className='App'>
      <Navbar scroll={scroll} />
      <Hero />
      <About />
      <Discord />
      <Footer />
    </div>
  )
}

export default App