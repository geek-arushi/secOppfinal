import React, { useState } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SectionTitle from "../../../components/section-title";

SwiperCore.use([Navigation, Autoplay, Pagination]);

const Team = () => {
    const [category, setCategory] = useState("cancer");
    return (
        <div className="team-area team-default-area bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-24">
                        <SectionTitle
                            classOption="text-center"
                            subTitle=""
                            title="<span>Meet Our World Class Doctors</span> "
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 mx-auto">
                        <div className="d-flex justify-content-center">
                            <button
                                onClick={() => setCategory("cancer")}
                                className="px-4 py-2 rounded-pill text-white border-0"
                                style={{
                                    backgroundColor:
                                        category === "cancer"
                                            ? "#00213e"
                                            : "#FFB300FF",
                                    transition:
                                        "background-color 0.2s ease, color 0.2s ease",
                                    cursor: "pointer",
                                    marginRight: "2px", // Very close margin
                                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)", // Increased shadow
                                }}
                                onMouseEnter={(e) =>
                                    (e.target.style.backgroundColor = "orange")
                                }
                                onMouseLeave={(e) =>
                                    (e.target.style.backgroundColor =
                                        category === "cancer"
                                            ? "#00213e"
                                            : "#FFB300FF")
                                }
                            >
                                Cancer
                            </button>
                            <button
                                onClick={() => setCategory("orthopedic")}
                                className="px-4 py-2 rounded-pill text-white border-0"
                                style={{
                                    backgroundColor:
                                        category === "orthopedic"
                                            ? "#00213e"
                                            : "#FF9900FF",
                                    transition:
                                        "background-color 0.2s ease, color 0.2s ease",
                                    cursor: "pointer",
                                    marginLeft: "2px", // Very close margin
                                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)", // Increased shadow
                                }}
                                onMouseEnter={(e) =>
                                    (e.target.style.backgroundColor = "orange")
                                }
                                onMouseLeave={(e) =>
                                    (e.target.style.backgroundColor =
                                        category === "orthopedic"
                                            ? "#00213e"
                                            : "#FF9900FF")
                                }
                            >
                                Orthopedic
                            </button>
                        </div>
                    </div>
                </div>
                {category === "cancer" && (
                    <Swiper
                        spaceBetween={-25}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: -20 },
                            768: { slidesPerView: 2, spaceBetween: -30 },
                            1024: { slidesPerView: 3, spaceBetween: -40 },
                        }}
                    >
                        {/* Cancer Doctors Slides */}
                        {Array.from({ length: 10 }, (_, index) => (
                            <SwiperSlide
                                key={index}
                                className="flex justify-center"
                            >
                                <div className="overflow-hidden h-40 w-16 p-5">
                                    <img
                                        src={`${
                                            process.env.PUBLIC_URL
                                        }/img/photos/d${index + 1}.jpg`}
                                        alt={`Portrait of Doctor ${index + 1}`}
                                        className="container"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
                {category === "orthopedic" && (
                    <Swiper
                        spaceBetween={-25}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: -20 },
                            768: { slidesPerView: 2, spaceBetween: -40 },
                            1024: { slidesPerView: 3, spaceBetween: -50 },
                        }}
                    >
                        {/* Orthopedic Doctors Slides */}
                        {Array.from({ length: 20 }, (_, index) => (
                            <SwiperSlide
                                key={index}
                                className="flex justify-center"
                            >
                                <div className="overflow-hidden h-40 w-16 p-5">
                                    <img
                                        src={`${
                                            process.env.PUBLIC_URL
                                        }/img/photos/O (${index + 1}).jpg`}
                                        alt={`Portrait of Orthopedic Doctor ${
                                            index + 1
                                        }`}
                                        className="container"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </div>
    );
};

export default Team;
