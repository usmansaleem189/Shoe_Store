import React, { useContext } from 'react';
import { GlobalContext } from './Context/GlobalState';
import { Link} from 'react-router-dom';


export const Cart = () => {

    const { cart, increaseItem, decreaseItem, removeFromCart, emptyCart } = useContext(GlobalContext);
    // console.log(cart);

    const increaseCount = (id) => {
        // console.log(cart.find(item => item.id === id));
        increaseItem(id);
    }
    const decreaseCount = (id) => {
        decreaseItem(id);
    }

    const removeProduct = (id) => {
        removeFromCart(id);
    }

    const clearCart = () => {
        // console.log("clearCart");
        emptyCart();
    }

    const totalCost = () => {
        let total = 0;
        cart.forEach((product) => total += product.cost * product.quantity);
        return total;
    }
    const totalPrice = totalCost();
    return (
        cart.length ? 
        <div className="cartContainer">
            <h2>Shopping Cart</h2>

            <table className="tableContainer">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>
                                <img src={product.img} alt={product.name} height={150} />
                            </td>
                            <td>${product.cost}</td>
                            <td>{product.quantity}</td>
                            <td>
                                <button onClick={() => increaseCount(product.id)}>+</button>
                                <button onClick={() => decreaseCount(product.id)}>-</button>
                                <button onClick={() => removeProduct(product.id)}>X</button>
                            </td>
                        </tr>

                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4"><h3>Total</h3></td>
                        <td colSpan="1"><h3>${totalPrice}</h3></td>
                    </tr>
                </tfoot>
            </table>
            <Link to="/checkout">
                <button className="checkOutButton" onClick={()=>clearCart()}>Check Out</button>
            </Link>

        </div>
        : <h2 className="emptyCart">Shopping Cart is Empty</h2>
    )
}
