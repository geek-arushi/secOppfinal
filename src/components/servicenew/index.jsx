import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Servicesn = () => {
    const [hoveredCancer, setHoveredCancer] = useState(false);
    const [hoveredOrtho, setHoveredOrtho] = useState(false);

    // Common card styles
    const cardStyle = {
        height: "100%",
        borderRadius: "16px",
        transition: "transform 0.3s ease-in-out",
    };

    const imgStyle = {
        width: "100px",
        height: "100px",
        objectFit: "contain",
    };

    const buttonStyle = (hovered) => ({
        backgroundColor: hovered ? "orange" : "#00213e",
        border: "none",
        transition: "background-color 0.3s ease",
    });

    const containerStyle = {
        minHeight: "80vh",
    };

    return (
        <div
            className="container py-4 d-flex justify-content-center align-items-center bg-white"
            style={containerStyle}
        >
            <div className="row g-4 w-100">
                {/* Cancer (Oncology) Card */}
                <div className="col-12 col-md-6">
                    <div className="card text-center shadow-sm h-100" style={cardStyle}>
                        <div className="card-body d-flex flex-column align-items-center">
                            <img
                                src="img/slider/cc.png"
                                alt="Cancer (Oncology) icon"
                                className="mb-4"
                                style={imgStyle}
                            />
                            <h5 className="card-title fw-bold">Cancer (Oncology)</h5>
                            <p className="card-text text-muted">
                                SecOpp Oncology services offer patients the opportunity to consult
                                with an additional oncologist for a fresh perspective on their
                                cancer diagnosis...
                            </p>
                            <Link to="/cancer" className="mt-auto">
                                <button
                                    className="btn btn-primary mt-3"
                                    style={buttonStyle(hoveredCancer)}
                                    onMouseEnter={() => setHoveredCancer(true)}
                                    onMouseLeave={() => setHoveredCancer(false)}
                                >
                                    Know More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Orthopedics Card */}
                <div className="col-12 col-md-6">
                    <div className="card text-center shadow-sm h-100" style={cardStyle}>
                        <div className="card-body d-flex flex-column align-items-center">
                            <img
                                src="img/slider/oo.png"
                                alt="Orthopedics icon"
                                className="mb-4"
                                style={imgStyle}
                            />
                            <h5 className="card-title fw-bold">Orthopedics</h5>
                            <p className="card-text text-muted">
                                SecOpp Orthopedic services provide patients with an opportunity to
                                consult another orthopedic specialist for a new perspective on
                                their diagnosis...
                            </p>
                            <Link to="/Orthopedics" className="mt-auto">
                                <button
                                    className="btn btn-primary mt-3"
                                    style={buttonStyle(hoveredOrtho)}
                                    onMouseEnter={() => setHoveredOrtho(true)}
                                    onMouseLeave={() => setHoveredOrtho(false)}
                                >
                                    Know More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicesn;
