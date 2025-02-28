import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import './FormStyles.css';

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(
            (user) => user.email === formData.email && user.password === formData.password
        );

        if (!user) {
            setError("Invalid credentials!");
            return;
        }

        login();
        navigate("/");
    };

    const handleGuestLogin = () => {
        login();
        navigate("/");
    };

    const handleForgotPassword = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((user) => user.email === forgotPasswordEmail);

        if (!user) {
            alert("User not found!");
        } else {
            alert(`Your password is!: ${user.password}`);
        }s

        setForgotPasswordEmail("");
        setShowForgotPassword(false);
    };

    return (
        <section className="Both">
        <div className="form-container">
            <h2 style={{ color: '#f1f1f1', textTransform: 'uppercase', color: '#0056b3' }}><u>Login</u></h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <div className="password-field">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                    <span
                        className="toggle-password"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "🙈" : "👁️"}
                    </span>
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" style={{ marginTop: '1.5rem' }} className="LoginBtn">Login</button>
                <button type="button" onClick={handleGuestLogin} className="guest">
                    Login as Guest
                </button>
                <p onClick={() => setShowForgotPassword(true)} className="forgot-password">
                    Forgot your password?
                </p>
                
                <p className="redirect-message">
                    Must should be register first ?{" "}
                    <span className="redirect-link" onClick={() => navigate("/register")}>
                        Register
                    </span>
                </p>
            </form>

            {showForgotPassword && (
                <div className="forgot-password-modal">
                    <h3>Forgot Password</h3>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={forgotPasswordEmail}
                        onChange={(e) => setForgotPasswordEmail(e.target.value)}
                        required
                    />
                    <button onClick={handleForgotPassword}>Reset Password</button>
                    <button onClick={() => setShowForgotPassword(false)}>Cancel</button>
                </div>
            )}
        </div>
        </section>
    );
};

export default Login;
