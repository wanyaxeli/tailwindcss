import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import Banner from './components/Banner';
import About from './components/About';
import Products from './components/Products';
import Links from './components/Links';
function App() {
  return (
    <div className=" h-auto max-w-full">
      <Navbar/>
      <Links/>
    </div>
  );
}

export default App;
