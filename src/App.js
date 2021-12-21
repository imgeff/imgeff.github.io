import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
