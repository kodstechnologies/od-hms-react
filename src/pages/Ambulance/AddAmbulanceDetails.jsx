/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";

const AddAmbulanceDetails = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [launchYear, setLaunchYear] = useState("");
  const [status, setStatus] = useState("Available");
  const [driverName, setDriverName] = useState("");
  const [driverContact, setDriverContact] = useState("");
  const [driverLicence, setDriverLicence] = useState("");
  const [vehicleType, setVehicleType] = useState("Owned");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  const statusOptions = [
    { value: "Available", label: "Available" },
    { value: "On Call", label: "On Call" },
    { value: "At The Scene", label: "At The Scene" },
    { value: "Transporting Patient", label: "Transporting Patient" },
    { value: "Occupied", label: "Occupied" },
  ];

  const vehicleTypeOptions = [
    { value: "Owned", label: "Owned" },
    { value: "Contractual", label: "Contractual" },
  ];

  const handleSave = () => {
    // Handle save logic here
    console.log("Ambulance Saved", {
      vehicleNumber,
      vehicleModel,
      launchYear,
      status,
      driverName,
      driverContact,
      driverLicence,
      vehicleType,
      note,
    });
  };

  const handleCancel = () => {
    // Reset the form fields
    setVehicleNumber("");
    setVehicleModel("");
    setLaunchYear("");
    setStatus("Available");
    setDriverName("");
    setDriverContact("");
    setDriverLicence("");
    setVehicleType("Owned");
    setNote("");

    // Navigate to ambulance/ambulanceDetails
    navigate("/ambulance/ambulanceDetails");
  };

  return (
    <>
      <Header />
      <Sidebar
        id="ambulance-menu-item"
        id1="ambulance-menu-items"
        activeClassName="AmbulanceDetails"
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
                    <Link to="/ambulance/ambulanceDetails">Ambulance Details</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Add Ambulance Details</li>
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
                          <h4>Add Ambulance Details</h4>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Vehicle Number <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={vehicleNumber}
                            onChange={(e) => setVehicleNumber(e.target.value)}
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
                            Vehicle Model <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={vehicleModel}
                            onChange={(e) => setVehicleModel(e.target.value)}
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
                            Launch Year <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="number"
                            value={launchYear}
                            onChange={(e) => setLaunchYear(e.target.value)}
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
                            Status <span className="login-danger">*</span>
                          </label>
                          <Select
                            value={{ value: status, label: status }}
                            onChange={(selected) => setStatus(selected.value)}
                            options={statusOptions}
                            placeholder="Select Status"
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
                            Driver Name <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={driverName}
                            onChange={(e) => setDriverName(e.target.value)}
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
                            Driver Contact <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={driverContact}
                            onChange={(e) => setDriverContact(e.target.value)}
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
                            Driver Licence <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={driverLicence}
                            onChange={(e) => setDriverLicence(e.target.value)}
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
                            Vehicle Type <span className="login-danger">*</span>
                          </label>
                          <Select
                            value={{ value: vehicleType, label: vehicleType }}
                            onChange={(selected) => setVehicleType(selected.value)}
                            options={vehicleTypeOptions}
                            placeholder="Select Vehicle Type"
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

                      <div className="col-12 col-sm-12">
                        <div className="form-group local-forms">
                          <label>
                            Note <span className="login-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            rows={3}
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
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

export default AddAmbulanceDetails;
