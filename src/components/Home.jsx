import React from 'react';
import Navbar from './Navbar';
import WorkoutSessions from './WorkoutSessions';
import Gallery from './Gallery';
import Pricing from './Pricing'
import Contact from './Contact';
import BMICalculator from './BMICalculator';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs'

const Home = () => {
  return (
    <section>
      <Navbar />

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

            <Link to={"pricing"}>
              <button id>Discover Your Plan</button></Link>

          </div>
        </div>

      </div>


      <WorkoutSessions />
      <AboutUs />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer />
    </section>

  )
}

export default Home;
