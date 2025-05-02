import React from "react";
import Layout from "../layouts/index.jsx";
import Header from "../layouts/header";
import Breadcrumb from "../containers/global/breadcrumb";
import Footer from "../layouts/footer";
import BlogListContainer from "../containers/blog/blog-list/index.jsx";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import MedicalArticles from "../containers/blog2/blog2.jsx";

const BlogPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Second Opinion – Blogs and news" />
                <div className="wrapper">
                    <Header />
                    <MedicalArticles />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default BlogPage;
