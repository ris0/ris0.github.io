import React from 'react';
import soldout from '../../assets/sold-out.svg';
import './SoldOut.css';

const SoldOut = () => {
  return (
    <span>
      <img className="soldout" src={soldout} alt=""></img>
      <p className="soldout-message">Sorry! We are all sold out! Please come back soon!</p>
    </span>
  )
}

export default SoldOut;