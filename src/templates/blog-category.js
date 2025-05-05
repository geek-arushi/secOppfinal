import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Layout from "../layouts/index.jsx";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import ScrollToTop from "../components/scroll-to-top";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { FaFileLines, FaComment } from "react-icons/fa6";

const BlogCategory = () => {
    const { slug } = useParams(); // Capture the category slug from URL parameter
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://secopp-admin.onrender.com/api/blog")
            .then((res) => {
                // Filter the blogs based on category slug (Cancer or Orthopedic)
                const filteredBlogs = res.data.filter(
                    (blog) => blog.blogCategory.toLowerCase() === slug.toLowerCase()
                );
                setBlogs(filteredBlogs);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching blogs:", err);
                setLoading(false);
            });
    }, [slug]); // Refetch when slug changes

    if (loading) return <p className="text-center">Loading...</p>;

    const categoryTitle = blogs[0]?.blogCategory || slug;

    // Component to render individual blog card
    const renderBlogCards = (blogsToRender) => (
        <div className="row">
            {blogsToRender.map((blog) => (
                <div key={blog._id} className="col-md-4 mb-4" data-category={blog.blogCategory}>
                <Link to={`/blog-details/${blog._id}`} className="text-decoration-none text-dark">
                    <div className="card" style={{ width: "18rem" }}>
                        <img
                            src={blog.blogCardImage}
                            className="card-img-top"
                            alt="Blog Thumbnail"
                        />
                        <div className="card-body">
                            <h5 className="card-title">{blog.blogCardTitle}</h5>
                            <p className="card-text">{blog.blogCardDescription}</p>
                            <small className="text-body-secondary">
                                <FaFileLines className="mr-2" /> {blog.blogCategory}
                            </small>
                            <br />
                            <small className="text-body-secondary">
                                <FaComment className="mr-2" /> {blog.likes}
                            </small>
                            <div className="d-flex justify-content-end mt-2">
                                <a href={`/blog-details/${blog._id}`} className="btn btn-primary">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            

            ))}
        </div>
    );

    return (
        <React.Fragment>
            <Layout>
                <div className="wrapper">
                    <Header />
                    <div className="container my-5">
                        {/* Section 1: Cancer */}
                        <section className="mb-5">
                            <h2 className=" font-weight-bold mb-4 text-center">{categoryTitle} Blogs</h2>
                            {renderBlogCards(blogs)}
                        </section>
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

BlogCategory.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            slug: PropTypes.string.isRequired,
        }).isRequired,
    }),
};

export default BlogCategory;
