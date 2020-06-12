import React from 'react';
import classnames from 'classnames'
import './ProductGrid.css';
import soldout from '../../assets/sold-out.svg'
import axios from 'axios'
// TODO: need to reconsider design for product cards
// should conditionally render; if products is null or sold out... render a sold out image
// render a class for a product that is sold out
// we need propstype validation
// lack of images bothers me
// not pixel perfect design
// there is a screen flash in the beginning
// maybe get rid of axios, fetch, and other packages we don't need
/*
Note:

In order to know which customer is making the selection,
 you'll be required to send over a custom HTTP header with your POST request.
 The endpoint expects the custom header X-Customer-Token with the value 721028102.
 If sent incorrectly, the endpoint will return a "Forbidden" response.
 If you receive a 200 back from the endpoint, you know you have stored the information successfully!
*/
const Soldout = () => {
  return (
    <span>
      <img className="soldout" src={soldout} alt=""></img>
      <p className="soldout-message">Sorry! We are all sold out! Please come back soon!</p>
    </span>
  )
}

const addToBox = (id) => {
  // var test = new Headers();
  // test.set("X-Customer-Token", "721028102")
  // console.log('our test', test.values());
  // axios({
  //   url: `https://applicant-dev.misfitsmarket.com/api/test/v1/${id}`,
  //   method: 'post',
  //   header: {
  //     "X-Customer-Token": "721028102"
  //   }
  // }).then(response => console.log(response))
  // .catch(err => console.log(err))
  fetch(`https://applicant-dev.misfitsmarket.com/api/test/v1/${id}`, {
    method: 'POST',
    header: new Headers({
      "X-Customer-Token": "721028102"
    })
  }).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
};

const Product = ({ product }) => {
  const cx = classnames({
    "product-detail": true,
    "product-available": !product.soldOut
  })

  return (
    <li className="product" onClick={() => addToBox(product.id)}>
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