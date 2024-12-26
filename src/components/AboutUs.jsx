// AboutUs.js

import React from 'react';
import './AboutUs.css';
import Gallery from './Gallery';
import { Contact } from 'lucide-react';
import Footer from './Footer';

const AboutUs = () => {
    return (
        <>
            <div className="about-us-container" style={{ marginTop: '80px' }}>
                <div className="about-us-image">
                    <img src="image2.jpg" alt="Gym Fitness" />
                </div>
                <div className="about-us-content" style={{ textAlign: 'justify', marginTop: '-30px', fontFamily: "'Times New Roman', Times, serif" }}>
                    <h2 style={{ textTransform: 'uppercase', color: '#0095ff' }}><u>About Us</u></h2>
                    <p style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        At FitGym, we believe in empowering individuals to achieve their fitness goals through dedicated support, advanced equipment, and a motivating environment. Whether you're new to the gym or an experienced athlete, we offer personalized fitness plans tailored to your needs. Our goal is to help you build strength, increase endurance, and improve overall wellness.
                    </p>

                    <ul>
                        <li>State-of-the-art gym equipment</li>
                        <li>Personalized training programs</li>
                        <li>Expert trainers and coaches</li>
                        <li>Health and wellness seminars</li>
                        <li>Flexible membership plans</li>
                        <li>24/7 gym access</li>
                    </ul>
                </div>
            </div>

            <Gallery />
            <Contact />
            {/* <Footer /> */}
        </>
    );
};

export default AboutUs;
