import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Items/Item';
import axios from 'axios';
import ShopCategory from '../../Pages/ShopCategory';
import Product from '../../Pages/Product';
const Popular = () => {
    const [populars,setPopulars] = useState([]);
    useEffect(() => {
      fetch("http://localhost:8080/api/products")
      .then(res=>res.json())
      .then((result)=>{
        setPopulars(result);
        console.log(result);
      }
    )
    }, [])

  return (
    <><Item populars={populars} /></>
  )
}

export default Popular;