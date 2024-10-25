// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import LandingPage from './Pages/LandingPage';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/Cart';
import NavBar from './components/NavBar'; // Import NavBar

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <NavBar /> {/* Include NavBar */}
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/products" element={<ProductPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;

