import "bootstrap/dist/css/bootstrap.min.css";
import { FaComment, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";

const MedicalArticles = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Replace local URL with Render backend URL
        axios.get("https://secopbackend.onrender.com/api/blog")
            .then((res) => {
                setBlogs(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.error("Error fetching blogs:", err);
            });
    }, []);

    return (
        <>
        <Header />
        <div className="container my-5">
            {/* Latest From Cancer (Oncology) Section */}
            <section className="mb-5">
                <h2 className="h4 font-weight-bold mb-4">
                    Latest From Cancer (Oncology)
                </h2>
                <div className="row">
                    {blogs.map((blog) => (
                        <div key={blog._id} className="col-md-6 col-lg-4 mb-4">
                            {/* Corrected Link wrapping entire card */}
                            <Link
                                to={`/blog-details/${blog.title}`}  // Ensure this is correct for your routing
                                className="text-decoration-none text-dark"
                            >
                                <div className="card h-100 shadow-sm p-2">
                                    <img
                                        src={blog.imageUrl}
                                        className="card-img-top responsive-img"
                                        alt={blog.title}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title text-truncate">{blog.title}</h5>
                                        <p className="card-text text-muted text-truncate">
                                            {blog.desc} | <span>{blog.desc2}</span>
                                        </p>
                                        <div className="d-flex align-items-center text-muted">
                                            <FaComment className="mr-2" /> {blog.like}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="d-flex justify-content-start mt-4">
                    <Link
                        to="/blog"
                        className="btn btn-primary"
                        style={{ backgroundColor: "#00213e" }}
                    >
                        Know More <FaArrowRight className="ml-2" />
                    </Link>
                </div>
            </section>
        </div>
        <Footer />
        </>
    );
};

export default MedicalArticles;
