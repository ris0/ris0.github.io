import React from 'react';
import Product from '../Product/Product';
import './ProductGrid.css';

const ProductGrid = ({ handleOrder, products }) => {
  return (
    <div className="container">
      <ul className="product-grid">
        {
          products.map((product) =>
            <Product product={product} key={product.id} handleOrder={handleOrder}/>
          )
        }
      </ul>
    </div>
  )
}

export default ProductGrid;