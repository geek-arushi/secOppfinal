import { Link } from "react-router-dom";
import DepartmentWidget from "../../components/sidebar/department";
import PropTypes from "prop-types";
import SidebarWorkingTime from "../../components/sidebar/sidebar-working-time";
import Appointment from "../../components/sidebar/appointment";
import ServiceDetails from "../../components/service-details";
import AccordionWrapTwo from "../../components/accordion/AccordionWrapTwo.jsx";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeData from "../../data/home.json";
import ServiceData from "../../data/service.json";
import CasesItem from "../../components/cases";

SwiperCore.use([Pagination]);
const ServiceDetailsContainer = ({ data }) => {
    const swiperOption = {
        slidesPerView: 2,
        speed: 1000,
        loop: true,
        spaceBetween: 30,
        autoplay: false,
        pagination: { clickable: true },
        breakpoints: {
            1200: {
                slidesPerView: 2,
            },

            991: {
                slidesPerView: 2,
            },

            767: {
                slidesPerView: 2,
            },

            576: {
                slidesPerView: 2,
            },

            0: {
                slidesPerView: 1,
            },
        },
    };
    return (
        <section className="department-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="department-wrpp">
                            <div className="sidebar-wrapper">
                                <DepartmentWidget data={ServiceData} />
                                <SidebarWorkingTime />
                                <Appointment />
                            </div>

                            <div className="department-content">
                                <ServiceDetails data={data} />

                                <div className="team-single">
                                    <h2 className="title">
                                        <span> Oncology</span> Physicians
                                    </h2>
                                    <div className="membr-info">
                                        <h4 className="name">
                                            Dr.Khaleel Ashraf
                                        </h4>
                                        <h5 className="designation">
                                            MD, MBBS, DMRD, FACP
                                        </h5>
                                        <h5 className="designation">
                                            Hematology and Oncology Associates
                                            of Alabama, LLC
                                        </h5>
                                        <div className="desc">
                                            <p>
                                                Fellowship in
                                                Hematology/Oncology and Bone
                                                Marrow Transplant at UAB
                                            </p>
                                            <ul>
                                                <li>
                                                    <span>Phone Number</span>
                                                    <span>(131) 839-6275</span>
                                                </li>
                                                <li>
                                                    <span>
                                                        Years in Practice
                                                    </span>
                                                    <span>6 - 10 Years</span>
                                                </li>
                                                <li>
                                                    <span>Languages</span>
                                                    <span>English</span>
                                                </li>
                                            </ul>
                                            {/* <Link to="/" className="btn-link">
                                                VIEW FULL PROFILE
                                            </Link> */}
                                        </div>
                                    </div>
                                    <div className="thumb">
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/img/photos/doctor-02.png"
                                            }
                                            alt="Second Opinion"
                                        />
                                    </div>
                                </div>

                                <div className="faq-area">
                                    <h2 className="title">
                                        <span>General</span> FAQs
                                    </h2>
                                    <div className="accordian-content">
                                        <AccordionWrapTwo />
                                    </div>
                                </div>

                                <div className="case-area">
                                    <div className="section-title">
                                        <h2 className="title">
                                            <span>Cases</span> Studies
                                        </h2>
                                        <a className="btn-link" href="#/">
                                            Cancer (Oncology) Physicians
                                        </a>
                                    </div>
                                    <Swiper
                                        className="case-slider-container"
                                        {...swiperOption}
                                    >
                                        {HomeData[8].cases &&
                                            HomeData[8].cases.map(
                                                (single, key) => {
                                                    return (
                                                        <SwiperSlide key={key}>
                                                            <CasesItem
                                                                key={key}
                                                                data={single}
                                                            />
                                                        </SwiperSlide>
                                                    );
                                                }
                                            )}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

ServiceDetailsContainer.propTypes = {
    data: PropTypes.object,
};

export default ServiceDetailsContainer;
