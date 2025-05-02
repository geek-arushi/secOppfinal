import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import SectionTitle from "../../../components/section-title";

const Whychooseus = () => {
    const features = [
        { img: "/img/photos/h4.png", alt: "Feature 1" },
        { img: "/img/photos/h5.png", alt: "Feature 2" },
        { img: "/img/photos/h6.png", alt: "Feature 3" },
    ];

    return (
        <div className="team-area team-default-area bg-gray py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <SectionTitle
                            classOption="text-center"
                            subTitle=""
                            title="<span>WHY CHOOSE US ?</span>"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={30}
                                autoplay={{ delay: 3000 }}
                                loop
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                            >
                                {features.map((feature, index) => (
                                    <SwiperSlide key={index}>
                                        <motion.img
                                            src={
                                                process.env.PUBLIC_URL +
                                                feature.img
                                            }
                                            alt={feature.alt}
                                            className="img-fluid mx-auto d-block"
                                            style={{
                                                width: "350px",
                                                height: "350px",
                                                objectFit: "contain",
                                            }}
                                            whileHover={{ scale: 1.1 }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whychooseus;