/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Teamcan from "../../containers/home/team2/indexcan";
import SidebarPost from "../sidebar/sidebar-post";
const Cancers = () => {
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
                                Second Opinion Oncology Services:
                            </h1>
                            <p className="card-text">
                                SecOpp Oncology services offer Patients the
                                opportunity to consult with an additional
                                oncologist for a fresh perspective on their
                                cancer diagnosis, treatment plan, or therapy
                                recommendations. This service is particularly
                                important when navigating complex cancer cases,
                                seeking clarification on treatment options, or
                                when a patient desires reassurance before moving
                                forward with significant medical decisions.
                            </p>
                            <h2 className="card-subtitle mb-2 text-muted">
                                These services include:
                            </h2>
                            <ol className="list-group list-group-numbered">
                                <li className="list-group-item">
                                    <strong>Comprehensive Assessment:</strong> A
                                    second opinion oncology consultation
                                    involves a detailed review of the Patient's
                                    medical history, biopsy results, imaging
                                    reports (e.g., CT scans, MRIs, PET scans),
                                    and prior treatments or therapies.
                                </li>
                                <li className="list-group-item">
                                    <strong>
                                        Exploring Treatment Alternatives:
                                    </strong>{" "}
                                    The consulting oncologist may propose
                                    alternative treatment methods, including
                                    different chemotherapy regimens,
                                    immunotherapies, radiation approaches, or
                                    clinical trial opportunities that may not
                                    have been previously considered.
                                </li>
                                <li className="list-group-item">
                                    <strong>
                                        Enhanced Decision-Making Confidence:
                                    </strong>{" "}
                                    By receiving a second perspective, patients
                                    can make more informed choices about their
                                    treatment options, weighing the benefits and
                                    risks of each approach with greater
                                    confidence and peace of mind.
                                </li>
                                <li className="list-group-item">
                                    <strong>Collaborative Care:</strong> Often,
                                    the second opinion oncologist will work
                                    closely with the Patient's primary
                                    oncologist to ensure that the patient
                                    receives a coordinated and well-considered
                                    care plan, integrating insights from both
                                    experts to optimize treatment
                                    recommendations.
                                </li>
                                <li className="list-group-item">
                                    <strong>Personalized Approach:</strong>{" "}
                                    Every cancer diagnosis is unique, and a
                                    second opinion allows for a more tailored
                                    treatment plan based on the Patient's
                                    individual health needs, genetic factors,
                                    and cancer type.
                                </li>
                            </ol>
                            <p className="card-text mt-3">
                                Choosing a second opinion in oncology can be
                                especially valuable for those facing complex or
                                rare cancer diagnoses, facing aggressive
                                treatment options, or considering life-altering
                                treatments. This goal is to ensure that every
                                patient receives the most accurate diagnosis and
                                the best possible care to achieve the best
                                possible outcome.
                            </p>
                            <Teamcan />
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
                                    to="/Orthopedics"
                                    className="btn w-100"
                                    style={{
                                        backgroundColor: "#00213e",
                                        borderColor: "#00213e",
                                        color: "#ffffff",
                                    }}
                                >
                                    Orthopedic
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cancers;