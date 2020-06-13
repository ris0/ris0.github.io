import React from 'react';
import Logo from './components/Logo/Logo';
import ProductGrid from './components/ProductGrid/ProductGrid';
import SoldOut from './components/SoldOut/SoldOut';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentWillMount() {
    fetch('https://applicant-dev.misfitsmarket.com/api/test/v1')
      .then(response => response.json())
      .then(data => {
        this.setState({products:data.data.items})
      });
  }

  render() {
    const products = this.state.products;
    const content = !products || !products.length ? <SoldOut /> : <ProductGrid products={products}/>;
    return (
      <div className="App">
        <Logo />
        {content}
      </div>
    )
  }
}

export default App;
