import React from "react";
import styles from './Home.module.css';
import pixelart from '../../images/projects/pixel-art.png';
import solarsystem from '../../images/projects/solar-system.png';
import trybetunes from '../../images/projects/trybetunes.png';
import fotoPerfil from '../../images/apresentation/geff.jpeg';

class Home extends React.Component {
  render () {
    return (
      <main>
        <section className={ styles.sectionApresentation }>
        <div className={ styles.apresentation } id="apresentation">
          <p>Olá, eu sou
          <h1>GEFFERSON<br/>BATISTA</h1>
          e estudo desenvolvimento web full-stack na Trybe.</p>
        </div>
        <div className={ styles.apresentationPhoto }>
          <img src={ fotoPerfil } alt="foto de perfil" />
        </div>
        </section>
        <section className={ styles.sectionAbout }>
        <div className={ styles.helloWorld }>
          <h1>HELLO,<br/>WORLD</h1>
        </div>
        <div className={ styles.aboutDescription } id="about">
          <h1>Sobre mim</h1>
          <p> Olá, me chamo <strong>Gefferson Batista</strong> e desenvolvo websites em <strong> HTML, CSS, JavaScript e React.</strong><br/><br/> Sempre fui apaixonado pelo universo da <strong>tecnologia</strong>, e quando descobri sobre <strong>desenvolvimento web</strong> tive certeza que era o caminho que deveria seguir.<br/><br/> Estudo desenvolvimento web <strong>full-stack</strong> na <strong>Trybe,</strong> onde já <strong>aprendi</strong> sobre <strong>Unix</strong> e <strong>Bash</strong>, <strong>Git</strong> e <strong>Github, lógica da programação, HTML, CSS,Javascript ES6, testes unitários</strong> e <strong>assíncronos</strong> e atualmente estou aprendendendo a dominar <strong>React.</strong> </p>
        </div>
        </section>
        <section className={ styles.sectionProjects }>
          <div className={ styles.titleProject }>
            <h2 id="projects">Projetos</h2>
          </div>
          <div className={ styles.projectsCard }>
            <div className={ styles.project }>
              <h3>Trybetunes</h3>
              <img src={ trybetunes } alt="trybetunes" />
              <a href="https://imgeff.github.io/trybetunes/" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
            </div>
            <div className={ styles.project }>
              <h3>Solar System</h3>
              <img src={ solarsystem } alt="solar system" />
              <a href="https://imgeff.github.io/solar-system/" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
            </div>
            <div className={ styles.project }>
              <h3>Pixel Art</h3>
              <img src={ pixelart } alt="pixel art" />
              <a href="https://imgeff.github.io/pixel-art/" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
