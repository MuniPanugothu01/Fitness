// import React, { useState } from "react";

// const FormComponent = () => {
//     // State for form inputs
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         phoneNumber: "",
//         email: "",
//         package: "",
//     });

//     // Package options for dropdown
//     const packageOptions = [
//         { label: "One Month", value: "1_month" },
//         { label: "Three Months", value: "3_months" },
//         { label: "Six Months", value: "6_months" },
//         { label: "Yearly  plan", value: "12_months" },
//     ];

//     // Handle input change
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Form Data Submitted:", formData);
//         alert("Form Submitted Successfully!");
//     };

//     return (
//         <div style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem" }}>
//             <h2>Subscription Form</h2>
//             <form onSubmit={handleSubmit}>
//                 {/* First Name */}
//                 <div style={{ marginBottom: "1rem" }}>
//                     <label>First Name:</label>
//                     <input
//                         type="text"
//                         name="firstName"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                         placeholder="Enter your first name"
//                         required
//                         style={{ width: "100%", padding: "8px" }}
//                     />
//                 </div>

//                 {/* Last Name */}
//                 <div style={{ marginBottom: "1rem" }}>
//                     <label>Last Name:</label>
//                     <input
//                         type="text"
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         placeholder="Enter your last name"
//                         required
//                         style={{ width: "100%", padding: "8px" }}
//                     />
//                 </div>

//                 {/* Phone Number */}
//                 <div style={{ marginBottom: "1rem" }}>
//                     <label>Phone Number:</label>
//                     <input
//                         type="tel"
//                         name="phoneNumber"
//                         value={formData.phoneNumber}
//                         onChange={handleChange}
//                         placeholder="Enter your phone number"
//                         required
//                         style={{ width: "100%", padding: "8px" }}
//                     />
//                 </div>

//                 {/* Email */}
//                 <div style={{ marginBottom: "1rem" }}>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Enter your email"
//                         required
//                         style={{ width: "100%", padding: "8px" }}
//                     />
//                 </div>

//                 {/* Package Selection */}
//                 <div style={{ marginBottom: "1rem" }}>
//                     <label>Select Package:</label>
//                     <select
//                         name="package"
//                         value={formData.package}
//                         onChange={handleChange}
//                         required
//                         style={{ width: "100%", padding: "8px" }}
//                     >
//                         <option value="" disabled>
//                             Choose a package
//                         </option>
//                         {packageOptions.map((option) => (
//                             <option key={option.value} value={option.value}>
//                                 {option.label}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 {/* Submit Button */}
//                 <div>
//                     <button
//                         type="submit"
//                         style={{
//                             width: "100%",
//                             padding: "10px",
//                             backgroundColor: "#4CAF50",
//                             color: "white",
//                             border: "none",
//                             cursor: "pointer",
//                             fontSize: "16px",
//                         }}
//                     >
//                         Submit
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default FormComponent;


import React, { useState } from "react";
import "./styles.css"
const FormComponent = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        package: "",
    });

    const packageOptions = [
        { label: "One Month", value: "1_month" },
        { label: "Three Months", value: "3_months" },
        { label: "Six Months", value: "6_months" },
        { label: "Yearly Plan", value: "12_months" },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://fitness-backend-project.onrender.com/fitness/join", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Subscription saved successfully!");
            } else {
                alert("Failed to save subscription.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error connecting to the server.");
        }
    };

    return (
        <section className="Section-Form" >
            <div style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem", marginTop: '90px' }}>
                <h2 style={{ color: '#0095ff' }}><u >Subscription Form</u></h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "1rem" }}>
                        <label>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", padding: "8px" }}
                        />
                    </div>
                    <div style={{ marginBottom: "1rem" }}>
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", padding: "8px" }}
                        />
                    </div>
                    <div style={{ marginBottom: "1rem" }}>
                        <label>Phone Number:</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", padding: "8px" }}
                        />
                    </div>
                    <div style={{ marginBottom: "1rem" }}>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", padding: "8px" }}
                        />
                    </div>
                    <div style={{ marginBottom: "1rem" }}>
                        <label>Select Package:</label>
                        <select
                            name="package"
                            value={formData.package}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", padding: "8px" }}
                        >
                            <option value="" disabled>
                                Choose a package
                            </option>
                            {packageOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "#4CAF50",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "16px",
                        }}
                    >
                        Submit
                    </button>
                </form>
            </div>

        </section>
    );
};

export default FormComponent;
