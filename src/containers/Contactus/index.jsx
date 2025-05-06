import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"; // Install axios: npm install axios

function ContactForms() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        helpyou: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const params = new URLSearchParams();
            params.append("FirstName", formData.firstName);
            params.append("LastName", formData.lastName);
            params.append("Email", formData.email);
            params.append("Phone", formData.phone);
            params.append("Subject", formData.subject);
            params.append("Helpyou", formData.helpyou);

            await axios.post(
                "https://script.google.com/macros/s/AKfycbzit0oZus6tl2-aYFcPO-Tvou_ifWyVM5DcIO0kD8JZ9AzpGnE5ETIC8yu2PvafeDMHlw/exec", // 🔴 Replace with your Web App URL
                params
            );

            setSubmitted(true);
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="bg-light d-flex align-items-center justify-content-center min-vh-75 p-5">
            <div
                className={`bg-white ${
                    submitted ? "p-3" : "p-5"
                } rounded shadow-lg w-100`}
                style={{ maxWidth: "600px" }}
            >
                {submitted ? (
                    <div className="text-center">
                        <h2 className="h4 font-weight-bold text-dark">
                            Submitted
                        </h2>
                        <p className="text-muted">Thanks for contacting us!</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="firstName">
                                Name <span className="text-danger">*</span>
                            </label>
                            <div className="d-flex">
                                <input
                                    className="form-control me-2"
                                    id="firstName"
                                    type="text"
                                    placeholder="First"
                                    required
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                <input
                                    className="form-control"
                                    id="lastName"
                                    type="text"
                                    placeholder="Last"
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">
                                Email <span className="text-danger">*</span>
                            </label>
                            <input
                                className="form-control"
                                id="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="phone">
                                Phone Number{" "}
                                <span className="text-danger">*</span>
                            </label>
                            <input
                                className="form-control"
                                id="phone"
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="subject">
                                Subject <span className="text-danger">*</span>
                            </label>
                            <input
                                className="form-control"
                                id="subject"
                                type="text"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="helpyou">
                                How can we help you?{" "}
                                <span className="text-danger">*</span>
                            </label>
                            <textarea
                                className="form-control"
                                id="helpyou"
                                rows="4"
                                required
                                value={formData.helpyou}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="d-flex justify-content-center">
                            <button
                                className="btn"
                                type="submit"
                                style={{
                                    backgroundColor: "#00213e",
                                    color: "white",
                                    border: "none",
                                }}
                            >
                                Contact Us
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default ContactForms;