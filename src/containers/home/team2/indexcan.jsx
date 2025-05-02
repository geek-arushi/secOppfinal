import React, { useState } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SectionTitle from "../../../components/section-title";

SwiperCore.use([Navigation, Autoplay, Pagination]);

const Teamcan = () => {
    const [category] = useState("cancer");
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
                                className="px-4 py-2 rounded-pill text-white border-0"
                                style={{
                                    backgroundColor: "#00213e",
                                    transition:
                                        "background-color 0.2s ease, color 0.2s ease",
                                    cursor: "pointer",
                                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
                                }}
                                onMouseEnter={(e) =>
                                    (e.target.style.backgroundColor = "orange")
                                }
                                onMouseLeave={(e) =>
                                    (e.target.style.backgroundColor = "#00213e")
                                }
                            >
                                Cancer
                            </button>
                        </div>
                    </div>
                </div>
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
            </div>
        </div>
    );
};

export default Teamcan;
