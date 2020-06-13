import React from 'react';
import logo from '../../assets/logo.svg';
import './Logo.css';

const Logo = () => {
  return (
    <header className="Logo_header">
      <img src={logo} alt="logo" />
    </header>
  )
}

export default Logo;