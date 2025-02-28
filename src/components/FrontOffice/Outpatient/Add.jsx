import { DatePicker } from "antd";
import Select from "react-select";
import React, { useState } from "react";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";

const AddOPD = () => {
  const [time, setTime] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [timeSlots, setTimeSlots] = useState([
    { value: 1, label: "10 Minute" },
    { value: 2, label: "20 Minute" },
    { value: 3, label: "40 Minute" },
    { value: 4, label: "1 Hour" },
  ]);

  const [patients, setPatients] = useState([
    { value: 1, label: "(HC730) GH KL, 7648379867 (23Y 1D), GH@gmail.com" },
    {
      value: 2,
      label: "(HC726) PRIYA KL, 7648379855 (35Y 1D), priya@gmail.com",
    },
  ]);
  const [doctor, setTitle] = useState([
    { value: 2, label: "Dr. Yogesh Balar(ENT)" },
    { value: 3, label: "Dr. Suryajit Panda(NEUROLOGY)." },
  ]);

  const onChange = (date, dateString) => {
    // console.log(date, dateString);
    setIsClicked(true);
  };
  return (
    <>
      <Header />
      <Sidebar
        id="frontoffice"
        id1="frontoffices"
        activeClassName="outpatient"
      />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/outpatient">outpatient </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Add OPD</li>
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
                          <h4>Add walk-In appointment</h4>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>Doctor</label>
                          <Select
                            defaultValue={selectedDoctor}
                            onChange={setSelectedDoctor}
                            options={doctor}
                            menuPortalTarget={document.body}
                            styles={{
                              menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                            }}
                            id="search-commodity"
                            components={{
                              IndicatorSeparator: () => null,
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms cal-icon">
                          <label>
                            Schedule
                            <span className="login-danger">*</span>
                          </label>
                          <DatePicker
                            className="form-control datetimepicker"
                            onChange={onChange}
                            suffixIcon={null}
                            style={{
                              control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: isClicked
                                  ? "#2E37A4"
                                  : "2px solid rgba(46, 55, 164, 0.1)",
                                "&:hover": {
                                  borderColor: state.isFocused
                                    ? "none"
                                    : "none",
                                },
                              }),
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Time <span className="login-danger">*</span>
                          </label>
                          <div className="">
                            <TextField
                              className="form-control"
                              id="outlined-controlled"
                              type="time"
                              value={time}
                              onChange={(event) => {
                                setTime(event.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-10">
                        <div className="form-group local-forms">
                          <label>Select Patient</label>
                          <Select
                            defaultValue={selectedPatient}
                            onChange={setSelectedPatient}
                            options={patients}
                            menuPortalTarget={document.body}
                            styles={{
                              menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                            }}
                            id="search-commodity"
                            components={{
                              IndicatorSeparator: () => null,
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-2">
                        <Link to="/add-patient" className="btn btn-primary">
                          <i className="fa fa-plus" /> Add Patient
                        </Link>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>Select Time Slot</label>
                          <Select
                            defaultValue={selectedTimeSlot}
                            onChange={setSelectedTimeSlot}
                            options={timeSlots}
                            menuPortalTarget={document.body}
                            styles={{
                              menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                            }}
                            id="search-commodity"
                            components={{
                              IndicatorSeparator: () => null,
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group select-gender">
                          <label className="gen-label">
                            Status<span className="login-danger">*</span>
                          </label>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                name="status"
                                className="form-check-input"
                              />
                              Waiting
                            </label>
                          </div>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                name="status"
                                className="form-check-input"
                              />
                              Pending
                            </label>
                          </div>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                name="status"
                                className="form-check-input"
                              />
                              Confirmed
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12">
                        <div className="form-group local-forms">
                          <label>
                            Appointment Reason{" "}
                            <span className="login-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            rows={3}
                            cols={30}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-heading">
                          <h4>
                            <input
                              id="opdmlc"
                              type="checkbox"
                              checked={isChecked}
                              onChange={handleCheckboxChange}
                            />

                            <label htmlFor="opdmlc" className="ms-2 corser-pointer">OPD MLC</label>
                          </h4>
                        </div>
                      </div>
                      {isChecked && ( 
                        <>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                MLC No <span className="login-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                IDENTIFICATION MARK{" "}
                                <span className="login-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                Vehical Detail{" "}
                                <span className="login-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                Admitted By{" "}
                                <span className="login-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                Hospital Arrival Time{" "}
                                <span className="login-danger">*</span>
                              </label>
                              <div className="">
                                <TextField
                                  className="form-control"
                                  id="outlined-controlled"
                                  type="time"
                                  value={time}
                                  onChange={(event) => {
                                    setTime(event.target.value);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                Address Of Accident By{" "}
                                <span className="login-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                Police Station Name{" "}
                                <span className="login-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                Bukle Number{" "}
                                <span className="login-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                Accident Place{" "}
                                <span className="login-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-3">
                            <div className="form-group local-forms cal-icon">
                              <label>
                                Date Of Accident
                                <span className="login-danger">*</span>
                              </label>
                              <DatePicker
                                className="form-control datetimepicker"
                                onChange={onChange}
                                suffixIcon={null}
                                style={{
                                  control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: isClicked
                                      ? "#2E37A4"
                                      : "2px solid rgba(46, 55, 164, 0.1)",
                                    "&:hover": {
                                      borderColor: state.isFocused
                                        ? "none"
                                        : "none",
                                    },
                                  }),
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-3">
                            <div className="form-group local-forms">
                              <label>
                                Time Of Accident{" "}
                                <span className="login-danger">*</span>
                              </label>
                              <div className="">
                                <TextField
                                  className="form-control"
                                  id="outlined-controlled"
                                  type="time"
                                  value={time}
                                  onChange={(event) => {
                                    setTime(event.target.value);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                Patient Injury
                                <span className="login-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                Relation With Admitted By
                                <span className="login-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                Accident By
                                <span className="login-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                Vehicle Details Of Accident By
                                <span className="login-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                Police Officer Name
                                <span className="login-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-6">
                            <div className="form-group local-forms">
                              <label>
                                MLC Note Time
                                <span className="login-danger">*</span>
                              </label>
                              <div className="">
                                <TextField
                                  className="form-control"
                                  id="outlined-controlled"
                                  type="time"
                                  value={time}
                                  onChange={(event) => {
                                    setTime(event.target.value);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      <div className="col-12">
                        <div className="doctor-submit text-end">
                          <button
                            type="submit"
                            className="btn btn-primary submit-form me-2"
                          >
                            Submit
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary cancel-form"
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

export default AddOPD;
