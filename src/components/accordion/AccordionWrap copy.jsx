/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Accordion, {
    AccordionItem,
    AccordionTitle,
    AccordionContent,
} from "../accordion";

const AccordionWrap = () => {
    return (
        <div
            className="accordion-container"
            style={{
                padding: "40px 20px",
                maxWidth: "1200px",
                margin: "0 auto",
            }}
        >
            <Accordion classOption="accordion-style2 no-bg custom-accordion">
                <AccordionItem id="one" defaultOpen>
                    <AccordionTitle
                        id="one"
                        className="custom-title"
                        style={{
                            padding: "20px",
                            fontSize: "18px",
                            fontWeight: "600",
                            color: "#333",
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            marginBottom: "10px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            border: "none",
                            position: "relative",
                        }}
                    >
                        What is Telehealth?
                        <span
                            style={{
                                width: "20px",
                                height: "20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "transform 0.3s ease",
                            }}
                        ></span>
                    </AccordionTitle>
                    <AccordionContent
                        id="one"
                        className="custom-content"
                        style={{
                            padding: "20px",
                            lineHeight: "1.8",
                            color: "#666",
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            marginBottom: "15px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                            marginTop: "-10px",
                        }}
                    >
                        Telehealth is the use of technology, typically
                        smartphones, personal computers, or laptops, that allows
                        patients to be seen by a physician remotely even across
                        the globe. With Telehealth, you can be seen when it is
                        best for you. Telemedicine eliminates travel time and
                        expenses, and allows you to be seen at your convenience,
                        without leaving the comfort of your home.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="two">
                    <AccordionTitle id="two">
                        What are the benefits of seeking a Second Opinion?
                    </AccordionTitle>
                    <AccordionContent id="two">
                        There are many reasons why seeking a second opinion from
                        a specialist US physician could benefit you, including:
                        Confirm Your Diagnosis Before Treatment: If you are
                        concerned by your diagnosis or have questions about your
                        treatment plan, a second opinion could answer many of
                        your questions. Conflicting Diagnosis: Second Opinion
                        can help you figure out the correct diagnosis if you
                        have received different medical opinions. Peace of Mind:
                        Worrying about your health shouldn’t keep you up at
                        night. Having an expert give you a second opinion can
                        put your mind at ease. Clarity about Persistent
                        Symptoms: Your doctor said everything is fine, but
                        symptoms would not go away. A second opinion from a
                        specialist can give you a clear path toward solving your
                        health problems. Discussing other possible options of
                        treatment: More often than not, there are many treatment
                        options available for certain medical conditions and it
                        may take another viewpoint to find the best treatment
                        option for you. Delayed Report & Need Answers Fast: Your
                        issue might be serious, but wait times may be long. A
                        second opinion can get you answers fast, and let you
                        move forward with treatment.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="three">
                    <AccordionTitle id="three">
                        {" "}
                        How are my appointments scheduled?
                    </AccordionTitle>
                    <AccordionContent id="three">
                        Our US-based physicians are available at your
                        fingertips. Our platform allows you to choose the
                        appointment time that works best for you. With Second
                        Opinion, you’re able to meet virtually with an expert
                        and/or get a written report about your medical condition
                        and possible treatment options.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="four">
                    <AccordionTitle id="four">
                        How do I pick my doctor?
                    </AccordionTitle>
                    <AccordionContent id="four">
                        All of our physicians are highly skilled with extensive
                        experience in the United States. Our dedicated care
                        coordinators carefully review your medical information
                        to select the physician best qualified for your specific
                        case.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="five">
                    <AccordionTitle id="five">
                        How long does it take to get an appointment?
                    </AccordionTitle>
                    <AccordionContent id="five">
                        You can book an appointment today, select your times,
                        and our dedicated care coordinators will work with you
                        and your physician to set up an appointment as soon as
                        possible. We have experts in every orthopedic and
                        oncological specialty with different availability to
                        suit your needs.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="six">
                    <AccordionTitle id="six">
                        Can I connect with SecondOpinion if l am not in the
                        United States?
                    </AccordionTitle>
                    <AccordionContent id="six">
                        Absolutely. Second Opinion is designed for global use to
                        connect patients all across the world with leading US
                        physicians. Thus, wherever you are located will not be a
                        concern to scheduling your Second Opinion appointment
                        today.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="seven">
                    <AccordionTitle id="seven">
                        How much does an appointment cost?
                    </AccordionTitle>
                    <AccordionContent id="seven">
                        Video and Written Consult = 34600 INR Written Consult
                        Only = 25900 INR
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="Eighth">
                    <AccordionTitle id="Eighth">
                        Are all consultations conducted in English?
                    </AccordionTitle>
                    <AccordionContent id="Eighth">
                        Not necessarily. The majority of our physicians are
                        multilingual, speaking English, Hindi, Telugu, Gujarati,
                        and Marathi. We are currently working on matching your
                        most comfortable language to a physician who also speaks
                        that language, but our care coordinator will ensure your
                        communication and experience is flawless.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="nine">
                    <AccordionTitle id="nine">
                        How do I obtain my medical records to upload?
                    </AccordionTitle>
                    <AccordionContent id="nine">
                        We ask you to request your own images and records from
                        your current provider. Often, these documents are
                        delivered on a disk; however, they may also provide them
                        via secure email. Alternatively, you can contact our
                        care coordinators via WhatsApp for assistance in
                        obtaining your medical records and uploading them to the
                        platform. We strongly suggest that you request your
                        medical records prior to scheduling your Second Opinion
                        appointment.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="ten">
                    <AccordionTitle id="ten">
                        How do I upload my medical records onto the
                        SecondOpinion Portal?
                    </AccordionTitle>
                    <AccordionContent id="ten">
                        All uploads are completed via our secure platform and
                        login. Our platform offers step-by-step instructions to
                        completing your medical history and uploading all the
                        necessary documents. Our dedicated care coordinators can
                        assist you through the process upon request including
                        filling out forms and uploading medical records/images.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="eleven">
                    <AccordionTitle id="eleven">
                        How will I know if my records uploaded successfully?
                    </AccordionTitle>
                    <AccordionContent id="eleven">
                        Our care coordinators will be in constant contact with
                        you and can assist you throughout the process from
                        registering to booking your appointment and receiving
                        your consult. Alternatively, your account will send you
                        periodic updates altering you to the status of your
                        consult.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default AccordionWrap;
