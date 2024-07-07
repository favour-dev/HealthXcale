import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
// import HomePage from './components/HomePage';
// import ProductPage from './components/ProductPage';
// import CartPage from './components/CartPage';

function App() {
  return(
    <div className= "App">
      <Header/>
      <Search/>
    </div>
  );
}

export default App;
