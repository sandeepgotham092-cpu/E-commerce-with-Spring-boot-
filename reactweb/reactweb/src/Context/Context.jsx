import axios from 'axios';
import React, { Children, createContext, useEffect, useState } from 'react'
import ShopCategory from '../Pages/ShopCategory';
import Item from '../Components/Items/Item';
import Cart from '../Pages/Cart1';
import Navbar from '../Components/Navbar/Navbar';
export const Context = createContext();
        
      
const ContextProvider = (props) => {
    const [carts,setCarts] = useState([]);
      useEffect(() => {
          fetch("http://localhost:8080/api/products")
          .then(res=>res.json())
          .then((result)=>{
            setCarts(result);
          }
        )
        }, [])
         
        const addToCart = (itemId,itemname,itemnew_price,itemold_price,itemimagfile,itemdiscount,itemcategory,itemquantity) =>{
               const cart = {
                id : Number(itemId),
                name :(itemname),
                new_price : (itemnew_price),
                old_price : (itemold_price),
                imgfile:(itemimagfile),
                discount:(itemdiscount),
                category:(itemcategory),
                quantity :Number(itemquantity)+1
               };
               fetch("http://localhost:8080/api/products", {
                method:'PUT',
                headers:{
                  'Content-Type':'application/json'
                },
                body:JSON.stringify(cart)
               })
               .then(res => {

              if(!res.ok){
                console.log('Problem');
              }
              console.log("sucess");
            }
              )
               .then((result)=>{
                console.log("sucesss");
               })
               .catch(error=>{
                console.log(error);
               })
        }

             const removeFromCart = (itemId,itemname,itemnew_price,itemold_price,itemimagfile,itemdiscount,itemcategory,itemquantity) =>{
               const cart = {
                id : Number(itemId),
                name :(itemname),
                new_price : (itemnew_price),
                old_price : (itemold_price),
                imgfile:(itemimagfile),
                discount:(itemdiscount),
                category:(itemcategory),
                quantity :Number(itemquantity)-1
               };
               fetch("http://localhost:8080/api/products", {
                method:'PUT',
                headers:{
                  'Content-Type':'application/json'
                },
                body:JSON.stringify(cart)
               })
               .then(res => {

              if(!res.ok){
                console.log('Problem');
              }
              console.log("sucess");
            }
              )
               .then((result)=>{
                console.log("sucesss");
               })
               .catch(error=>{
                console.log(error);
               })
        }


const contextValue = {carts,addToCart,removeFromCart};
  return (
    <div>
        <Context.Provider value={contextValue}>
            {props.children};
        </Context.Provider> 
    </div>
  )
}

export default ContextProvider