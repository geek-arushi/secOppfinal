import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const data = {
    title: "Bladder Cancer",
    sections: [
        {
            heading: "Definition",
            content:
                "Bladder cancer is a common type of cancer that begins in the cells of the bladder. The bladder is a hollow muscular organ in your lower abdomen that stores urine.",
        },
        {
            heading: "Symptoms",
            content: [
                "Blood in urine (hematuria)",
                "Frequent urination",
                "Painful urination",
                "Back pain",
                "Pelvic pain",
            ],
        },
        {
            heading: "Causes",
            content:
                "Bladder cancer is linked to smoking, a parasitic infection, radiation, and chemical exposure.",
        },
        {
            heading: "Types",
            content: [
                "Transitional cell carcinoma",
                "Squamous cell carcinoma",
                "Adenocarcinoma",
            ],
        },
        {
            heading: "Stages",
            content: [
                "Stage I: Cancer is in the bladder's inner lining but hasn't invaded the muscular bladder wall.",
                "Stage II: Cancer has invaded the muscular bladder wall but is still confined to the bladder.",
                "Stage III: Cancer cells have spread through the bladder wall to surrounding tissue.",
                "Stage IV: Cancer has spread to lymph nodes and other organs.",
            ],
        },
        {
            heading: "Prevention and Risk Factors",
            content:
                "You can reduce your risk of bladder cancer by not smoking, avoiding exposure to industrial chemicals, and drinking plenty of fluids.",
        },
        {
            heading: "Diagnosis",
            content: [
                "Cystoscopy",
                "Biopsy",
                "Urine cytology",
                "Imaging tests",
            ],
        },
        {
            heading: "Treatment",
            content: [
                "Surgery",
                "Chemotherapy",
                "Radiation therapy",
                "Immunotherapy",
            ],
        },
        {
            heading: "Prognosis",
            content:
                "The prognosis for bladder cancer depends on the stage and grade of the cancer, as well as the patient's overall health.",
        },
        {
            heading: "Images",
            content: [
                {
                    src: "https://storage.googleapis.com/a1aa/image/s5dDFgKA43IXJ8r7xFNtVOe-Evz4EZKoCxztcSQJxsE.jpg",
                    alt: "Bladder cancer stages illustration",
                },
                {
                    src: "https://storage.googleapis.com/a1aa/image/1TJOKMb5qyHaawhqmlQ0mPG5Musn09Baf5zFN_UAA74.jpg",
                    alt: "Bladder cancer treatment illustration",
                },
            ],
        },
    ],
};

const Blogdetail2 = () => {
    return (
        <div className="bg-light min-vh-100 p-4">
            <div className="container bg-white p-4 shadow-sm">
                <div className="text-left">
                    <img
                        src="https://storage.googleapis.com/a1aa/image/AKEqnjSHdBUvxrDu2KIKCgvSOMUk_iyDW35Xa1BMyAQ.jpg"
                        alt="Bladder Cancer illustration"
                        className="d-block mx-auto"
                        width="100"
                        height="100"
                    />
                    <h1 className="display-4 mt-4">{data.title}</h1>
                </div>
                {data.sections.map((section, index) => (
                    <div key={index} className="mt-4 text-left">
                        <h2 className="h4">{section.heading}</h2>
                        {Array.isArray(section.content) ? (
                            <ul className="list-unstyled mt-2">
                                {section.content.map((item, idx) => (
                                    <li key={idx} className="mb-1">
                                        {typeof item === "string" ? (
                                            item
                                        ) : (
                                            <img
                                                src={item.src}
                                                alt={item.alt}
                                                className="img-fluid mx-2 mb-4"
                                                width="200"
                                                height="200"
                                            />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="mt-2">{section.content}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogdetail2;

