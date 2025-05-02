import React from "react";
import Layout from "../layouts/index.jsx";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import PageTitleContainer from "../containers/global/page-title/index.jsx";
import CallToAction from "../containers/global/call-to-action/index.jsx";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import Servicesn from "../components/servicenew/index.jsx";
import Whychooseus from "../containers/home/whychoseus/index.jsx";
const ServicePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="secopp – Service" />
                <div className="wrapper">
                    <Header />
                    <div className="main-content site-wrapper-reveal">
                        <PageTitleContainer
                            image="img/slider/13.jpg"
                            subTitle="Best solution for your heatlh"
                            title="Services <span>That We Provide</span>"
                        />
                        <Servicesn />
                        <Whychooseus />
                        <CallToAction />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ServicePage;