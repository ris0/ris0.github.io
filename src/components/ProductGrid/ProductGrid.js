import React from 'react';
import Product from '../Product/Product';
import SuccessMessage from '../SuccessMessage/SuccessMessage';
import SoldOut from '../SoldOut/SoldOut';
import './ProductGrid.css';

// TODO: How to fix the sold out flash? loading screen hack?

class ProductGrid extends React.Component {
  constructor(props) {
    super(props);
    this.triggerSuccessMessage = this.triggerSuccessMessage.bind(this);
    this.state = { orderSuccessful: false }
  }

  triggerSuccessMessage() {
    this.setState({orderSuccessful: true})
    // setTimeout(() => this.setState({orderSuccessful: false}), 1000)
  }

  render() {
    const successMsg = this.state.orderSuccessful ? <SuccessMessage /> : "";
    return (
      <div className="container">
        <ul className="product-grid">
          {
            this.props.products.map((product) =>
            <Product product={product} key={product.id} handleOrder={this.triggerSuccessMessage}/>
            )
          }
          {successMsg}
        </ul>
      </div>
    )
  }
}


// const ProductGrid = ({ products }) => {
//   if (!products || !products.length) {
//     return <Soldout />
//   } else {
//     return (
//       <ul className="product-grid">
//       {
//         products.map((product) =>
//           <Product product={product} key={product.id} />
//         )
//       }
//     </ul>
//     )
//   }
// }

export default ProductGrid;