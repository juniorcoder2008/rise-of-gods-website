import React from 'react';

import './Hero.sass';

const Hero = () => {
  return (
    <div id='hero'>
      <h1 className='hero-heading'>A <span>role play</span> game</h1>
      <p className='hero-desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>

      <div className="buttons">
        <button className="windows">Für Windows herunterladen</button>
        <button className="mac">Für Mac herunterladen</button>
      </div>

      <div className="values">
        <div className="val">
          <h1>6 Monate</h1>
          <h2>Arbeit</h2>
        </div>
        <div className="val">
          <h1>9 RPG</h1>
          <h2>Fans</h2>
        </div>
        <div className="val">
          <h1>5.000 Zeilen</h1>
          <h2>Dialog</h2>
        </div>
      </div>
    </div>
  )
}

export default Hero