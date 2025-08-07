import React, { useContext, useEffect, useState } from 'react'
import './CSS/ShopCategory.css'
import ShopContextProvider from './ShopContext';
import Popular from '../Components/Popular/Popular';
const ShopCategory = (props) => {
  const [shopCategory,setShopCategory] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:8080/api/products")
    .then(res=>res.json())
    .then((result)=>{
      setShopCategory(result);
      console.log(result);
    }

    )
  }, [])
  return (
    <div className='shop-category'>
      <div className='scroll'>
        <div className='all'>
          <div><p>{props.category}</p></div>
        <div><p>{props.category}</p></div>
       <div><p>{props.category}</p></div>
       <div><p>{props.category}</p></div>
        <div><p>{props.category}</p></div>
        </div>
        <div className='all'>
          <div><p>{props.category}</p></div>
        <div><p>{props.category}</p></div>
        <div><p>{props.category}</p></div>
        <div><p>{props.category}</p></div>
        <div><p>{props.category}</p></div>
        </div>
        </div>
      
      {
        shopCategory&&shopCategory.map(shop=>{
          
            if(props.category === shop.category){
              return <ShopContextProvider key={shop.id} id={shop.id} name={shop.name} new_price={shop.new_price} old_price={shop.old_price} imgfile={shop.imgfile} discount={shop.discount} />
}
            
    
}

        )
      }
      
    </div>
  )
}

export default ShopCategory