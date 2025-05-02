/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Accordion, {
    AccordionItem,
    AccordionTitle,
    AccordionContent,
} from "../accordion";

const AccordionWrapm = () => {
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
                        Worrying about your health shouldn't keep you up at
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
                        How are my appointments scheduled?
                    </AccordionTitle>
                    <AccordionContent id="three">
                        Our US-based physicians are available at your
                        fingertips. Our platform allows you to choose the
                        appointment time that works best for you. With Second
                        Opinion, you're able to meet virtually with an expert
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
            </Accordion>
        </div>
    );
};

export default AccordionWrapm;
