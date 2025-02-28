import React, { useState } from "react";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { DatePicker, TimePicker } from "antd";
import { TextField } from "@mui/material";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";

const AddDoctorSchedule = () => {
  const [doctorName, setDoctorName] = useState(null);
  const [department, setDepartment] = useState(null);
  const [availableDays, setAvailableDays] = useState(null);
  const [fromTime, setFromTime] = useState(null);
  const [toTime, setToTime] = useState(null);
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("Active");
  const navigate = useNavigate();

  const doctorNames = [
    { value: "Dr. Madan Gowrye", label: "Dr. Madan Gowrye" },
    { value: "Dr. Manoj Ganesan", label: "Dr. Manoj Ganesan" },
    { value: "Dr. Mohan Gupta", label: "Dr. Mohan Gupta" },
    { value: "Dr. Madan Gopal", label: "Dr. Madan Gopal" },
  ];

  const departments = [
    { value: "Gynocolgy", label: "Gynocolgy" },
    { value: "Urology", label: "Urology" },
    { value: "Dentist", label: "Dentist" },
    { value: "Radiology", label: "Radiology" },
    { value: "Cardiology", label: "Cardiology" },
  ];

  const handleSave = () => {
    console.log("Doctor Schedule Saved", {
      doctorName,
      department,
      availableDays,
      fromTime,
      toTime,
      notes,
      status,
    });
  };

  const handleCancel = () => {
    // Reset fields
    setDoctorName(null);
    setDepartment(null);
    setAvailableDays(null);
    setFromTime(null);
    setToTime(null);
    setNotes("");
    setStatus("Active");

    // Navigate back
    navigate("/doctor/doctor-schedule");
  };

  return (
    <>
      <Header />
      <Sidebar id="doctor-dropmenu" id1="doctor-items" activeClassName="DoctorSchedule" />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Doctor Management</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/doctor/doctor-schedule">Doctor Schedule</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Add Doctor Schedule</li>
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
                          <h4>Add Doctor Schedule</h4>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Doctor Name <span className="login-danger">*</span>
                          </label>
                          <Select
                            value={doctorName}
                            onChange={setDoctorName}
                            options={doctorNames}
                            placeholder="Select Doctor"
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
                            Department <span className="login-danger">*</span>
                          </label>
                          <Select
                            value={department}
                            onChange={setDepartment}
                            options={departments}
                            placeholder="Select Department"
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
                            Available Days <span className="login-danger">*</span>
                          </label>
                          <DatePicker
                            className="form-control"
                            onChange={(date, dateString) => setAvailableDays(dateString)}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            From <span className="login-danger">*</span>
                          </label>
                          <TimePicker
                            className="form-control"
                            format="HH:mm"
                            onChange={(time, timeString) => setFromTime(timeString)}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            To <span className="login-danger">*</span>
                          </label>
                          <TimePicker
                            className="form-control"
                            format="HH:mm"
                            onChange={(time, timeString) => setToTime(timeString)}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-sm-12">
                        <div className="form-group local-forms">
                          <label>
                            Notes <span className="login-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            rows={3}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group select-gender">
                          <label className="gen-label">
                            Status <span className="login-danger">*</span>
                          </label>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                name="status"
                                className="form-check-input"
                                checked={status === "Active"}
                                onChange={() => setStatus("Active")}
                              />
                              Active
                            </label>
                          </div>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                name="status"
                                className="form-check-input"
                                checked={status === "Inactive"}
                                onChange={() => setStatus("Inactive")}
                              />
                              In Active
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 text-end">
                        <button
                          type="button"
                          className="btn btn-primary me-2"
                          onClick={handleSave}
                        >
                          Create Schedule
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

export default AddDoctorSchedule;
