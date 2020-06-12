import React from 'react';
import classnames from 'classnames'
import './ProductGrid.css';
import soldout from '../../assets/sold-out.svg'

// Small component but would be best to keep in separate file
const Soldout = () => {
  return (
    <span>
      <img className="soldout" src={soldout} alt=""></img>
      <p className="soldout-message">Sorry! We are all sold out! Please come back soon!</p>
    </span>
  )
}

const addToBox = (id, isSoldOut) => {
  console.log(isSoldOut);
  if (!isSoldOut) {
    // This is a bit hacky to send HTTP requests like this on the client-side
    // But the API we are using allows CORS and custom headers - for simplicity, we'll do this
    const config = {
      method: 'post',
      headers: {
        "X-Customer-Token": "721028102"
      }
    };

    fetch(`https://applicant-dev.misfitsmarket.com/api/test/v1/${id}`, config)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  } else {
    return;
  }
};

// I would normally created a separate file for a component like this
// But I'm keeping it simple
const Product = ({ product }) => {
  const cx = classnames({
    "product-detail": true,
    "product-available": !product.soldOut
  })

  return (
    <li className="product" onClick={() => addToBox(product.id, product.soldOut)}>
      <div className={cx}>
        {product.soldOut ? <p className="product-soldout">Sold out!</p> : ""}
        <p>Price: {product.price}</p>
        <p>MSRP: {product.msrp}</p>
        <p>{product.product}</p>
      </div>
    </li>
    )
}

const ProductGrid = ({ products }) => {
  if (!products || !products.length) {
    return <Soldout />
  } else {
    return (
    <ul className="product-grid">
      {
        products.map((product) =>
          <Product product={product} key={product.id}/>
        )
      }
    </ul>
    )
  }
}

export default ProductGrid;