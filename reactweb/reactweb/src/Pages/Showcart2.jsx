import React, { useContext } from 'react'
import { Context } from '../Context/Context';
import { Link } from 'react-router-dom';
import Cart1 from './Cart1';
import './Showcart2.css'

const Showcart2 = (props) => {
   const {addToCart} = useContext(Context);
   const {removeFromCart} = useContext(Context);
  return (
  <div>
      <div className='container1'>
        <img src={props.imgfile}/>
        <div className='about'>
          <p><h3>{props.name}</h3><br/>
        Quantity={props.quantity}<br/>
        Price = ${props.new_price}</p>
        </div>
      <Link to='/cart1' style={{textDecoration:'none', color:'black'}}><button className='butt'id='add' onClick={()=>{addToCart(Number(props.id),props.name,props.new_price,props.old_price,props.imgfile,props.discount,props.category,Number(props.quantity))}}><p>ADD</p></button></Link>
     <Link to='/cart1' style={{textDecoration:'none', color:'black'}}><button className='butt'id='remove' onClick={()=>{removeFromCart(Number(props.id),props.name,props.new_price,props.old_price,props.imgfile,props.discount,props.category,Number(props.quantity))}}><p>REMOVE</p></button></Link>
     </div>
    </div> 
  )
}

export default Showcart2