import React from 'react';
import classnames from 'classnames'
import './Product.css';

const placeOrder = (id, isSoldOut, handleOrder) => {
  if (!isSoldOut) {
    const requestConfig = {
      method: 'post',
      headers: {
        "X-Customer-Token": "721028102"
      }
    };

    fetch(`https://applicant-dev.misfitsmarket.com/api/test/v1/${id}`, requestConfig)
      .then(response => response.json())
      .then(data => {
        if (data.msg === "Success") { handleOrder() }
      })
      .catch(error => console.log(error))
  } else {
    return;
  }
};

const Product = ({ handleOrder, product }) => {
  const cx = classnames({
    "product-detail": true,
    "product-available": !product.soldOut
  })

  return (
    <li className="product">
      <div className={cx} onClick={() => placeOrder(product.id, product.soldOut, handleOrder)}>
        {product.soldOut ? <p className="product-soldout">Sold out!</p> : ""}
        <p>Price: {product.price}</p>
        <p>MSRP: {product.msrp}</p>
        <p>{product.product}</p>
      </div>
    </li>
    )
}

export default Product;