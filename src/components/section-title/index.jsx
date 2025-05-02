import PropTypes from "prop-types";

const SectionTitle = ({ subTitle, title, classOption, text }) => {
    return (
        <div className={`section-title ${classOption}`} data-aos="fade-up">
            <h6>{subTitle}</h6>
            <h2
                className="title"
                dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
            <p>{text}</p>
        </div>
    );
};

SectionTitle.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    classOption: PropTypes.string,
    text: PropTypes.string,
};

SectionTitle.defaultProps = {
    classOption: "section-title",
};

export default SectionTitle;
