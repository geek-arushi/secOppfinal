import React from "react";
import Layout from "../layouts/index.jsx";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import PageTitleContainer from "../containers/global/page-title/index.jsx";
import CallToAction from "../containers/global/call-to-action/index.jsx";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import Cancers from "../components/cancer/index.jsx";
import Whychooseus from "../containers/home/whychoseus/index.jsx";
const cancer = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="secopp – Cancer" />
                <div className="wrapper">
                    <Header />
                    <div className="main-content site-wrapper-reveal">
                        <PageTitleContainer
                            image="img/slider/12.jpg"
                            subTitle="Know More"
                            title="Cancer <span></span>"
                        />
                        <Cancers />
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

export default cancer;
