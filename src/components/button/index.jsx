import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

const Button = ({ classOption, text, path }) => {
    return (
        <a
            href={path}
            className={classOption}
            target="_blank"
            rel="noopener noreferrer"
        >
            {text}
        </a>
    );
};
Button.propTypes = {
    classOption: PropTypes.string,
    text: PropTypes.string,
    path: PropTypes.string,
};
Button.defaultProps = {
    classOption: "btn",
};

export default Button;
