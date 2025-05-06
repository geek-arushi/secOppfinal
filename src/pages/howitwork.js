import React from "react";
import Layout from "../layouts/index.jsx";
import Header from "../layouts/header";
import PageTitleContainer from "../containers/global/page-title/index.jsx";
import Footer from "../layouts/footer";
import Howitworkp from "../containers/Howitwork/index.jsx";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const Howitworkpage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Second Opinion – How it works - video doctor usa - online doctor united states " />
                <div className="wrapper">
                    <Header />
                    <div className="main-content site-wrapper-reveal">
                        <PageTitleContainer
                            image="img/photos/about-bg1.jpg"
                            subTitle=""
                            title="How it work"
                        />
                        <Howitworkp />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default Howitworkpage;
