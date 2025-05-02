import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Whoweare = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.log("Autoplay prevented: ", error);
            });
        }
    }, []);

    return (
        <div className="container-fluid section-large px-5 py-5">
            <div className="row align-items-center">
                {/* Text Section First */}
                <div className="col-lg-6 text-start">
                    <p className="text-muted font-weight-bold fade-in mb-3">
                        Expert medical opinions from top-rated US doctors
                    </p>
                    <h1 className="display-3 stylish-heading fade-in fw-bold mb-4">
                        Who Are We?
                    </h1>
                    <p className="text-muted fade-in mb-4">
                        SECOPP is a telemedicine platform that provides
                        real-time medical evaluations from top-notch physicians
                        practicing in the United States. Our platform gives you
                        access to some of the best possible medical opinions
                        while saving you time, money, and giving you peace of
                        mind.
                    </p>
                    <p className="text-dark fade-in mb-4">
                        We are focused on providing a seamless experience. Our
                        platform offers:
                    </p>
                    <ul className="list-unstyled text-dark fade-in">
                        <li className="mb-3">• Dedicated Care Coordinators</li>
                        <li className="mb-3">
                            • Secure portal to upload your medical records
                        </li>
                        <li className="mb-3">
                            • Video consultation with a US-based physician
                        </li>
                        <li className="mb-3">
                            • A complete written and verbal treatment plan
                        </li>
                        <li className="mb-3">
                            • Recommendations and resources to improve your
                            health outcome
                        </li>
                    </ul>
                </div>

                {/* Video Section Second */}
                <div className="col-lg-6 text-start">
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        className="w-100 shadow-lg rounded video-large"
                    >
                        <source
                            src={
                                process.env.PUBLIC_URL +
                                "/img/photos/Secopp (Video 01(.mp4"
                            }
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Whoweare;
