import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouterm, Router, Route, Routes, BrowserRouter } from "react-router-dom";
import { } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import WorkoutSessions from "./components/WorkoutSessions";
// import Gallery from "./components/Gallery";
// import Pricing from "./components/Pricing";
// import Contact from "./components/Contact";
// import BMICalculator from "./components/BMICalculator";
// import Footer from "./components/Footer";
// import Formjoin_comp from '../src/Form_join_comp/FormJoin_comp';

const App = () => {
  return (

    <BrowserRouter>
      <Router>

        <Route path="/" element={<Pricing.jsx />} />
        {/* <Home /> */}

        <ToastContainer theme="dark" position="top-center" />





      </Router>
    </BrowserRouter>

    // {/* <Formjoin_comp /> */}
    // {/* <Navbar />/ */}
    // {/* <WorkoutSessions/ />
    // <Gallery />
    // <Pricing />
    // <Contact />
    // <BMICalculator />
    // <Footer /> */}
  );
};

export default App;