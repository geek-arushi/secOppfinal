import React from "react";

const Marquee = () => {
    const logos1 = Array.from({ length: 12 }, (_, i) => (
        <img
            key={i}
            src={`${process.env.PUBLIC_URL}/img/photos/L${i * 2 + 1}.png`}
            alt={`Logo ${i * 2 + 1}`}
            className="marquee-logo"
        />
    ));

    const logos2 = Array.from({ length: 12 }, (_, i) => (
        <img
            key={i}
            src={`${process.env.PUBLIC_URL}/img/photos/L${i * 2 + 2}.png`}
            alt={`Logo ${i * 2 + 2}`}
            className="marquee-logo"
        />
    ));

    return (
        <div
            className="marquee-container"
            style={{ backgroundColor: "#00213e", color: "white" }}
        >
            <h5
                className="marquee-heading"
                style={{ color: "white", textAlign: "center", padding: "10px" }}
            >
                OUR PHYSICIANS HAVE RECEIVED TRAINING OR ARE CURRENTLY
                PRACTICING AT THE FOLLOWING INSTITUTIONS.
            </h5>
            <div className="marquee-wrapper">
                <div className="marquee-content">
                    <div className="marquee-line strip-1">
                        {[...logos1, ...logos1]}{" "}
                        {/* Duplicate for seamless scrolling */}
                    </div>
                    <div className="marquee-line strip-2 reverse">
                        {[...logos2, ...logos2]}{" "}
                        {/* Duplicate for seamless scrolling */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marquee;
