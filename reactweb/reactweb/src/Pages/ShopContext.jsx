import React, { Children, createContext, useEffect, useState } from 'react'
import ShopCategory from './ShopCategory';
import{ Link } from 'react-router-dom'
const ShopContextProvider = (props) => {
  console.log(props.id)
     
  return (
   
          <div key={props.id} className='popular'>
<div className="card" >
  <div className="wrapper">
    <div className="card-image">
      <Link to={`/product/${props.id}`}><img src={props.imgfile}/></Link>
      </div>
    <div className="content">
      <p className="title">{props.name}(REGULAR)</p>
      <p className="title price">${props.new_price}</p>
      <p className="title price old-price">&nbsp;${props.old_price}</p>
      <p></p>
    </div>
    <Link to={`/product/${props.id}`}><button className="card-btn">DETAILS</button></Link>
  </div>
  <p className="tag">-{props.discount}%</p>
</div>
       </div>
    
  )
}

export default ShopContextProvider