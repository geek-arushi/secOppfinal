import React from "react";
import Layout from "../layouts/index.jsx";
import Header from "../layouts/header";
import PageTitleContainer from "../containers/global/page-title/index.jsx";
import Footer from "../layouts/footer";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import PrivacyPolicyq from "../containers/privacypolicy/index.jsx";

const Privacypolicy = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Second Opinion – About Us - video doctor usa - online doctor united states " />
                <div className="wrapper">
                    <Header />
                    <div className="main-content site-wrapper-reveal">
                        <PrivacyPolicyq />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default Privacypolicy;
