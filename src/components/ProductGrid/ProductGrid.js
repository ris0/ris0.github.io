import React from 'react';
import Product from '../Product/Product';
import './ProductGrid.css';

// TODO: need to reconsider design for product cards
// should conditionally render; if products is null or sold out... render a sold out image
// render a class for a product that is sold out
//

// https://previews.123rf.com/images/mearicon/mearicon1810/mearicon181000082/114177215-king-oyster-mushrooms-isolated-on-white.jpg
const ProductGrid = ({ products }) => {
  return (
  <ul className="product-grid">
    {
      products.map((product) =>
        <li className="product" key={product.id}>
            <div className="product-detail">
              <p>{product.price}</p>
              <p>{product.product}</p>
              <p>{product.msrp}</p>
            </div>
        </li>
      )
    }
  </ul>
  )
}

export default ProductGrid;

// return (
//   <ul>
//     <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book15.jpg" alt="" /></li>
//     <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book16.jpg" alt="" /></li>
//     <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book17.jpg" alt="" /></li>
//     <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book18.jpg" alt="" /></li>
//     <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book19.jpg" alt="" /></li>
//     <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book20.jpg" alt="" /></li>
//     <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book21.jpg" alt="" /></li>
//     <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book22.jpg" alt="" /></li>
//     <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book23.jpg" alt="" /></li>
//     <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book24.jpg" alt="" /></li>
//     <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book25.jpg" alt="" /></li>
//     <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book26.jpg" alt="" /></li>
//   </ul>
// )

/* 
king oyster mushroom
canola oil 
butternut squash
green bell peppers
pomelo
frontier rosemary grill seasoning
beets
organic maitake mushrooms
pineapple
simple organic guacamole mix sauce
pears
*/