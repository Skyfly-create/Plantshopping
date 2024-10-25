import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Ensure correct import for CSS

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-container">
            <header className="header">
                <h1 className="header-title">Landing Page</h1>
                <div className="underline"></div>
            </header>
            <div className="image-background">
                <div className="content">
                    <div className="text-column">
                        <h2 className="welcome-heading">Welcome To Paradise Nursery</h2>
                        <div className="caption">
                            <div className="green-line"></div>
                            <p className="caption-text">Where Green Meets Serenity</p>
                        </div>
                        <button className="get-started-button" onClick={() => navigate('/products')}>
                            Get Started
                        </button>
                    </div>
                    <div className="note-column">
                        <p>Welcome To Paradise Nursery, Where Green Meets Serenity.</p>

                        <p>We are dedicated to bringing you the best plants and gardening supplies 
                            to create a lush and vibrant home environment.                        Explore our extensive range of houseplants, each chosen for their beauty and ease of care. Whether you are a seasoned gardener or a beginner, we have something for everyone.</p>
                        <p>Join us on this journey towards a greener life and let us help you transform your space into a paradise of tranquility and harmony.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
