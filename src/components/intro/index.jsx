import PropTypes from "prop-types";

const Intro = ({ data }) => {
    return (
        <div
            className="intro-section"
            style={{
                backgroundImage: `url(${
                    process.env.PUBLIC_URL + data.backgroundImage
                })`,
            }}
        ></div>
    );
};

Intro.propTypes = {
    data: PropTypes.object,
};

export default Intro;
