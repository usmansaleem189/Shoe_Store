import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial state
const initialstate = {
cart: [
    // {
    //     "name": "VALOUR BLUE",
    //     "cost": 450,
    //     "img": "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    //     "id": "air-jordan-3-valor-blue",
    //     "quantity": 1
    // }
]
}


//Create context
export const GlobalContext = createContext(initialstate);

export const Globalprovider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialstate);

  function addToCart(product) {
    dispatch({
      type: "addToCart",
      payload: product
    });
  }

  function removeFromCart(id) {
    dispatch({
      type: "removeFromCart",
      payload: id
    });
  }

  function increaseItem(id) {
    dispatch({
      type: "increaseItem",
      payload: id
    });
  }

  function decreaseItem(id) {
    dispatch({
      type: "decreaseItem",
      payload: id
    });
  }
  function emptyCart() {
    dispatch({
      type: "emptyCart"
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeFromCart,
        increaseItem,
        decreaseItem,
        emptyCart
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};