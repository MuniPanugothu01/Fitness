import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <nav className="navbar">
                <div className="logo">GymLogo</div>
                <button className="login-button">Login</button>
            </nav>
            <div className="background-overlay">
                <h1>Welcome to Our Gym</h1>
                <p>Your fitness journey starts here!</p>
            </div>
        </div>
    );
};

export default Home;
