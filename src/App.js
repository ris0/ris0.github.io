import React from 'react';
import Logo from './components/Logo/Logo';
import ProductGrid from './components/ProductGrid/ProductGrid';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Logo />
      <ProductGrid />
    </div>
  );
}

export default App;
