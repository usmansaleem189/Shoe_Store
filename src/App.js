import React, {useContext} from 'react';
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
import {CheckOut} from './CheckOut' 
import {Globalprovider, GlobalContext} from './Context/GlobalState';

function App() {

  const {cart} = useContext(GlobalContext);
  // console.log(cart); 
  const totalItems = () => {
    let total = 0;
    cart.forEach((product) => total += product.quantity);
    return total;
}
// const total_items = cart.reduce((total, cart) => total + cart.quantity, 0)
const cartItems = totalItems();

  return (
    <Globalprovider>
    <Router>
      <nav className="navBar">
        <Link to="/" className="linkBar"><h2>Home</h2></Link>
        <Link to="/products" className="linkBar"><h2>Products</h2></Link>
        <Link to="/cart" className="cart"><h2>Cart({cartItems})</h2></Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="/" element={<ProductsList />} />
          <Route path=":slug" element={<ProductItem />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="*" element={<Error/>} />


      </Routes>
    </Router>
    </Globalprovider>
  );
}

export default App;






