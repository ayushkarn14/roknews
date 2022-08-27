import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img
                            src={logo}
                            alt=""
                            width="30"
                            height="25"
                            className="d-inline-block align-text-top"
                        />
                        &ensp;<span className="title">RokNews</span>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mr-auto" id="myDiv">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <span className="navmenus">All</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/india">
                                    <span className="navmenus">India</span>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/business">
                                    <span className="navmenus">Business</span>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/sports">
                                    <span className="navmenus">Sports</span>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/world">
                                    <span className="navmenus">World</span>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/politics">
                                    <span className="navmenus">Politics</span>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/tech">
                                    <span className="navmenus">Tech</span>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/startup">
                                    <span className="navmenus">Startup</span>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/science">
                                    <span className="navmenus">Science</span>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/automobile">
                                    <span className="navmenus">Automobile</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
