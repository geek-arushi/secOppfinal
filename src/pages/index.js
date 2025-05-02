import React from "react";
import Layout from "../layouts/index.jsx";
import Header from "../layouts/header";
import IntroContainer from "../containers/home/intro";
import HealthFeatureContainer from "../containers/home/health-feature";
import MedicalFeatureContainer from "../containers/home/medical-feature";
import TestimonialContainer from "../containers/home/testimonial";
import BlogAccordion from "../containers/home/blog-accordion";
import Footer from "../layouts/footer";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import Howitwork from "../containers/home/howitwork/index.jsx";
import CallToAction from "../containers/global/call-to-action/index.jsx";
import Whychooseus from "../containers/home/whychoseus/index.jsx";
import Team from "../containers/home/team2/index.jsx";
import Marquee from "../containers/home/logo/index.jsx";
import Whoweare from "../containers/home/whoweare/index.jsx";
import Counter from "../containers/home/feature/index.jsx";
const HomePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Secop &amp; Second Opinion" />
                <div className="wrapper home-default-wrapper">
                    <Header />
                    <div className="main-content site-wrapper-reveal">
                        <IntroContainer />
                        <Counter />
                        <Whoweare />
                        <Howitwork />
                        <Team />
                        <Marquee />
                        <TestimonialContainer />
                        <Whychooseus />
                        <CallToAction />
                        <BlogAccordion />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default HomePage;