import React from 'react';
import screenshot from '../images/screenshot.png';

const Hero = () => {
  return <section className='hero'>
      <img src={screenshot} alt="ScreenShot" className='hero-photo' />
      <h1 className='hero-title'>Online Experiences</h1>
      <p className='hero-para' >Join unique interactive activities led by one of a kind hosts all without leaving home.</p>
  </section>;
};

export default Hero;
