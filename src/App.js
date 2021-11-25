import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/about';
import Collections from './pages/collections';
import Mint from './pages/mint';
import Rmap from './pages/roadmap';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  })

  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/mint" exact component={Mint} />
        <Route path="/coll" exact component={Collections} />
        <Route path="/rmap" exact component={Rmap} />
        <Route path='/opensea' component={() => { 
          window.location.replace('https://opensea.io/'); 
          return null;
        }}/>
        <Route path='/discord' component={() => { 
          window.location.replace('https://discord.gg/kP5G3hmz'); 
          return null;
        }}/>
        <Route path='/twitter' component={() => { 
          window.location.replace('https://twitter.com/cryptoniaworld'); 
          return null;
        }}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
