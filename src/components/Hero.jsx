import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section>
      <div className="hero">
        <div className="content">
          <div className="title">
            <h1>Consistency</h1>
            <h1>Is</h1>
            <h1>Power</h1>
          </div>
          <div className="sub-title">
            <p>Elevate Your Mind. Transform Your Body</p>
            <p>Strength Starts Here.</p>
          </div>

          <div className="buttons">
            <button>Starts Your Journey</button>
            <button> <Link style={{textDecoration:'none', color:'#0095f'}}>Discover Your Plan</Link> </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
