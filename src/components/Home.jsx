import React from 'react';
import Navbar from './Navbar';
import WorkoutSessions from './WorkoutSessions';
import Gallery from './Gallery';
import Pricing from './Pricing'
import Contact from './Contact';
import BMICalculator from './BMICalculator';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';


const Home = () => {
  return (
    <section style={{ marginTop: '80px' }}>

      <Navbar />

      <div className="hero">
        <div className="content">
          <div className="title" style={{marginTop:'-10px'}}>
            <h1 style={{ fontSize: '70px' }}>Consistency</h1>
            <h1 style={{ fontSize: '70px' }}>Is</h1>
            <h1 style={{ fontSize: '70px' }}>Power</h1>
          </div>
          <div className="sub-title"  style={{marginTop:'-30px'}}>
            <p>Elevate Your Mind. Transform Your Body</p>
            <p>Strength Starts Here.</p>
          </div>
          <div className="buttons" style={{marginTop:'-20px'}}>
            <button>Starts Your Journey</button>

            <Link to={"pricing"}>
              <button id>Discover Your Plan</button></Link>

          </div>
        </div>

      </div>


      {/* <WorkoutSessions />
      <AboutUs />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer /> */}
      <WorkoutSessions />
      {/* <AboutUs /> */}
    </section>

  )
}

export default Home;
