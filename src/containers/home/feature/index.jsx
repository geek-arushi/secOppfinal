import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Counter = () => {
    useEffect(() => {
        animateValue("count1", 0, 40, 2000);
        animateValue("count2", 0, 20, 2000);
        animateValue("count3", 0, 30, 2000);
    }, []);

    const animateValue = (id, start, end, duration) => {
        let obj = document.getElementById(id);
        if (!obj) return;

        let range = end - start;
        let minTimer = 50;
        let stepTime = Math.max(Math.floor(duration / range), minTimer);
        let startTime = new Date().getTime();
        let endTime = startTime + duration;
        let timer;

        const run = () => {
            let now = new Date().getTime();
            let remaining = Math.max((endTime - now) / duration, 0);
            let value = Math.round(end - remaining * range);
            obj.innerHTML = value + "+";
            if (value === end) {
                clearInterval(timer);
            }
        };

        obj.classList.add("fade-in");
        timer = setInterval(run, stepTime);
        run();
    };

    return (
        <div className="container py-4">
            <div className="row justify-content-center text-center">
                <div className="col-12 col-sm-6 col-md-4 counter-box">
                    <p className="count" id="count1">
                        0+
                    </p>
                    <p className="counter-label">US Physician</p>
                    <hr />
                </div>
                <div className="col-12 col-sm-6 col-md-4 counter-box">
                    <p className="count" id="count2">
                        0+
                    </p>
                    <p className="counter-label">Average Years of Experience</p>
                    <hr />
                </div>
                <div className="col-12 col-sm-6 col-md-4 counter-box">
                    <p className="count" id="count3">
                        0+
                    </p>
                    <p className="counter-label">Subspecialities</p>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Counter;
