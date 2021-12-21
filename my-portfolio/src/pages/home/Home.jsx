import React from "react";
import styles from './Home.module.css';

class Home extends React.Component {
  render () {
    return (
      <main>
        <section className={ styles.sectionApresentation }>
        <div className={ styles.apresentation }>
          <p>Olá, eu sou
          <h1>GEFFERSON<br/>BATISTA</h1>
          e estudo desenvolvimento web full-stack na Trybe.</p>
        </div>
        <div className={ styles.apresentationPhoto }>
          <img src="" alt="foto de perfil" />
        </div>
        </section>
        <section className={ styles.sectionAbout }>
        <div className={ styles.helloWorld }>
          <h1>HELLO,<br/>WORLD</h1>
        </div>
        <div className={ styles.aboutDescription }>
          <h1>About</h1>
          <p>Description about me</p>
        </div>
        </section>
      </main>
    );
  }
}

export default Home;
