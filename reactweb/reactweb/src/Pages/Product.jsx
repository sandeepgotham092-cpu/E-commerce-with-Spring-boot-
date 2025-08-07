import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ShopContextProvider from './ShopContext';
import Productbyid from './Productbyid';
import Popular from '../Components/Popular/Popular';

const Product = () => {
   const {productId }= useParams(); 
const [products,setProducts] = useState([]);
  useEffect(() => {
      fetch("http://localhost:8080/api/products")
      .then(res=>res.json())
      .then((result)=>{
        setProducts(result);
      }
    )
    }, [])
  return (
   <div>
       {
        products&&products.map((res)=>{
            if(res.id === Number(productId)){
              return <Productbyid key={res.id} id={res.id} name={res.name} new_price={res.new_price} old_price={res.old_price} imgfile={res.imgfile} discount={res.discount}  category = {res.category} quantity={res.quantity}/>
                      }})
      }
   </div>
  )
}

export default Product