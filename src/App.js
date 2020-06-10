import React from 'react';
import { createGlobalStyle } from 'styled-components';
import HomePage from './pages/HomePage';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

  body {
    font-family: 'Roboto Mono';
    overflow: hidden;
    background: #bcdee7;
    background-size: cover;
    position: fixed;
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body:before {
    content: "";
    height: 0px;
    padding: 0px;
    border: 130em solid #313440;
    position: absolute;
    left: 50%;
    top: 100%;
    z-index: 2;
    display: block;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-animation: puff 0.5s 1.8s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, borderRadius 0.2s 2.3s linear forwards;
    animation: puff 0.5s 1.8s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, borderRadius 0.2s 2.3s linear forwards;
  }

  @-webkit-keyframes init {
    0% {
      width: 0px;
      height: 0px;
    }
    100% {
      width: 56px;
      height: 56px;
      margin-top: 0px;
      opacity: 1;
    }
  }
  
  @keyframes init {
    0% {
      width: 0px;
      height: 0px;
    }
    100% {
      width: 56px;
      height: 56px;
      margin-top: 0px;
      opacity: 1;
    }
  }
  
  @-webkit-keyframes puff {
    0% {
      top: 100%;
      height: 0px;
      padding: 0px;
    }
    100% {
      top: 50%;
      height: 100%;
      padding: 0px 100%;
    }
  }
  
  @keyframes puff {
    0% {
      top: 100%;
      height: 0px;
      padding: 0px;
    }
    100% {
      top: 50%;
      height: 100%;
      padding: 0px 100%;
    }
  }
  
  @-webkit-keyframes borderRadius {
    0% {
      -webkit-border-radius: 50%;
    }
    100% {
      -webkit-border-radius: 0px;
    }
  }
  
  @keyframes borderRadius {
    0% {
      -webkit-border-radius: 50%;
    }
    100% {
      border-radius: 0px;
    }
  }
  
  @-webkit-keyframes moveDown {
    0% {
      top: 50%;
    }
    50% {
      top: 40%;
    }
    100% {
      top: 100%;
    }
  }
  
  @keyframes moveDown {
    0% {
      top: 50%;
    }
    50% {
      top: 40%;
    }
    100% {
      top: 100%;
    }
  }
  
  @-webkit-keyframes moveUp {
    0% {
      background: #FFB300;
      top: 100%;
    }
    50% {
      top: 40%;
    }
    100% {
      top: 50%;
      background: #E0E0E0;
    }
  }
  
  @keyframes moveUp {
    0% {
      background: #FFB300;
      top: 100%;
    }
    50% {
      top: 40%;
    }
    100% {
      top: 50%;
      background: #E0E0E0;
    }
  }
  
  @-webkit-keyframes materia {
    0% {
      background: #E0E0E0;
    }
    50% {
      -webkit-border-radius: 4px;
    }
    100% {
      width: 440px;
      height: 280px;
      background: #FFFFFF;
      -webkit-border-radius: 4px;
    }
  }
  
  @keyframes materia {
    0% {
      background: #E0E0E0;
    }
    50% {
      border-radius: 4px;
    }
    100% {
      width: 440px;
      height: 280px;
      background: #FFFFFF;
      border-radius: 4px;
    }
  }
  
  @-webkit-keyframes moveIn {
    0% {
      margin-top: 50px;
      opacity: 0;
    }
    100% {
      opacity: 1;
      margin-top: -20px;
    }
  }
  
  @keyframes moveIn {
    0% {
      margin-top: 50px;
      opacity: 0;
    }
    100% {
      opacity: 1;
      margin-top: -20px;
    }
  }
  
  @-webkit-keyframes scaleIn {
    0% {
      -webkit-transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
    }
  }
  
  @keyframes scaleIn {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  
  @-webkit-keyframes ripple {
    0% {
      transform: scale3d(0, 0, 0);
    }
    50%,
    100% {
      -webkit-transform: scale3d(1, 1, 1);
    }
    100% {
      opacity: 0;
    }
  }
  
  @keyframes ripple {
    0% {
      transform: scale3d(0, 0, 0);
    }
    50%,
    100% {
      transform: scale3d(1, 1, 1);
    }
    100% {
      opacity: 0;
    }
  }
  
  @media screen and (min-aspect-ratio: 4/3) {
    body {
      background-size: cover;
    }
    body:before {
      width: 0px;
    }
    @ -webkit-keyframes puff {
      0% {
        top: 100%;
        width: 0px;
        padding-bottom: 0px;
      }
      100% {
        top: 50%;
        width: 100%;
        padding-bottom: 100%;
      }
    }
    @keyframes puff {
      0% {
        top: 100%;
        width: 0px;
        padding-bottom: 0px;
      }
      100% {
        top: 50%;
        width: 100%;
        padding-bottom: 100%;
      }
    }
  }
  
  @media screen and (min-height: 480px) {
    .profile-card header {
      width: auto;
      height: auto;
      padding: 30px 20px;
      display: block;
      float: none;
      border-right: none;
    }
    .profile-card .profile-bio {
      width: auto;
      height: auto;
      padding: 15px 20px 30px 20px;
      display: block;
      float: none;
    }
    .profile-social-links {
      width: 100%;
      display: block;
      float: none;
    }
    @ -webkit-keyframes materia {
      0% {
        background: #E0E0E0;
      }
      50% {
        -webkit-border-radius: 4px;
      }
      100% {
        width: 280px;
        height: 440px;
        background: #FFFFFF;
        -webkit-border-radius: 4px;
      }
    }
    @keyframes materia {
      0% {
        background: #E0E0E0;
      }
      50% {
        border-radius: 4px;
      }
      100% {
        width: 280px;
        height: 440px;
        background: #FFFFFF;
        border-radius: 4px;
      }
    }
  }

  .profile-card {
    background: #FFB300;
    width: 56px;
    height: 56px;
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    overflow: hidden;
    opacity: 0;
    margin-top: 70px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
    -webkit-animation: init 0.5s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards, moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, materia 0.5s 2.7s cubic-bezier(0.86, 0, 0.07, 1) forwards;
    animation: init 0.5s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards, moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, materia 0.5s 2.7s cubic-bezier(0.86, 0, 0.07, 1) forwards;
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
