import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Howitworkp = () => (
    <div className="container py-5 text-black align-content-center">
        <p className="lead mb-4">
            The following steps will guide you in completing your SECOPP case
            creation by providing all your relevant medical information and
            details. If you have any questions at any time, please text our
            dedicated care coordinators via WhatsApp at
            <a className="text-primary" href="tel:9510104052">
                {" "}
                9510104052
            </a>{" "}
            or email us at
            <a className="text-primary" href="mailto:admin@secopp.com">
                {" "}
                admin@secopp.com
            </a>
            .
        </p>

        {/** Section 1 **/}
        <div className="mb-5 p-4 bg-light rounded text-black">
            <h2 className="h4 font-weight-bold">Create an Account</h2>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <ul className="text-black">
                        <li>
                            In this step, you will{" "}
                            <strong>create an account</strong>. Your{" "}
                            <strong>email address and password</strong> will be
                            used to log in and access your files and second
                            opinion cases. You will not be able to access{" "}
                            <strong>SecOpp</strong> services{" "}
                            <strong>without creating an account</strong>.
                        </li>
                        <li>
                            When creating an account, please enter the relevant
                            information as requested. Ensure that your{" "}
                            <strong>
                                email and cell number are valid in case
                            </strong>{" "}
                            our care coordinators need to contact you and to{" "}
                            <strong>receive an OTP</strong> for email
                            verification.
                        </li>
                        <li>
                            <strong>Create a password</strong> and save it for
                            future reference. You will need your email and
                            password to log back into your account.
                        </li>
                        <li>
                            Please make sure to check the{" "}
                            <strong>Terms of Use</strong> and the{" "}
                            <strong>Privacy Policy boxes</strong>, or you will
                            not be able to proceed with creating your case.
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 text-center">
                    <img
                        src={process.env.PUBLIC_URL + "/img/photos/1.png"}
                        alt="A woman creating an account on her laptop"
                        className="img-fluid rounded shadow-sm w-100"
                    />
                </div>
            </div>
        </div>

        {/** Section 2 **/}
        <div className="mb-5 p-4 bg-light rounded text-black">
            <h2 className="h4 font-weight-bold text-right">
                Start Your Second Opinion Case
            </h2>
            <div className="row align-items-center">
                <div className="col-md-6 text-center">
                    <img
                        src={process.env.PUBLIC_URL + "/img/photos/2.png"}
                        alt="A person uploading documents to a cloud service"
                        className="img-fluid rounded shadow-sm w-100"
                    />
                </div>
                <div className="col-md-6 text-right">
                    <ul className="text-black list-unstyled">
                        <li>
                            In this step, you will open a new case on the
                            platform and begin to fill out the patient intake
                            form. You will provide information about your{" "}
                            <strong>
                                current medical condition, upload your medical
                                documents, and make your payment
                            </strong>
                            .
                        </li>
                        <li>
                            Tell us how you&apos;d like to receive your{" "}
                            <strong>second opinion</strong>. We offer written
                            reports for all services. We also offer{" "}
                            <strong>20-30 minute video consultations</strong>.
                        </li>
                        <li>
                            Upload your <strong>medical documents</strong>.
                            These will include your physician summaries, prior
                            diagnoses, lab results, previous imaging reports,
                            and any other documentation that{" "}
                            <strong>
                                describes your current medical condition
                            </strong>
                            . All documents should be uploaded to their
                            respective sections in your portal.
                        </li>
                        <li>
                            <strong>
                                Upload scans from your computer, external CD, or
                                USB drive directly to our portal
                            </strong>
                            . If you have any difficulty uploading, you can
                            contact our care coordinator, and he/she will help
                            you with the next steps.
                        </li>
                        <li>
                            Should you encounter any difficulties uploading your
                            scans or completing your intake form, please contact
                            our care coordinators via WhatsApp for assistance at
                            any time.
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/** Section 3 **/}
        <div className="p-4 bg-light rounded text-black">
            <h2 className="h4 font-weight-bold">Get Your Second Opinion</h2>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <ul className="text-black">
                        <li>
                            Once all of your information is received, you will
                            be assigned to one of our dedicated doctors and
                            he/she will review your case. If any additional
                            information is needed, we will contact you.
                        </li>
                        <li>
                            <strong>Video Consultation:</strong> If you have
                            selected to get a video consultation, our care
                            coordinator will contact you to schedule it. After
                            your consultation, a written report will be
                            provided.
                        </li>
                        <li>
                            <strong>Written Consultation:</strong> If you have
                            selected a written consultation only- a written
                            report along with your diagnosis and recommended
                            treatment plan, will be provided.
                        </li>
                        <li>
                            We will make every effort to deliver the second
                            opinion service as promptly as possible.
                        </li>
                        <li>
                            Your second opinion report will be{" "}
                            <strong>available for download</strong> from your
                            portal.
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 text-center">
                    <img
                        src={process.env.PUBLIC_URL + "/img/photos/3.png"}
                        alt="A doctor reviewing medical documents on a laptop"
                        className="img-fluid rounded shadow-sm w-100"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Howitworkp;