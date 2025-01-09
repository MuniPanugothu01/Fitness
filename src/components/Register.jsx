import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './FormStyles.css';

const Register = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.find((user) => user.email === formData.email);

        if (userExists) {
            setError("User already exists!");
            return;
        }

        users.push({ email: formData.email, password: formData.password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful!");
        navigate("/login");
    };

    return (
        <section className="Both">
            {/* Background Image */}
            <div className="form-background"></div>

            <div className="form-container">
                <h2 style={{ color: '#f1f1f1' }}><u>Register</u></h2>
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
                    <div className="password-field">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                        />
                        <span
                            className="toggle-password"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? "🙈" : "👁️"}
                        </span>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" style={{ borderRadius: '20px', marginTop: '0.5rem' }}>Register</button>
                </form>
                <p className="redirect-message">
                    Already have an account?{" "}
                    <span className="redirect-link" onClick={() => navigate("/login")}>
                        Login
                    </span>
                </p>
            </div>
        </section>
    );
};

export default Register;
