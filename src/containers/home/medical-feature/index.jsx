import SectionTitle from "../../../components/section-title";
import HomeData from "../../../data/home.json";
import MedicalFeature from "../../../components/medical-feature";

const MedicalFeatureContainer = () => {
    return (
        <section className="feature-section bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle
                            subTitle="Expert medical opinions from top-rated US doctors"
                            title="<span>Who are we ?</span>"
                            text="SecOpp is a telemedicine platform that provides real-time medical evaluations from top-notch physicians practicing in the United States. Our platform provides you access to some of the best possible medical opinions while saving you time and money and giving you peace of mind."
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        {HomeData[3].medicalFeature &&
                            HomeData[3].medicalFeature.map((single, key) => {
                                return (
                                    <div key={key} className="col-md-7">
                                        <MedicalFeature
                                            key={key}
                                            data={single}
                                        />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
            <div
                className="thumb"
                data-aos="fade-left"
                data-aos-duration="1500"
            >
                <img
                    src={process.env.PUBLIC_URL + "./img/photos/doctor-01.png"}
                    alt="hope"
                />
            </div>
        </section>
    );
};

export default MedicalFeatureContainer;
