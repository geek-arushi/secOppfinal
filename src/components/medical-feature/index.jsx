import PropTypes from "prop-types";

const MedicalFeature = ({ data }) => {
    return (
        <div className="content">
            <h6 className="subtitle">{data.title}</h6>
            <p>{data.content}</p>
        </div>
    );
};

MedicalFeature.propTypes = {
    data: PropTypes.object,
};

export default MedicalFeature;
