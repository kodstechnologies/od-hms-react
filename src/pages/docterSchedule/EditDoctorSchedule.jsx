/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { DatePicker, TimePicker } from "antd";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";
import dayjs from 'dayjs';

const EditDoctorSchedule = () => {
  const [doctorName, setDoctorName] = useState("Dr. Madan Gowrye");
  const [department, setDepartment] = useState("Cardiology");
  const [availableDays, setAvailableDays] = useState(dayjs("2023-12-25")); // Initialize as dayjs
  const [fromTime, setFromTime] = useState(dayjs("09:00", "HH:mm")); // Initialize as dayjs
  const [toTime, setToTime] = useState(dayjs("12:00", "HH:mm")); // Initialize as dayjs
  const [notes, setNotes] = useState("Regular check-ups on Monday and Wednesday.");
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

  const doctorOptions = [
    { value: "Shekar", label: "Shekar" },
    { value: "Shivakumar", label: "Shivakumar" },
    { value: "Shankar", label: "Shankar" },
  ];

  const handleSave = () => {
    console.log("Doctor Schedule Updated", {
      doctorName,
      department,
      availableDays: availableDays.format("YYYY-MM-DD"), // Format as string if needed
      fromTime: fromTime.format("HH:mm"), // Format time correctly
      toTime: toTime.format("HH:mm"), // Format time correctly
      notes,
      status,
    });
  };

  const handleCancel = () => {
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
                  <li className="breadcrumb-item active">Edit Doctor Schedule</li>
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
                      {/* Section 1: Doctor Information */}
                      <div className="col-12">
                        <h4>Edit Doctor Schedule</h4>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <label>Doctor Name <span className="login-danger">*</span></label>
                        <Select
                          value={doctorName}
                          onChange={setDoctorName}
                          options={doctorNames}
                          placeholder="Select Doctor"
                        />
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <label>Department <span className="login-danger">*</span></label>
                        <Select
                          value={department}
                          onChange={setDepartment}
                          options={departments}
                          placeholder="Select Department"
                        />
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <label>Available Days <span className="login-danger">*</span></label>
                        <DatePicker
                          className="form-control"
                          value={availableDays}
                          onChange={(date) => setAvailableDays(date)}
                        />
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <label>From <span className="login-danger">*</span></label>
                        <TimePicker
                          className="form-control"
                          format="HH:mm"
                          value={fromTime}
                          onChange={(time) => setFromTime(time)}
                        />
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <label>To <span className="login-danger">*</span></label>
                        <TimePicker
                          className="form-control"
                          format="HH:mm"
                          value={toTime}
                          onChange={(time) => setToTime(time)}
                        />
                      </div>

                      <div className="col-12 col-sm-12">
                        <label>Notes <span className="login-danger">*</span></label>
                        <textarea
                          className="form-control"
                          rows={3}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                        />
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <label>Status <span className="login-danger">*</span></label>
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

                      <div className="col-12 text-end">
                        <button
                          type="button"
                          className="btn btn-primary me-2"
                          onClick={handleSave}
                        >
                          Save Changes
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
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

export default EditDoctorSchedule;
