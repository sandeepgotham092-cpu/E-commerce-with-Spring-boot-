import React, { useContext } from 'react'
import  { useEffect, useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo_icon.png'
import cart_icon from '../Assets/cartlogo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menu,setMenu] = useState("shop");


  return (
    <div id='body'>
      <div className='circle'></div>
        <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>StyleWala</p>
        </div>
        <ul className='nav-menu'> 
        <li href='#'onClick={()=>{setMenu("shop")}} ><Link to='/' style={{textDecoration:'none',color:'black'}}>Shop</Link>{menu==="shop" ? <hr/>:<></>}</li>
        <li href='#'onClick={()=>{setMenu("men")}}><Link to='/men'style={{textDecoration:'none',color:'black'}}>Men</Link>{menu==="men" ? <hr/>:<></>}</li>
        <li href='#'onClick={()=>{setMenu("women")}}><Link to='/women' style={{textDecoration:'none',color:'black'}}>Women</Link>{menu==="women" ? <hr/>:<></>}</li>
        <li href='#'onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none',color:'black'}}>Kids</Link>{menu==="kids" ? <hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart1'><img src={cart_icon} alt=''/></Link>
          <div className='count'>
            </div>
        </div>
    </div>
    <hr/>
    </div>
  )
}

export default Navbar
