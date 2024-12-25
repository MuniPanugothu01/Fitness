import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Import components
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Formjoin_comp from "../src/Form_join_comp/FormJoin_comp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>



        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/form" element={<Formjoin_comp />} /> {/* Standalone route */}



      </Routes>
      <ToastContainer theme="dark" position="top-center" />
    </BrowserRouter>
  );
};

export default App;
