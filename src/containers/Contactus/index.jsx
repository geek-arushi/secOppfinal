import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactForms() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
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
                        <p className="text-muted">Thanks for contacting us</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">
                                Name <span className="text-danger">*</span>
                            </label>
                            <div className="d-flex">
                                <input
                                    className="form-control me-2"
                                    id="first-name"
                                    type="text"
                                    placeholder="First"
                                    required
                                />
                                <input
                                    className="form-control"
                                    id="last-name"
                                    type="text"
                                    placeholder="Last"
                                    required
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
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="message">
                                How can we help you?{" "}
                                <span className="text-danger">*</span>
                            </label>
                            <textarea
                                className="form-control"
                                id="message"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button
                                className="btn custom-button" // Use a custom class for the button
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
