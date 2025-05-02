/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Teamoth from "../../containers/home/team2/index2";
import SidebarPost from "../sidebar/sidebar-post";
const Orthopedicse = () => {
    return (
        <div className="container-fluid bg-light text-dark p-4">
            <div className="row">
                <div className="col-lg-9 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h1
                                className="card-title"
                                style={{ color: "#00213e" }}
                            >
                                Second Opinion Orthopedic Services:
                            </h1>
                            <p className="card-text">
                                SecOpp Orthopedic services provide patients with
                                an opportunity to consult another orthopedic
                                specialist for a new perspective on their
                                diagnosis, treatment plan, or surgical
                                recommendations. This service is particularly
                                valuable when facing complex or critical
                                conditions, or when a patient seeks reassurance
                                before making significant decisions about their
                                healthcare.
                            </p>
                            <h2 className="card-subtitle mb-2 text-muted">
                                These services include:
                            </h2>
                            <ol className="list-group list-group-numbered">
                                <li className="list-group-item">
                                    <strong>Thorough Evaluation:</strong> A A
                                    second orthopedic opinion includes a
                                    detailed review of the patient’s medical
                                    history, diagnostic tests (e.g., X-rays,
                                    MRIs, CT scans), and previous treatment
                                    plans..
                                </li>
                                <li className="list-group-item">
                                    <strong>
                                        Alternative Treatment Options:
                                    </strong>{" "}
                                    The consulting orthopedic expert may suggest
                                    alternative treatments, therapies, or
                                    surgical approaches that weren’t previously
                                    considered.
                                </li>
                                <li className="list-group-item">
                                    <strong>Peace of Mind:</strong> By getting
                                    another perspective, patients can feel more
                                    confident about their decisions regarding
                                    surgeries, medications, or non-invasive
                                    treatments.
                                </li>
                                <li className="list-group-item">
                                    <strong>
                                        Collaboration with Primary Care
                                        Providers:
                                    </strong>{" "}
                                    Often, second opinion services collaborate
                                    with the patient’s primary physician or
                                    original specialist to ensure a
                                    comprehensive and cohesive approach to
                                    care..
                                </li>
                                <li className="list-group-item">
                                    <strong>Non-Surgical Solutions: </strong>{" "}
                                    Not all cases require surgery, and a second
                                    opinion may uncover non-surgical solutions
                                    that are less invasive and have a quicker
                                    recovery time.
                                </li>
                            </ol>
                            <p className="card-text mt-3">
                                Choosing a second opinion can be especially
                                important for individuals who are hesitant about
                                the first diagnosis, those dealing with chronic
                                conditions like arthritis, back pain, or joint
                                issues, or patients considering orthopedic
                                surgery. Ultimately, the goal of these services
                                is to ensure the patient receives the most
                                accurate diagnosis and the best possible
                                treatment options.
                            </p>
                            <Teamoth />
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search..."
                                />
                            </div>

                            <div className="mb-3">
                                <Link
                                    to="/cancer"
                                    className="btn w-100"
                                    style={{
                                        backgroundColor: "#00213e",
                                        borderColor: "#00213e",
                                        color: "#ffffff",
                                    }}
                                >
                                    cancer
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orthopedicse;