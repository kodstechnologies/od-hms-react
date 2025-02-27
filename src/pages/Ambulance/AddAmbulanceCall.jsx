/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";

const AddAmbulanceCall = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [patientCondition, setPatientCondition] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [nearestLandmark, setNearestLandmark] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const navigate = useNavigate();

  const patientConditions = [
    { value: "Accident", label: "Accident" },
    { value: "Heart Attack", label: "Heart Attack" },
    { value: "Stroke", label: "Stroke" },
    { value: "Breathing Issues", label: "Breathing Issues" },
    { value: "Other", label: "Other" },
  ];

  const handleSave = () => {
    // Handle save logic here
    console.log("Ambulance Call Saved", {
      fullName,
      phoneNumber,
      patientCondition,
      pickupLocation,
      nearestLandmark,
      additionalNotes,
      emergencyContact,
    });
  };

  const handleCancel = () => {
    // Reset the form fields
    setFullName("");
    setPhoneNumber("");
    setPatientCondition("");
    setPickupLocation("");
    setNearestLandmark("");
    setAdditionalNotes("");
    setEmergencyContact("");

    // Navigate to ambulance/ambulanceCalls
    navigate("/Ambulance/AmbulanceCall");
  };

  return (
    <>
      <Header />
      <Sidebar
        id="ambulance-menu-item"
        id1="ambulance-menu-items"
        activeClassName="AmbulanceCall"
      />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Ambulance Management</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/Ambulance/AmbulanceCall">Ambulance Calls</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Add Ambulance Call</li>
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
                          <h4>Add Ambulance Call</h4>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Full Name <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
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
                            Phone Number <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
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
                            Patient's Condition <span className="login-danger">*</span>
                          </label>
                          <Select
                            value={patientCondition}
                            onChange={setPatientCondition}
                            options={patientConditions}
                            placeholder="Select Patient's Condition"
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
                            Pickup Location <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={pickupLocation}
                            onChange={(e) => setPickupLocation(e.target.value)}
                            placeholder="Enter Pickup Location"
                            style={{
                              backgroundColor: "#fff", // Ensure white background
                              border: "1px solid #ccc", // Border color
                            }}
                          />
                          {/* Optional GPS button */}
                          <button
                            type="button"
                            className="btn btn-info mt-2"
                            onClick={() => alert("Use GPS to set location")}
                          >
                            Use GPS
                          </button>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>Nearest Landmark</label>
                          <input
                            className="form-control"
                            type="text"
                            value={nearestLandmark}
                            onChange={(e) => setNearestLandmark(e.target.value)}
                            placeholder="Enter Nearest Landmark"
                            style={{
                              backgroundColor: "#fff", // Ensure white background
                              border: "1px solid #ccc", // Border color
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-sm-12">
                        <div className="form-group local-forms">
                          <label>Additional Notes</label>
                          <textarea
                            className="form-control"
                            rows={3}
                            value={additionalNotes}
                            onChange={(e) => setAdditionalNotes(e.target.value)}
                            placeholder="Enter any additional notes"
                            style={{
                              backgroundColor: "#fff", // Ensure white background
                              border: "1px solid #ccc", // Border color
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>Emergency Contact (Alternate Number)</label>
                          <input
                            className="form-control"
                            type="text"
                            value={emergencyContact}
                            onChange={(e) => setEmergencyContact(e.target.value)}
                            placeholder="Enter Emergency Contact Number"
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
                          <button
                            type="button"
                            className="btn btn-primary cancel-form"
                            onClick={handleCancel}
                          >
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
  );
};

export default AddAmbulanceCall;
