import React, { useContext } from 'react';
import shoes from './products.json';
import { Link } from 'react-router-dom';
import { GlobalContext } from './Context/GlobalState';



export function ProductsList() {
  const { cart, addToCart, increaseItem } = useContext(GlobalContext);

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
    <div className="productsContainer">
      {Object.entries(shoes).map(([slug, { name, img, cost }]) =>
        <div key={slug}>
          <Link to={`/products/${slug}`} className="linkContainer">
            <h2>{name}</h2>
            <img src={img} alt={name} height={350} />
            <h3>${cost}</h3>
          </Link>
          <button onClick={() => addProduct([slug, { name, img, cost }])}>Add to Cart</button>
        </div>)}
    </div>
  )

}