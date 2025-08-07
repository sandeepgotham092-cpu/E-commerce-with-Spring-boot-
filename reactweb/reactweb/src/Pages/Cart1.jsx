import React, { useContext, useEffect, useState } from 'react'
import Showcart1 from './Showcart1';


const Cart1 = () => {
  const [cartpro,setCartpro] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:8080/api/products")
    .then(res => res.json())
    .then((result)=>{
      setCartpro(result);
    })
    const ispresent = false;

  }, [])
  return (
    <div>
     {
      cartpro&&cartpro.map(pro=>{
        if(pro.quantity > 0){
          return <Showcart1  key={pro.id} id={pro.id} name={pro.name} new_price={pro.new_price} old_price={pro.old_price} imgfile={pro.imgfile} discount={pro.discount}  category = {pro.category} quantity={pro.quantity}/>
        }else{
          
        }
      })
      
     }
     
    </div>
  )
}

export default Cart1