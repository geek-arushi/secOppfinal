import { useForm } from "react-hook-form";
import React, { Fragment, useState } from "react";

const AppointmentForm = () => {
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur",
    });
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbxlCaV6tCZ-uNEqUp04P_SBRtNgJMezHjgs7x82SbFp2a1duS4ox9i3RdtcTYDjUQEp/exec",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await response.json();
            console.log(result);
            alert("Form submitted successfully!");
        } catch (error) {
            console.error("Error:", error);
            alert("There was an error submitting the form. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)} method="POST">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder="Enter your name..."
                                ref={register({ required: "Name is required" })}
                            />
                            {errors.name && (
                                <p className="error">{errors.name.message}</p>
                            )}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="demo@yourmail.com"
                                ref={register({
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                            />
                            {errors.email && (
                                <p className="error">{errors.email.message}</p>
                            )}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                ref={register({
                                    required: "Phone is required",
                                })}
                            />
                            {errors.phone && (
                                <p className="error">{errors.phone.message}</p>
                            )}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group datepicker-group">
                            <label
                                htmlFor="datepicker"
                                className="form-label icon icofont-calendar"
                            >
                                <input
                                    className="form-control"
                                    id="datepicker"
                                    type="date"
                                    name="date"
                                    ref={register({
                                        required: "Date is required",
                                    })}
                                />
                            </label>
                            {errors.date && (
                                <p className="error">{errors.date.message}</p>
                            )}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group mb-0">
                            <textarea
                                name="message"
                                rows="7"
                                placeholder="Your message here..."
                                ref={register({
                                    required: "Message is required",
                                })}
                            ></textarea>
                            {errors.message && (
                                <p className="error">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group mb-0">
                            <button
                                className="btn btn-theme"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "Contact US"}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

export default AppointmentForm;
