import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const location = useLocation();

  // Only show the cart icon on the Product Page
  const showCart = location.pathname === '/products';

  return (
    <nav>
      
      {showCart && (
        <Link to="/cart">
          <span>🛒 ({totalCount})</span>
        </Link>
      )}
    </nav>
  );
};

export default NavBar;
