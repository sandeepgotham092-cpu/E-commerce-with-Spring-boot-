import React, { useContext, useEffect, useState } from 'react'
import Showcart2 from './Showcart2';


const Cart2 = () => {
  const [cartpro,setCartpro] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:8080/api/products")
    .then(res => res.json())
    .then((result)=>{
      setCartpro(result);
    })

  }, [])
  return (
    <div>
     {
      cartpro&&cartpro.map(pro=>{
        if(pro.quantity > 0){
          return <Showcart2  key={pro.id} id={pro.id} name={pro.name} new_price={pro.new_price} old_price={pro.old_price} imgfile={pro.imgfile} discount={pro.discount}  category = {pro.category} quantity={pro.quantity}/>
        
        }
        else{
          
        }
      })
     }
    </div>
  )
}

export default Cart2