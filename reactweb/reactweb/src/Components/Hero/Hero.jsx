import React from 'react'
import './Hero.css'
import img1 from '../Hero/image1.avif'
const Hero = () => {
  return (
    <div className='hero'>
    <div className='hero-right'>
      <div className='para'>
         <div id='head'>NEW ARRIVALS ONLY</div>
        <div className='under'>new</div>
       <div className='under'>Collections</div>
      <div className='under'>For everyone</div>
      </div>
    <img src={img1} alt=''/>
    </div>
    </div>
  )
}

export default Hero