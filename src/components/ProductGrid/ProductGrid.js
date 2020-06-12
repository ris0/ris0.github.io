import React from 'react';
import classnames from 'classnames'
import './ProductGrid.css';
import soldout from '../../assets/sold-out.svg'

// TODO: need to reconsider design for product cards
// should conditionally render; if products is null or sold out... render a sold out image
// render a class for a product that is sold out

const Soldout = () => {
  return (
    <span>
      <img className="soldout" src={soldout} alt=""></img>
      <p>Sorry! We are all sold out! Please come back soon!</p>
    </span>
  )
}

const Product = ({ product }) => {
  var cx = classnames({
    "product-detail": true,
    "product-available": !product.soldOut,
    "product-soldout": product.soldOut
  })
  return (
    <li className="product" key={product.id}>
      <div className={cx}>
        <p>Price: {product.price}</p>
        <p>{product.product}</p>
        <p>MSRP: {product.msrp}</p>
      </div>
    </li>
    )
}

const ProductGrid = ({ products }) => {
  products = null;
  if (!products) {
    return <Soldout />
  } else {
    return (
    <ul className="product-grid">
      {
        products.map((product) =>
          <Product product={product} />
        )
      }
    </ul>
    )
  }
}

export default ProductGrid;