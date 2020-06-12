import React from 'react';
import './Product.css';

const Product = ({ details }) => {
  return (
  <ul className="product">
    <p>{ details.price }</p>
    <p>{ details.product }</p>
    <p>{ details.msrp }</p>
  </ul>
  )
}

export default Product;