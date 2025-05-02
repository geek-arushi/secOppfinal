import SectionTitle from "../../../components/section-title";
import AppointmentForm from "../../../components/appointment-form";

const AppointmentContainer = () => {
    return (
        <section className="appointment-area bg-gray">
            <div className="appointment-form-style1">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="appointment-form">
                                <SectionTitle
                                    subTitle="We Always Ready Helps you"
                                    title="<span>Contact</span> US"
                                />
                                <AppointmentForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentContainer;
