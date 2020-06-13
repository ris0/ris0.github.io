import React from 'react';
import Logo from './components/Logo/Logo';
import ProductGrid from './components/ProductGrid/ProductGrid';
import SoldOut from './components/SoldOut/SoldOut';
import SuccessMessage from './components/SuccessMessage/SuccessMessage';
import Loader from './components/Loader/Loader';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      orderSuccessful: false
    };
  }

  componentDidMount() {
    fetch('https://applicant-dev.misfitsmarket.com/api/test/v1')
      .then(response => response.json())
      .then(data => { this.setState({products:data.data.items}) });
  }

  triggerSuccessMessage() {
    this.setState({ orderSuccessful: true });
<<<<<<< HEAD
    setTimeout(() => this.setState({ orderSuccessful: false }), 1250);
=======
    // setTimeout(() => this.setState({ orderSuccessful: false }), 1500);
>>>>>>> f462caa482377a0b64a9ce148f984ee8ae92fe93
  }

  render() {
    const products = this.state.products;
    const content = !products || !products.length ? <SoldOut /> : <ProductGrid products={products} handleOrder={() => this.triggerSuccessMessage()}/>;
    const successMsg = this.state.orderSuccessful ? <SuccessMessage /> : "";

    return (
      <div className="App">
      <Loader />
        <div className="header">
          <Logo />
          {successMsg}
        </div>
        {content}
      </div>
    )
  }
}

export default App;
