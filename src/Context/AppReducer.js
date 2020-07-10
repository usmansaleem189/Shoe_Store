export default (state, action) => {
  switch (action.type) {
    case "addToCart":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case "removeFromCart":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    case "increaseItem":
      const requiredIndex = state.cart.findIndex(item => item.id === action.payload);
      ++state.cart[requiredIndex].quantity;
      return {
        ...state,
        cart: state.cart
      };
    case "decreaseItem":
      const required_Index = state.cart.findIndex(item => item.id === action.payload);
      if (state.cart[required_Index].quantity > 1) {
        --state.cart[required_Index].quantity;
      }
      return {
        ...state,
        cart: state.cart
      };
    case "emptyCart":
      // while (state.cart.length) {
      //   console.log(state.cart.length)
      //   state.cart.pop();}
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
};
