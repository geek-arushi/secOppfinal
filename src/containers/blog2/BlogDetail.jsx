import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";

const BlogDetail = () => {
  const { title } = useParams(); // Get title from URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`https://secopbackend.onrender.com/api/blog/${title}`)
      .then((res) => {
        setBlog(res.data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, [title]);

  if (!blog) return <div>Blog not found</div>;

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="card shadow-sm">
          <img
            src={blog.imageUrl}
            className="card-img-top"
            alt={blog.title}
          />
          <div className="card-body">
            <h2 className="card-title">{blog.title}</h2>
            <p className="text-muted">{blog.titledesc}</p>

            <p><strong>Description:</strong> {blog.desc}</p>
            <p><strong>Details:</strong> {blog.desc2}</p>
            <p><strong>Likes:</strong> {blog.like}</p>

            <hr />
            <h5>Medical Info</h5>
            <p><strong>Symptoms:</strong> {blog.symptoms}</p>
            <p><strong>Advanced Symptoms:</strong> {blog.advSysmptoms}</p>
            <p><strong>Diagnosis:</strong> {blog.diagnosis}</p>
            <p><strong>Treatment:</strong> {blog.treatment}</p>
            <p><strong>Prognosis:</strong> {blog.prognosis}</p>

            <hr />
            <h5>More Images</h5>
            <div className="row">
              {blog.pageImage1 && (
                <div className="col-md-3 mb-3">
                  <img src={blog.pageImage1} className="img-fluid rounded" alt="Page 1" />
                </div>
              )}
              {blog.pageImage2 && (
                <div className="col-md-3 mb-3">
                  <img src={blog.pageImage2} className="img-fluid rounded" alt="Page 2" />
                </div>
              )}
              {blog.pageImage3 && (
                <div className="col-md-3 mb-3">
                  <img src={blog.pageImage3} className="img-fluid rounded" alt="Page 3" />
                </div>
              )}
              {blog.pageImage4 && (
                <div className="col-md-3 mb-3">
                  <img src={blog.pageImage4} className="img-fluid rounded" alt="Page 4" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
