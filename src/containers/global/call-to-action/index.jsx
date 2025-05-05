import React, { useState } from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
    const handleSignUpClick = () => {
        window.open(
            "https://app.secopp.com/login/",
            "_blank",
            "noopener,noreferrer"
        );
    };

    // CSS styles defined within the component
    const styles = {
        dividerArea: {
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/shape/01.jpg)`,
            padding: "50px 0",
        },
        contentArea: {
            padding: "50px 30px",
            textAlign: "left",
        },
        contentInner: {
            marginBottom: "30px",
        },
        heading: {
            fontSize: "45px",
            marginBottom: "15px",
            textAlign: "left",
        },
        headingSpan: {
            fontWeight: "bold",
        },
        paragraph: {
            fontSize: "18px",
            margin: "0",
            textAlign: "left",
        },
        buttonContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: "20px",
            flexWrap: "nowrap",
        },
        button: {
            padding: "4px 30px",
            fontSize: "14px",
            fontWeight: "800",
            borderRadius: "5px",
            transition: "all 0.3s ease",
            margin: "5px",
            cursor: "pointer",
            minWidth: "180px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    };

    // Custom hover styles using useState
    const [signUpHovered, setSignUpHovered] = useState(false);
    const [contactHovered, setContactHovered] = useState(false);

    const buttonHoverStyle = {
        backgroundColor: "#ff8c00",
        color: "white",
        transform: "translateY(-3px)",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    };

    // Mobile styles
    const mobileStyles =
        window.innerWidth <= 576
            ? {
                  buttonContainer: {
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                  },
                  button: {
                      padding: "12px 25px",
                      fontSize: "14px",
                      width: "100%",
                      maxWidth: "200px",
                      margin: "5px auto",
                  },
                  heading: {
                      fontSize: "24px",
                  },
                  paragraph: {
                      fontSize: "14px",
                  },
              }
            : {};

    return (
        <div
            className="divider-area bgcolor-theme bg-img"
            style={styles.dividerArea}
        >
            <div className="container">
                <div className="row content-align-center">
                    <div className="col-lg-12">
                        <div
                            className="divider-content-area divider-content-style1"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            style={styles.contentArea}
                        >
                            <div
                                className="content-inner"
                                style={styles.contentInner}
                            >
                                <h2
                                    style={{
                                        ...styles.heading,
                                        ...mobileStyles.heading,
                                    }}
                                >
                                    Ready to{" "}
                                    <span style={styles.headingSpan}>
                                        Get Started?
                                    </span>
                                </h2>
                                <p
                                    style={{
                                        ...styles.paragraph,
                                        ...mobileStyles.paragraph,
                                    }}
                                >
                                    Connect with US experts now and receive the
                                    best medical opinions for your condition.
                                </p>
                            </div>
                            <div
                                style={{
                                    ...styles.buttonContainer,
                                    ...mobileStyles.buttonContainer,
                                }}
                            >
                                <button
                                    className="btn btn-theme btn-white custom-btn"
                                    onClick={handleSignUpClick}
                                    style={{
                                        ...styles.button,
                                        ...mobileStyles.button,
                                        ...(signUpHovered
                                            ? buttonHoverStyle
                                            : {}),
                                    }}
                                    onMouseEnter={() => setSignUpHovered(true)}
                                    onMouseLeave={() => setSignUpHovered(false)}
                                >
                                    Sign Up Today
                                </button>
                                <Link
                                    to="contact/"
                                    className="btn btn-theme btn-white custom-btn"
                                    style={{
                                        ...styles.button,
                                        ...mobileStyles.button,
                                        ...(contactHovered
                                            ? buttonHoverStyle
                                            : {}),
                                    }}
                                    onMouseEnter={() => setContactHovered(true)}
                                    onMouseLeave={() =>
                                        setContactHovered(false)
                                    }
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
