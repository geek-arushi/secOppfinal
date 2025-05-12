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
      // .get(`http://localhost:8000/api/blog/${title}`)
      .get(`https://secopp-admin.onrender.com/api/blog/${title}`)
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
          {/* <img
            src={blog.blogCardImage}
            className="card-img-top"
            alt={blog.blogCardTitle}
          /> */}
          <div className="card-body">
            {/* Render blog content with dangerous HTML */}
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
