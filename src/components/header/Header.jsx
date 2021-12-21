import React from "react";
import './Header.module.css';

class Header extends React.Component {
  render () {
    return (
      <header>
        <div>
          <img src="" alt="Logo" />
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projetos</a>
        </nav>
      </header>
    );
  }
}

export default Header;
