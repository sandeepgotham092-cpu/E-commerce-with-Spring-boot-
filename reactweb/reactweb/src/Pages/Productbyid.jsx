import React, { useContext, useEffect, useState } from 'react'
import Popular from '../Components/Popular/Popular'
import './Productbyid.css'
import { Context } from '../Context/Context'
import { Link } from 'react-router-dom'
const Productbyid = (props) => {
  const {addToCart} = useContext(Context);
   return (
    <div>
        <div className='pro'>
          <img src={props.imgfile}/>
          <div className='container'>
            <h1>{props.name}</h1>
            <p><h3>Description</h3>
              a comfortable clothing brand , make a best shirt
              for daily use
            </p>
            <h4>Category:{props.category}</h4>
            <h4 id='new'>Price: ${props.new_price}</h4>
            <h4 id='old'>${props.old_price}</h4>
             <button className="btn" onClick={()=>{addToCart(Number(props.id),props.name,props.new_price,props.old_price,props.imgfile,props.discount,props.category,Number(props.quantity))}}><Link to='/cart1' style={{textDecoration:'none', color:'white'}}>ADDTOCART</Link></button>
          </div>

    </div>
   <Popular/>
    </div>
  )
}

export default Productbyid