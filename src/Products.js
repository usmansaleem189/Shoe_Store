import React from 'react';
import {Outlet} from 'react-router-dom';


export function Products() {
    return (
      <div className="productsTitle">
        <h1>Shoes Store</h1>
  
        <Outlet />
      </div>
    )
  
  }