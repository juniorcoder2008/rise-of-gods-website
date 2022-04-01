import React from 'react';

// Import components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Discord from './components/Discord/Discord';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <Discord />
      <Footer />
    </div>
  )
}

export default App