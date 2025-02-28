/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { TimePicker } from "antd";
import { TextField } from "@mui/material";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";

const AddNursingCare = () => {
  const navigate = useNavigate();

  const [patientName, setPatientName] = useState(null);
  const [roomNo, setRoomNo] = useState(null);
  const [careType, setCareType] = useState(null);
  const [visitTime, setVisitTime] = useState(null);
  const [notes, setNotes] = useState([""]);

  // Sample Data for Dropdowns
  const patientNames = [
    { value: "Ram Kumar", label: "Ram Kumar" },
    { value: "Raj Kumar", label: "Raj Kumar" },
    { value: "Ravi Kumar", label: "Ravi Kumar" },
  ];

  const roomNumbers = [
    { value: "101", label: "101" },
    { value: "102", label: "102" },
    { value: "103", label: "103" },
  ];

  const careTypes = [
    { value: "Acute Care", label: "Acute Care" },
    { value: "Chronic Care", label: "Chronic Care" },
    { value: "Home Health Care", label: "Home Health Care" },
  ];

  const handleSave = () => {
    // Handle save logic here
    console.log("Nursing Care Saved", {
      patientName,
      roomNo,
      careType,
      visitTime,
      notes,
    });
  };

  const handleCancel = () => {
    // Reset the form fields
    setPatientName(null);
    setRoomNo(null);
    setCareType(null);
    setVisitTime(null);
    setNotes([""]);

    // Navigate to nursing-care page
    navigate("/admin/nursing");
  };

  const handleAddNote = () => {
    setNotes([...notes, ""]);
  };

  const handleNoteChange = (e, index) => {
    const newNotes = [...notes];
    newNotes[index] = e.target.value;
    setNotes(newNotes);
  };

  return (
    <>
      <Header />
      <Sidebar id="menu-item" id1="menu-items" activeClassName="Nursing" />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Nursing Management</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/admin/nursing">Nursing Care</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Add Nursing Care</li>
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
                          <h4>Add Nursing Care</h4>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Patient Name <span className="login-danger">*</span>
                          </label>
                          <Select
                            value={patientName}
                            onChange={setPatientName}
                            options={patientNames}
                            placeholder="Select Patient Name"
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
                            Room No <span className="login-danger">*</span>
                          </label>
                          <Select
                            value={roomNo}
                            onChange={setRoomNo}
                            options={roomNumbers}
                            placeholder="Select Room Number"
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
                            Care Type <span className="login-danger">*</span>
                          </label>
                          <Select
                            value={careType}
                            onChange={setCareType}
                            options={careTypes}
                            placeholder="Select Care Type"
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
                            Visit Time <span className="login-danger">*</span>
                          </label>
                          <TimePicker
                            value={visitTime}
                            onChange={setVisitTime}
                            format="HH:mm"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group local-forms">
                          <label>
                            Notes <span className="login-danger">*</span>
                          </label>
                          {notes.map((note, index) => (
                            <div key={index} className="d-flex mb-2">
                              <TextField
                                value={note}
                                onChange={(e) => handleNoteChange(e, index)}
                                placeholder="Enter Note"
                                fullWidth
                                style={{
                                  marginRight: "10px",
                                }}
                              />
                              {notes.length - 1 === index && (
                                <button
                                  type="button"
                                  onClick={handleAddNote}
                                  className="btn btn-primary"
                                  style={{ height: "100%" }}
                                >
                                  Add Note
                                </button>
                              )}
                            </div>
                          ))}
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

export default AddNursingCare;
