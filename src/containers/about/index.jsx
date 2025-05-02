import React from "react";
import AboutData from "../../data/about.json";
import ServiceData from "../../data/service.json";
import { LightgalleryItem, LightgalleryProvider } from "react-lightgallery";
import { Link } from "react-router-dom";
import { flatDeep, slugify, containsObject } from "../../utils";
import AboutAddress from "../../components/about-address";

const AboutContainer = () => {
    const cats = ServiceData.map((item) => {
        return item.categories;
    });
    let singleCatArray = flatDeep(cats);
    let categories = [];
    singleCatArray.forEach((cat) => {
        const obj = {
            title: cat.trim(),
            slug: slugify(cat),
            count: 1,
        };
        const objIndex = containsObject(obj, categories);
        if (objIndex !== -1) {
            const prevCount = categories[objIndex].count;
            categories[objIndex] = {
                title: cat.trim(),
                slug: slugify(cat),
                count: prevCount + 1,
            };
        } else {
            categories.push(obj);
        }
    });
    return (
        <div className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="text" data-aos="fade-up">
                            {AboutData[0].pageTitle}
                        </h2>
                        <h6 className="title">{AboutData[1].title}</h6>
                        {AboutData[1].excerpt.map((single, i) => {
                            return (
                                <div
                                    key={i}
                                    className="desc"
                                    dangerouslySetInnerHTML={{
                                        __html: single,
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContainer;
