import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Update from './components/Update';
import Emailcard from './components/Emailcard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Update/>
      <Emailcard/>
      <Footer/>
    </div>
  );
}

export default App;
