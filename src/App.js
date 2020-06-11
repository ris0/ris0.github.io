import React from 'react';
import { createGlobalStyle } from 'styled-components';
import HomePage from './pages/HomePage';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

  ul{
    display:grid;
    grid-template-columns: repeat(var(--columns),1fr);
    margin: 150px -40px;
    list-style-type: none;
  }

  li{
    grid-column-end: span 2;
    justify-self: center;
    width: 71%;
    padding-bottom: 71%;
    transform: rotatez(45deg);
    margin-top: -21%;
  }

  li::before, li::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    content: '';
  }

  li::before {
    z-index: -10;
    clip-path: polygon(0 0, 100% 0, 100% 20%, 20% 20%, 20% 100%, 0 100%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 20%, 20% 20%, 20% 100%, 0 100%);
  }

  li::after {
    z-index: 10;
    clip-path: polygon(80% 20%, 100% 0, 100% 100%, 0% 100%, 20% 80%, 80% 80%);
    -webkit-clip-path: polygon(80% 20%, 100% 0, 100% 100%, 0% 100%, 20% 80%, 80% 80%);
  }

  li:nth-child(2n){
    grid-column-start:2;
  }

  li{
    background-color: #EEBC1F;
  }
  li::before{
    background-color: #068D7E;
    background: conic-gradient(#EEBC1F 25%, #068D7E 0 50%, #EEBC1F 0) 100% 100% /180% 180%;
  }
  li::after{
    background-color: #068D7E;
    background: conic-gradient(#EEBC1F 75%, #068D7E 0) 0 0 /180% 180%;
  }

  li:nth-child(2n){
    background-color: #FF5291;
  }
  li:nth-child(2n)::before{
    background-color: #4062BB;
    background: conic-gradient(#FF5291 25%, #4062BB 0 50%, #FF5291 0) 100% 100% /180% 180%;
  }
  li:nth-child(2n)::after{
    background-color: #4062BB;
    background: conic-gradient(#FF5291 75%, #4062BB 0) 0 0 /180% 180%;
  }

  li:nth-child(5n){
    background-color: #068D7E;
  }
  li:nth-child(5n)::before{
    background-color: #FF5291;
    background: conic-gradient(#068D7E 25%, #FF5291 0 50%, #068D7E 0) 100% 100% /180% 180%;
  }
  li:nth-child(5n)::after{
    background-color: #FF5291;
    background: conic-gradient(#068D7E 75%, #FF5291 0) 0 0 /180% 180%;
  }

  li:nth-child(7n),li:nth-child(7n-4){
    background-color: #4062BB;
  }
  li:nth-child(7n)::before,li:nth-child(7n-4)::before{
    background-color: #F8FFE5;
    background: conic-gradient(#4062BB 25%, #F8FFE5 0 50%, #4062BB 0) 100% 100% /180% 180%;
  }
  li:nth-child(7n)::after,li:nth-child(7n-4)::after{
    background-color: #F8FFE5;
    background: conic-gradient(#4062BB 75%, #F8FFE5 0) 0 0 /180% 180%;
  }

  li:nth-child(9n),li:nth-child(9n-5){
    background-color: #F8FFE5;
  }
  li:nth-child(9n)::before,li:nth-child(9n-5)::before{
    background-color: #068D7E;
    background: conic-gradient(#F8FFE5 25%, #068D7E 0 50%, #F8FFE5 0) 100% 100% /180% 180%;
  }
  li:nth-child(9n)::after,li:nth-child(9n-5)::after{
    background-color: #068D7E;
    background: conic-gradient(#F8FFE5 75%, #068D7E 0) 0 0 /180% 180%;
  }

  li img {
    position: absolute;
    width: 50%;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) rotatez(-45deg);
    box-shadow: 5px -5px 10px rgba(0, 0, 0, 0.3);
    transition-property: transform;
    transition-duration: .3s;
  }

  li img:hover {
    transform: translateX(-60%) translateY(-60%) rotatez(-25deg);
  }

  @media (min-width:450px){
    ul{
      margin: 150px 40px;
    }
  }

  @media (min-width:600px){
    :root {
      --columns: 5;
    }
    li:nth-child(2n){
      grid-column-start:auto;
    }
    li:nth-child(4n-1){
      grid-column-start:2;
    }
  }

  @media (min-width:900px){
    :root {
      --columns: 7;
    }
    li:nth-child(4n-1){
      grid-column-start:auto;
    }
    li:nth-child(6n-2){
      grid-column-start:2;
    }
  }

  @media (min-width:1200px){
    :root {
      --columns: 9;
    }
    li:nth-child(6n-2){
      grid-column-start:auto;
    }
    li:nth-child(8n-3){
      grid-column-start:2;
    }
  }

  @media (min-width:1500px){
    :root {
      --columns: 11;
    }
    li:nth-child(8n-3){
      grid-column-start:auto;
    }
    li:nth-child(10n-4){
      grid-column-start:2;
    }
  }

  @media (min-width:1800px){
    :root {
      --columns: 13;
    }
    li:nth-child(10n-4){
      grid-column-start:auto;
    }
    li:nth-child(12n-5){
      grid-column-start:2;
    }

  }
  @media (min-width:2100px){
    :root {
      --columns: 15;
    }
    li:nth-child(12n-5){
      grid-column-start:auto;
    }
    li:nth-child(14n-6){
      grid-column-start:2;
    }
  }

  body {
    font-family: 'Roboto Mono';
    background: #CFB997;
    background-size: cover;
    padding: 0px;
    margin: 0px;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <HomePage />
    </div>
  );
}

export default App;
