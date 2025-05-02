import React from "react";
import Layout from "../layouts/index.jsx";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import PageTitleContainer from "../containers/global/page-title/index.jsx";
import Whychooseus from "../containers/home/whychoseus/index.jsx";
import CallToAction from "../containers/global/call-to-action/index.jsx";
import ContactForms from "../containers/Contactus/index.jsx";
const ContactPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Second Opinion – Contact Us" />
                <div className="wrapper">
                    <Header />
                    <div className="main-content site-wrapper-reveal">
                        <PageTitleContainer
                            image="img/photos/contact-bg1.jpg"
                            subTitle="We Always Ready Helps you"
                            title="Contact Us"
                        />
                        {/* <GoogleMapContainer classOption="contact-map-area" /> */}
                        <ContactForms />
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

export default ContactPage;
