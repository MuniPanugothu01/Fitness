import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Formjoin_comp from "../src/Form_join_comp/FormJoin_comp";
import 'font-awesome/css/font-awesome.min.css';
import { AuthProvider, useAuth } from "./components/AuthContext";
import Login from "./components/Login";
import Register from "./components/Register";
import BootstrapNavbar from "./components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import WorkoutSessions from './components/WorkoutSessions';
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import Pricing from './components/Pricing';
import Contact from "./components/Contact";
import BMICalculator from "./components/BMICalculator";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <BootstrapNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/form" element={<Formjoin_comp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/Workout"
            element={<WorkoutSessions />}
          />
          <Route
            path="/AboutUs"
            element={<AboutUs />}
          />
          <Route
            path="/Gallery"
            element={<Gallery />}
          />
          <Route
            path="/Packages"
            element={<Pricing />}
          />


          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/BMI"
            element={<BMICalculator />}
          />

          {/* <Route
            path="/Workout"
            element={<WorkoutSessions />}
          />


          <Route
            path="/AboutUs"
            element={<AboutUs />}
          />
          <Route
            path="/Gallery"
            element={<ProtectedRoute><Gallery /></ProtectedRoute>}
          /> */}

          {/* <Route
            path="/Packages"
            element={<ProtectedRoute><Pricing /></ProtectedRoute>}
          /> */}

          {/* <Route
            path="/contact"
            element={<ProtectedRoute><Contact /></ProtectedRoute>}
          /> */}
          {/* <Route path="/pricing" element={<Pricing />} />
          <Route path="/form" element={<Formjoin_comp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 

          <Route
            path="/Workout"
            element={<ProtectedRoute><WorkoutSessions /></ProtectedRoute>}
          />
          <Route
            path="/AboutUs"
            element={<ProtectedRoute><AboutUs /></ProtectedRoute>}
          />
          <Route
            path="/Gallery"
            element={<ProtectedRoute><Gallery /></ProtectedRoute>}
          />
          <Route
            path="/Packages"
            element={<ProtectedRoute><Pricing /></ProtectedRoute>}
          />
          <Route
            path="/contact"
            element={<ProtectedRoute><Contact /></ProtectedRoute>}
          />
          <Route
            path="/BMI"
            element={<ProtectedRoute><BMICalculator /></ProtectedRoute>}
          />  */}
        </Routes>
      </AuthProvider>
      <ToastContainer theme="dark" position="top-center" />
    </BrowserRouter>
  );
};

// Component to handle protected routes

// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

export default App;
