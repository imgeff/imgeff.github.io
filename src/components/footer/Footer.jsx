import React from "react";
import styles from './Footer.module.css';
import iconGithub from '../../images/footer/github.svg';
import iconLinkedin from '../../images/footer/linkedin.svg';
import iconGmail from '../../images/footer/gmail.svg';
import iconInstagram from '../../images/footer/instagram.svg';

class Footer extends React.Component {
  render () {
    return (
      <footer>
        <div className={ styles.divCreditName }>
          <p>Contact</p>
        </div>
        <nav className={ styles.navFooter }>
          <a href="https://www.linkedin.com/in/geffbatista//" target="_blank" rel="noreferrer">
            <img src={ iconLinkedin } alt="Linkedin" />
          </a>
          <a href="https://www.github.com/imgeff/" target="_blank" rel="noreferrer">
          <img src={ iconGithub } alt="Github"/>
          </a>
          <a href="mailto: geffersonsilvaaraujo.gs@gmail.com" target="_blank" rel="noreferrer">
            <img src={ iconGmail } alt="Gmail" />
          </a>
          <a href="https://www.instagram.com/batistgeff/" target="_blank" rel="noreferrer">
            <img src={ iconInstagram } alt="Instagram" />
          </a>
        </nav>
      </footer>
    );
  }
}

export default Footer;