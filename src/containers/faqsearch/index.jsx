import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filterFAQs = (event) => {
        setSearchTerm(event.target.value);
    };

    const clearSearch = () => {
        setSearchTerm("");
    };

    return (
        <div className="container mt-5">
            <div className="row mb-2">
                <div className="col-md-8 offset-md-2">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search FAQs..."
                            onChange={filterFAQs}
                            value={searchTerm}
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={clearSearch}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
