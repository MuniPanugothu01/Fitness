import { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter, Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Hero
import Hero from './components/Hero';
// import WorkoutSessions
import WorkoutSessions from './components/WorkoutSessions';
// import Gallary
import Gallery from './components/Gallery';
// import Pricing
import Pricing from './components/Pricing';
// import Contact
import Contact from './components/Contact';
// import BMICalculator
import BMICalculator from './components/BMICalculator';
// import Footer
import Footer from './components/Footer';

function App() {


  return (

    <Router>
      <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer />
      <ToastContainer theme='dark' position='top-center' />
    </Router>


  )
}

export default App
