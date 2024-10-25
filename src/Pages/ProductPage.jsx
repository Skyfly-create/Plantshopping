import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import products from '../Data/products';
import './ProductPage.css'; // Import the CSS for styling

const ProductPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h1>Our Plants</h1>
      
      {/* Categories */}
      {['Cactus', 'Ground Cover', 'Hedgeplants'].map((category) => (
        <div key={category} className="category">
          <h2>{category}</h2>
          <div className="product-list">
            {products.filter(p => p.category === category).map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                handleAddToCart={handleAddToCart} 
                cartItems={cartItems} 
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const ProductCard = ({ product, handleAddToCart, cartItems }) => {
  const isInCart = cartItems.some(item => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <button 
        onClick={() => handleAddToCart(product)} 
        disabled={isInCart}
      >
        {isInCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductPage;
