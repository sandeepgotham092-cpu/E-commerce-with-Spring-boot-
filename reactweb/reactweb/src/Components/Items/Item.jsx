import React from 'react'
import './Item.css'
import Product from '../../Pages/Product';
import { Link } from 'react-router-dom';
const Item = ({populars}) => {
  console.log(populars)
  return (
    <div>
      <header id='header'>Popular products</header>
      {populars && populars.map (popular => (
        <div key={popular.id} className='popular'>
<div className="card" >
  <div className="wrapper">
    <div className="card-image">
      <Link to={`/product/${popular.id}`}>
      <img src={popular.imgfile}/>
      </Link>
      </div>
     
    <div className="content">
      <p className="title">{popular.name} (REGULAR)</p>
      <p className="title price">${popular.new_price}</p>
      <p className="title price old-price">&nbsp;${popular.old_price}</p>
      <p></p>
    </div>
    <Link to={`/product/${popular.id}`}><button className="card-btn">DETAILS</button></Link>
  </div>
  <p className="tag">-{popular.discount}%</p>
</div>
       </div>
       
       
      ))}
       
    </div>
    
  );
}

export default Item