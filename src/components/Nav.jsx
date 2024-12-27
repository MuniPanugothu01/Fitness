import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./navboot.css";

const BootstrapNavbar = () => {
    const { isAuthenticated, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false); // Close menu after a selection.

    return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MyApp</Link>
                <div className="spacediv"></div> {/* Adds spacing */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${!isAuthenticated ? "disabled-link" : ""}`}
                                to="/Workout"
                                onClick={closeMenu}
                            >
                                WorkOuts-session
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${!isAuthenticated ? "disabled-link" : ""}`}
                                to="/AboutUs"
                                onClick={closeMenu}
                            >
                                About-Us
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link
                                className={`nav-link ${!isAuthenticated ? "disabled-link" : ""}`}
                                to="/Gallery"
                                onClick={closeMenu}
                            >
                                Gallary
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link
                                className={`nav-link ${!isAuthenticated ? "disabled-link" : ""}`}
                                to="/Packages"
                                onClick={closeMenu}
                            >
                                Packages
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link
                                className={`nav-link ${!isAuthenticated ? "disabled-link" : ""}`}
                                to="/contact"
                                onClick={closeMenu}
                            >
                                Contact-Us
                            </Link>
                        </li>



                        <li className="nav-item">
                            <Link
                                className={`nav-link ${!isAuthenticated ? "disabled-link" : ""}`}
                                to="/BMI"
                                onClick={closeMenu}
                            >
                                BMI-Calculator
                            </Link>
                        </li>



                        {!isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login" onClick={closeMenu}>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register" onClick={closeMenu}>Register</Link>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <button
                                    className="nav-link btn btn-link"
                                    onClick={() => {
                                        logout();
                                        closeMenu();
                                    }}
                                >
                                    Logout
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default BootstrapNavbar;
