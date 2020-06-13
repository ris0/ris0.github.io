import React from 'react';
import Product from '../Product/Product';
import './ProductGrid.css';

const ProductGrid = ({ handleOrder, products }) => {
  return (
  <ul className="product-grid">
    {
      products.map((product) =>
        <Product product={product} key={product.id} handleOrder={handleOrder}/>
      )
    }
  </ul>
  )
}

export default ProductGrid;