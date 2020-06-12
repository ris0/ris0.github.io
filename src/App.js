import React from 'react';
import Logo from './components/Logo/Logo';
import ProductGrid from './components/ProductGrid/ProductGrid';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };
  }

  componentDidMount() {
    fetch('https://applicant-dev.misfitsmarket.com/api/test/v1')
      .then(response => response.json())
      .then(data => {
        this.props.products = data.data.items;
        this.setState({products:data.data.items})
      });
  }

  render() {
    const products = this.state.products;
    console.log(this.props)
    return (
      <div className="App">
        <Logo />
        <ProductGrid products={products}/>
      </div>
    )
  }
}

export default App;
