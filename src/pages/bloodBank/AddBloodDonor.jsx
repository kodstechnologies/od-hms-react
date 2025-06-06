/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { DatePicker } from "antd";
import { TextField } from "@mui/material";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";

const AddBloodDonar = () => {
  const [donorName, setDonorName] = useState("");
  const [dob, setDob] = useState(null);
  const [bloodGroup, setBloodGroup] = useState(null);
  const [gender, setGender] = useState(null);
  const [contactNo, setContactNo] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const bloodGroups = [
    { value: "A+", label: "A+" },
    { value: "B+", label: "B+" },
    { value: "O+", label: "O+" },
    { value: "AB+", label: "AB+" },
    { value: "A-", label: "A-" },
    { value: "B-", label: "B-" },
    { value: "O-", label: "O-" },
    { value: "AB-", label: "AB-" },
  ];

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const handleSave = () => {
    // Handle save logic here
    console.log("Donor Saved", {
      donorName,
      dob,
      bloodGroup,
      gender,
      contactNo,
      fatherName,
      address,
    });
  };

  const handleCancel = () => {
    // Reset the form fields
    setDonorName("");
    setDob(null);
    setBloodGroup(null);
    setGender(null);
    setContactNo("");
    setFatherName("");
    setAddress("");

    // Navigate to blood/bloodDonor
    navigate("/blood/bloodDonor");
  };

  return (
    <>
      <Header />
      <Sidebar
        id="blood-menu-item"
        id1="blood-menu-items"
        activeClassName="BloodDonor"
      />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Blood Bank </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/blood/bloodDonor">BloodDonarDetails </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Add Blood Donor</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}

          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-heading">
                          <h4>Add Blood Donor</h4>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Donor Name <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={donorName}
                            onChange={(e) => setDonorName(e.target.value)}
                            style={{
                              backgroundColor: "#fff", // Ensure white background
                              border: "1px solid #ccc", // Border color
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Date of Birth <span className="login-danger">*</span>
                          </label>
                          <DatePicker
                            className="form-control"
                            onChange={(date, dateString) => setDob(dateString)}
                            style={{
                              backgroundColor: "#fff", // Ensure white background
                              border: "1px solid #ccc", // Border color
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Blood Group <span className="login-danger">*</span>
                          </label>
                          <Select
                            value={bloodGroup}
                            onChange={setBloodGroup}
                            options={bloodGroups}
                            placeholder="Select Blood Group"
                            /* ----- ADDED STYLES BELOW (from AddInventory.jsx) ----- */
                            menuPortalTarget={document.body}
                            components={{
                              IndicatorSeparator: () => null,
                            }}
                            styles={{
                              menuPortal: (base) => ({
                                ...base,
                                zIndex: 9999,
                              }),
                              control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused
                                  ? "none"
                                  : "2px solid rgba(46, 55, 164, 0.1)",
                                boxShadow: state.isFocused
                                  ? "0 0 0 1px #2e37a4"
                                  : "none",
                                "&:hover": {
                                  borderColor: state.isFocused
                                    ? "none"
                                    : "2px solid rgba(46, 55, 164, 0.1)",
                                },
                                borderRadius: "10px",
                                fontSize: "14px",
                                minHeight: "45px",
                              }),
                              dropdownIndicator: (base, state) => ({
                                ...base,
                                transform: state.selectProps.menuIsOpen
                                  ? "rotate(-180deg)"
                                  : "rotate(0)",
                                transition: "250ms",
                                width: "35px",
                                height: "35px",
                              }),
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Gender <span className="login-danger">*</span>
                          </label>
                          <Select
                            value={gender}
                            onChange={setGender}
                            options={genderOptions}
                            placeholder="Select Gender"
                            /* ----- ADDED STYLES BELOW (from AddInventory.jsx) ----- */
                            menuPortalTarget={document.body}
                            components={{
                              IndicatorSeparator: () => null,
                            }}
                            styles={{
                              menuPortal: (base) => ({
                                ...base,
                                zIndex: 9999,
                              }),
                              control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused
                                  ? "none"
                                  : "2px solid rgba(46, 55, 164, 0.1)",
                                boxShadow: state.isFocused
                                  ? "0 0 0 1px #2e37a4"
                                  : "none",
                                "&:hover": {
                                  borderColor: state.isFocused
                                    ? "none"
                                    : "2px solid rgba(46, 55, 164, 0.1)",
                                },
                                borderRadius: "10px",
                                fontSize: "14px",
                                minHeight: "45px",
                              }),
                              dropdownIndicator: (base, state) => ({
                                ...base,
                                transform: state.selectProps.menuIsOpen
                                  ? "rotate(-180deg)"
                                  : "rotate(0)",
                                transition: "250ms",
                                width: "35px",
                                height: "35px",
                              }),
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Contact No <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={contactNo}
                            onChange={(e) => setContactNo(e.target.value)}
                            style={{
                              backgroundColor: "#fff", // Ensure white background
                              border: "1px solid #ccc", // Border color
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Father's Name <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={fatherName}
                            onChange={(e) => setFatherName(e.target.value)}
                            style={{
                              backgroundColor: "#fff", // Ensure white background
                              border: "1px solid #ccc", // Border color
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-sm-12">
                        <div className="form-group local-forms">
                          <label>
                            Address <span className="login-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            rows={3}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            style={{
                              backgroundColor: "#fff", // Ensure white background
                              border: "1px solid #ccc", // Border color
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-12 text-end">
                        <div className="form-group local-forms">
                          <button
                            type="button"
                            className="btn btn-primary me-2"
                            onClick={handleSave}
                          >
                            Save
                          </button>
                          {/* ----- UPDATED Cancel button class ----- */}
                          <button
                            type="button"
                            className="btn btn-primary cancel-form"
                            onClick={handleCancel}
                          >
                            Cancel
                          </button>
                          {/* --------------------------------------- */}
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
  );
};

export default AddBloodDonar;
