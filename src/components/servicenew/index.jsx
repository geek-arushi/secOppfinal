import React, { useState } from "react"; // Import useState
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Servicesn = () => {
    const [hoveredCancer, setHoveredCancer] = useState(false); // State for Cancer button hover
    const [hoveredOrtho, setHoveredOrtho] = useState(false); // State for Orthopedic button hover

    return (
        <div
            className="container p-4 d-flex justify-content-center align-items-center bg-white"
            style={{ height: "70vh" }}
        >
            <div className="row g-2">
                {/* Cancer (Oncology) Card */}
                <div className="col-md-6">
                    <div className="card text-center shadow-sm">
                        <div className="card-body">
                            <img
                                src="img/slider/cc.png"
                                alt="Cancer (Oncology) icon"
                                className="mb-4"
                                style={{ width: "100px", height: "100px" }}
                            />
                            <h5 className="card-title fw-bold">
                                Cancer (Oncology)
                            </h5>
                            <p className="card-text text-muted">
                                SecOpp Oncology services offer patients the
                                opportunity to consult with an additional
                                oncologist for a fresh perspective on their
                                cancer diagnosis......
                            </p>
                            <Link to="/cancer">
                                <button
                                    className="btn btn-primary"
                                    style={{
                                        backgroundColor: hoveredOrtho
                                            ? "orange"
                                            : "#00213e",
                                    }}
                                    onMouseEnter={() => setHoveredCancer(true)} // Set hover state to true
                                    onMouseLeave={() => setHoveredCancer(false)} // Set hover state to false
                                >
                                    Know More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Orthopedics Card */}
                <div className="col-md-6">
                    <div className="card text-center shadow-sm">
                        <div className="card-body">
                            <img
                                src="img/slider/oo.png"
                                alt="Orthopedics icon"
                                className="mb-4"
                                style={{ width: "100px", height: "100px" }}
                            />
                            <h5 className="card-title fw-bold">Orthopedics</h5>
                            <p className="card-text text-muted">
                                SecOpp Orthopedic services provide patients with
                                an opportunity to consult another orthopedic
                                specialist for a new perspective on their
                                diagnosis......
                            </p>
                            <Link to="/Orthopedics">
                                <button
                                    className="btn btn-primary"
                                    style={{
                                        backgroundColor: hoveredOrtho
                                            ? "orange"
                                            : "#00213e",
                                    }}
                                    onMouseEnter={() => setHoveredOrtho(true)} // Set hover state to true
                                    onMouseLeave={() => setHoveredOrtho(false)} // Set hover state to false
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
