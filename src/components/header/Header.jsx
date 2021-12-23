import React from "react";
import './Header.module.css';
import logoImgeff from '../../images/header/imgeff.png'

class Header extends React.Component {
  render () {
    return (
      <header>
        <div>
          <img src={ logoImgeff } alt="Logo" />
        </div>
        <nav>
          <a href="#apresentation">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projetos</a>
        </nav>
      </header>
    );
  }
}

export default Header;
