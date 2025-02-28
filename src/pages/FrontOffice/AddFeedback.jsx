import React, { useState } from 'react'
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";


const AddFeedback = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (starValue) => {
        setRating(starValue);
    };

    const handleMouseMove = (event, starValue) => {
        const { left, width } = event.target.getBoundingClientRect();
        const mouseX = event.clientX - left;
        const isHalf = mouseX < width / 2;
        setHover(isHalf ? starValue - 0.5 : starValue);
    };

    const handleMouseLeave = () => {
        setHover(0);
    };
    return (
        <>
            <Header />
            <Sidebar
                id="reception-dropmenu"
                id1="reception-items"
                activeClassName="Feedback"
            />
            <div className="page-wrapper">
                <div className="content">
                    {/* page header */}
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="#">Front Office </Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                        <Link to="/patient-feedback">Patient Feedbak</Link>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                        Add Feedback
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-heading">
                                                    <h4>Feedback Details</h4>
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Patient Name <span className="login-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Doctor Name <span className="login-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-6 col-sm-6">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Ratings <span className="login-danger">*</span>
                                                    </label>
                                                    <div className="form-control" style={{ display: "flex", alignItems: "center" }}>
                                                        {[1, 2, 3, 4, 5].map((star) => {
                                                            const isHalf = (hover || rating) === star - 0.5;
                                                            return (
                                                                <span
                                                                    key={star}
                                                                    onClick={() => handleClick(hover || rating)}
                                                                    onMouseMove={(event) => handleMouseMove(event, star)}
                                                                    onMouseLeave={handleMouseLeave}
                                                                    style={{ cursor: "pointer", marginRight: "5px" }}
                                                                >
                                                                    {isHalf ? (
                                                                        <FaStarHalfAlt size={30} color="#FFD700" />
                                                                    ) : star <= (hover || rating) ? (
                                                                        <FaStar size={30} color="#FFD700" />
                                                                    ) : (
                                                                        <FaRegStar size={30} color="#ccc" />
                                                                    )}
                                                                </span>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-6">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Feedback <span className="login-danger">*</span>
                                                    </label>
                                                    <textarea
                                                        className="form-control"

                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="doctor-submit text-end">
                                                    <Link to='/patient-feedback'>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary submit-form me-2"

                                                        >

                                                            Submit
                                                        </button>
                                                    </Link>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary submit-form me-2"                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddFeedback