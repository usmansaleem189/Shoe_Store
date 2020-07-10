import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import shoes from './products.json';
import { GlobalContext } from './Context/GlobalState';
// import {Outlet} from 'react-router-dom';

export function ProductItem() {

  const {cart, increaseItem, addToCart} = useContext(GlobalContext);

    const {slug} = useParams();
    const shoe = shoes[slug];
  
    if (!shoe) {
      return <h2>Not Found!</h2>
    }
  
    const {name, img, cost} = shoe;

    const addProduct = ([slug, product]) => {
      const modifiedProduct = Object.assign({}, product);
      modifiedProduct.id = slug;
  
      if (cart.find(item => item.id === slug))
        increaseItem(slug);
      else {
        modifiedProduct.quantity = 1;
        addToCart(modifiedProduct);
      }
    }
  
    return (
      <div className="productItem">
        <br/>
        <h2>{name}</h2>
        <img src={img} alt={name}/>
        <h3>${cost}</h3>
        <button onClick={() => addProduct([slug, { name, img, cost }])}>Add to Cart</button>

        {/* <Outlet /> */}
      </div>
    )
  }