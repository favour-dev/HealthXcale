import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
// import Partner from './components/Partner'
// import ProductPage from './components/ProductPage';
// import CartPage from './components/CartPage';

function App() {
  return(
      <div className= "App">
        {/* <switch> */}
          <Header/>
          <Hero/>
          
          <Footer/>
        {/* </switch> */}
      </div>
  );
}
export default App;
