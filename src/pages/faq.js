import React from "react";
import Layout from "../layouts/index.jsx";
import Header from "../layouts/header/index.jsx";
import Footer from "../layouts/footer/index.jsx";
import ScrollToTop from "../components/scroll-to-top/index.jsx";
import SEO from "../components/seo/index.jsx";
import PageTitleContainer from "../containers/global/page-title/index.jsx";
import CallToAction from "../containers/global/call-to-action/index.jsx";
import SearchBar from "../containers/faqsearch/index.jsx";
import AccordionWrap from "../components/accordion/AccordionWrap copy.jsx";
const faq = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Second Opinion – faq " />
                <div className="wrapper">
                    <Header />
                    <div className="main-content site-wrapper-reveal">
                        <PageTitleContainer
                            image="img/photos/about-bg1.jpg"
                            title="FAQ"
                        />
                        <SearchBar />
                        <div
                            className="accordian-content"
                            data-aos="fade-up"
                            data-aos-duration="1100"
                        >
                            <AccordionWrap />
                            <CallToAction />
                        </div>
                        <Footer />
                        <ScrollToTop />
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default faq;