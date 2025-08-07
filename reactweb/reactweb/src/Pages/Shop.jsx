import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import './Shop.css'
const Shop = () => {
  return (
    <div>
      <div className='scroll'>
        <div className='all'>
          <div><p>SHOP</p></div>
        <div><p>SHOP</p></div>
        <div><p>SHOP</p></div>
        <div><p>SHOP</p></div>
        <div><p>SHOP</p></div>
        </div>
        <div className='all'>
          <div><p>SHOP</p></div>
        <div><p>SHOP</p></div>
        <div><p>SHOP</p></div>
        <div><p>SHOP</p></div>
        <div><p>SHOP</p></div>
        </div>
        </div>
      <Hero/>
      <Popular/>
    </div>
  )
}

export default Shop