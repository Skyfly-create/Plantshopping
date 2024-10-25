import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../features/cartSlice';
import './Cart.css'; 
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);

  const totalCost = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <p>Total number of plants in the cart: {totalCount}</p>
      <p>Total cost of all items in the cart: ${totalCost.toFixed(2)}</p>
      
      <button onClick={() => alert("Coming Soon!")} className="checkout-button">Checkout</button>
      <button onClick={() => navigate('/products')} className="continue-shopping-button">Continue Shopping</button>
      
      {items.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <div className="quantity-controls">
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
              </div>
              <button className="delete-button" onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
