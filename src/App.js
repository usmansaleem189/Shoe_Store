import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link} from 'react-router-dom';
import './App.css';
import {Home} from './Home';
import {Products} from './Products';
import {ProductsList} from './ProductsList';
import {ProductItem} from './ProductItem';
import {Error} from './Error';
import {Cart} from './Cart';

function App() {
  return (
    <Router>
      <nav className="navBar">
        <Link to="/" className="linkBar"><h2>Home</h2></Link>
        <Link to="/products" className="linkBar"><h2>Products</h2></Link>
        <Link to="/cart" className="cart"><h2>Cart</h2></Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="/" element={<ProductsList />} />
          <Route path=":slug" element={<ProductItem />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error/>} />


      </Routes>
    </Router>
  );
}

export default App;






