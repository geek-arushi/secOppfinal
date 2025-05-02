import React from "react";
import { NavLink } from "react-router-dom";

const MainMenu = () => {
    return (
        <nav>
            <ul className="main-menu">
                <li>
                    <NavLink
                        className="main-menu-link"
                        activeClassName="active"
                        exact
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="main-menu-link"
                        to={process.env.PUBLIC_URL + "/service"}
                    >
                        Services
                    </NavLink>
                    <ul className="sub-menu">
                        <li>
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/cancer/"}
                            >
                                cancer
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/orthopedics/"}
                            >
                                Orthopedics
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink
                        className="main-menu-link"
                        to={process.env.PUBLIC_URL + "/blog"}
                    >
                        Blog & News
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="main-menu-link"
                        to={process.env.PUBLIC_URL + "/how-it-works"}
                    >
                        How it work
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="main-menu-link"
                        to={process.env.PUBLIC_URL + "/contact"}
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="main-menu-link"
                        to={process.env.PUBLIC_URL + "/faq"}
                    >
                        FAQ
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
