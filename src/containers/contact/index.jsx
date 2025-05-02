import React from "react";
import ContactAddress from "../../components/contact-address";
import ContactForm from "../../components/contact-form";
import SectionTitle from "../../components/section-title";
import AppointmentForm from "../../components/appointment-form";

const ContactPageContainer = () => {
    return (
        <section className="appointment-area bg-gray">
            <div className="appointment-form-style1">
                <div className="container mt-10">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="appointment-form">
                                <AppointmentForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPageContainer;
