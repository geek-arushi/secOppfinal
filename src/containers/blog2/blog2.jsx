import "bootstrap/dist/css/bootstrap.min.css";
import { FaComment, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import { FaFileLines } from "react-icons/fa6";

const MedicalArticles = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get("https://secopp-admin.onrender.com/api/blog")
            .then((res) => {
                setBlogs(res.data);
            })
            .catch((err) => {
                console.error("Error fetching blogs:", err);
            });
    }, []);

    // Filtered blog categories
    const cancerBlogs = blogs.filter(blog => blog.blogCategory.toLowerCase() === "cancer" || blog.blogCategory.toLowerCase() === "oncology");
    const orthoBlogs = blogs.filter(blog => blog.blogCategory.toLowerCase() === "orthopedic");

    // Component to render blog cards
    const renderBlogCards = (blogsToRender) => (
        <div className="row">
            {blogsToRender.map((blog) => (
                <div key={blog._id} className="col-md-4 mb-4" data-category={blog.blogCategory}>
                    <Link to={`/blog-details/${blog._id}`} className="text-decoration-none text-dark">
                        <div className="card h-100">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src={blog.blogCardImage}
                                        className="img-fluid rounded-start"
                                        alt="Blog Thumbnail"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text fw-bold text-truncate">
                                            {blog.blogCardTitle}
                                        </p>
                                        <small className="text-body-secondary">
                                            <FaFileLines className="mr-2" /> {blog.blogCategory} | {blog.blogCardDescription}
                                        </small>
                                        <br />
                                        <small className="text-body-secondary">
                                            <FaComment className="mr-2" /> {blog.likes}
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))
            }
        </div >
    );

    return (
        <>
            <Header />
            <div className="container mt-3 d-flex justify-content-end">
    <a
        href="https://secopp-admin.onrender.com/login"
        className="btn custom-login-btn"
        target="_blank"
        rel="noopener noreferrer"
    >
        Admin Login
    </a>
</div>

<style>
    {`
        .custom-login-btn {
            color: #00213e;
            border: 2px solid #00213e;
            background-color: transparent;
            transition: all 0.3s ease;
        }

        .custom-login-btn:hover {
            background-color: #00213e;
            color: #fd7d11;
            border-color: #00213e;
        }
    `}
</style>
            <div className="container my-5">
                {/* Section 1: Cancer */}
                <section className="mb-5">
                    <h2 className="h4 font-weight-bold mb-4">Latest From Cancer (Oncology)</h2>
                    {renderBlogCards(cancerBlogs)}
                    <div className="d-flex justify-content-start mt-4">
                        <Link to="/blog-category/cancer" className="btn btn-primary" style={{ backgroundColor: "#00213e" }}>
                            Know More <FaArrowRight className="ml-2" />
                        </Link>
                    </div>
                </section>

                {/* Section 2: Orthopedic */}
                <section className="mb-5">
                    <h2 className="h4 font-weight-bold mb-4">Latest From Orthopedic</h2>
                    {renderBlogCards(orthoBlogs)}
                    <div className="d-flex justify-content-start mt-4">
                        <Link to="/blog-category/orthopedic" className="btn btn-primary" style={{ backgroundColor: "#00213e" }}>
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
