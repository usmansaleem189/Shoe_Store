import React from 'react';
import {useParams} from 'react-router-dom';
import shoes from './products.json';
// import {Outlet} from 'react-router-dom';

export function ProductItem() {
    const {slug} = useParams();
    const shoe = shoes[slug];
  
    if (!shoe) {
      return <h2>Not Found!</h2>
    }
  
    const {name, img, cost} = shoe;
  
    return (
      <div className="productItem">
        <br/>
        <h2>{name}</h2>
        <img src={img} alt={name}/>
        <h3>${cost}</h3>
        <button>Add to Cart</button>

        {/* <Outlet /> */}
      </div>
    )
  }