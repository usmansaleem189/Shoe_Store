import React from 'react';
import shoes from './products.json';
import { Link } from 'react-router-dom';



export function ProductsList() {
  return (
    <div className="productsContainer">
      {Object.entries(shoes).map(([slug, { name, img, cost }]) =>
        <div key={slug}>
          <Link to={`/products/${slug}`} className="linkContainer">
            <h2>{name}</h2>
            <img src={img} alt={name} height={350} />
            <h3>${cost}</h3>
          </Link>
          <button>Add to Cart</button>
        </div>)}
    </div>
  )

}