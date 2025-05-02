import PropTypes from "prop-types";

const Testimonial = ({ data }) => {
    return (
        <div className="testimonial-item">
            <div className="thumb"></div>
            <div className="client-content">
                <p dangerouslySetInnerHTML={{ __html: data.excerpt }}></p>
            </div>
            <div className="client-info">
                <div className="desc">
                    <h4 className="name">{data.name}</h4>
                    <p className="client-location">{data.location}</p>
                </div>
            </div>
        </div>
    );
};

Testimonial.propTypes = {
    data: PropTypes.object,
};

export default Testimonial;
