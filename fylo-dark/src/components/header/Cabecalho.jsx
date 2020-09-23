import React, { Component } from 'react'
import logo from '../../assets/logo.svg'
import '../../assets/main.css'
import './cabecalho.css'

const Cabecalho = () => {
    return (
      <header className="cabecalho">
        <img src={logo} alt="Cachorro" />
        <nav>
          <a href="./">Features</a>
          <a href="./">Team</a>
          <a href="">Sign In</a>
        </nav>
      </header>
    );
  };
  
  export default Cabecalho;