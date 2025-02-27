import React, { useState } from "react";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { TextField } from "@mui/material";
import { DatePicker } from "antd";
import Select from "react-select";

const AddInpatient = () => {
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [selectedRefer, setSelectedRefer] = useState(null);
  const [selectedAdmittingDoctor, setSelectedAdmittingDoctor] = useState(null);
  const [time, setTime] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedRelation, setSelectedRelation] = useState(null);
  const [selectedPayerType, setSelectedPayerType] = useState(null);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [payerTypes, setPayerTypes] = useState([
    { value: 1, label: "Direct Patient" },
    { value: 2, label: "Company" },
    { value: 3, label: "Insurance" },
  ]);
  const [relation, setrelation] = useState([
    { value: 1, label: "Brother" },
    { value: 2, label: "Father" },
    { value: 3, label: "Others" },
  ]);
  const [title, setTitle] = useState([
    { value: 2, label: "Mr." },
    { value: 3, label: "Mrs." },
    { value: 4, label: "Ms." },
    { value: 4, label: "Dr." },
  ]);
  const [admittingDoctors, setAdmittingDoctors] = useState([
    { value: 1, label: "Dr. Yogesh Balar (ENT)" },
    { value: 2, label: "Dr. Chetanya Dabi (Neurosurgeon)" },
    { value: 3, label: "Dr. Ankit Namdev (Cardiologist)" },
  ]);
  const [refer, setRefer] = useState([
    { value: 1, label: "Dr. ramesh" },
    { value: 2, label: "Dr. Rahul" },
  ]);
  const [providers, setProviders] = useState([
    { value: 1, label: "Self" },
    { value: 2, label: "Internal Provider" },
    { value: 2, label: "External Provider" },
  ]);

  const [patients, setPatients] = useState([
    { value: 1, label: "(HC730) GH KL, 7648379867 (23Y 1D), GH@gmail.com" },
    {
      value: 2,
      label: "(HC726) PRIYA KL, 7648379855 (35Y 1D), priya@gmail.com",
    },
  ]);

  const onChange = (date, dateString) => {
    setIsClicked(true);
  };
  return (
    <>
      <Header />
      <Sidebar
        id="frontoffice"
        id1="frontoffices"
        activeClassName="inpatient"
      />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/inpatient">Inpatient</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Add IPD</li>
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
                          <h4>IPD Details</h4>
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
                        <div className="form-group local-forms cal-icon">
                          <label>
                            Date Of Admission
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
                            Time Of Admission{" "}
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
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>Provider</label>
                          <Select
                            defaultValue={selectedProvider}
                            onChange={setSelectedProvider}
                            options={providers}
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
                        <div className="form-group local-forms">
                          <label>Referred By</label>
                          <Select
                            defaultValue={selectedRefer}
                            onChange={setSelectedRefer}
                            options={refer}
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
                            Admission Type
                            <span className="login-danger">*</span>
                          </label>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                name="admissionType"
                                className="form-check-input"
                              />
                              Planned
                            </label>
                          </div>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                name="admissionType"
                                className="form-check-input"
                              />
                              Emergency
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>Admitting Doctor</label>
                          <Select
                            defaultValue={selectedAdmittingDoctor}
                            onChange={setSelectedAdmittingDoctor}
                            options={admittingDoctors}
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
                        <div className="form-group local-forms">
                          <label>Secondary Consultant</label>
                          <Select
                            defaultValue={selectedAdmittingDoctor}
                            onChange={setSelectedAdmittingDoctor}
                            options={admittingDoctors}
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
                        <div className="form-group local-forms">
                          <label>
                            Diagnosis <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Remark <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group select-gender">
                          <label className="gen-label">
                            Treatment Type
                            <span className="login-danger">*</span>
                          </label>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                name="admissionType"
                                className="form-check-input"
                              />
                              Medical
                            </label>
                          </div>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                name="admissionType"
                                className="form-check-input"
                              />
                              Surgical
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Expected Length Of Stay{" "}
                            <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="number" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Admission Reason{" "}
                            <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-heading float-end">
                          <h4>
                            <input
                              id="opdmlc"
                              type="checkbox"
                              checked={isChecked}
                              onChange={handleCheckboxChange}
                            />

                            <label
                              htmlFor="opdmlc"
                              className="ms-2 corser-pointer"
                            >
                              Is MLC case ?
                            </label>
                          </h4>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card">
                          <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                            <li className="nav-item">
                              <Link
                                className="nav-link active"
                                to="#bottom-justified-tab1"
                                data-bs-toggle="tab"
                              >
                                Assign Bed
                              </Link>
                            </li>
                            {isChecked && (
                              <li className="nav-item">
                                <Link
                                  className="nav-link"
                                  to="#bottom-justified-tab4"
                                  data-bs-toggle="tab"
                                >
                                  MLC Detail
                                </Link>
                              </li>
                            )}
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                to="#bottom-justified-tab2"
                                data-bs-toggle="tab"
                              >
                                Payer Details
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                to="#bottom-justified-tab3"
                                data-bs-toggle="tab"
                              >
                                Kin Details
                              </Link>
                            </li>
                          </ul>
                          <div className="tab-content">
                            <div
                              className="tab-pane show active"
                              id="bottom-justified-tab1"
                            >
                              <div className="row">
                                <div className="me-4 col-md-1">
                                  <input id="ICU" type="checkbox" />
                                  <label
                                    htmlFor="ICU"
                                    className="ms-2 corser-pointer"
                                  >
                                    ICU
                                  </label>
                                </div>
                                <div className="col-md-3">
                                  <button className="btn btn-primary">
                                    Select Bed
                                  </button>
                                </div>
                              </div>
                            </div>
                            {isChecked && (
                              <div
                                className="tab-pane"
                                id="bottom-justified-tab4"
                              >
                                <div className="row">
                                  <div className="col-12 col-md-6 col-xl-6">
                                    <div className="form-group local-forms">
                                      <label>
                                        MLC No{" "}
                                        <span className="login-danger">*</span>
                                      </label>
                                      <input
                                        className="form-control"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6 col-xl-6">
                                    <div className="form-group local-forms">
                                      <label>
                                        IDENTIFICATION MARK{" "}
                                        <span className="login-danger">*</span>
                                      </label>
                                      <input
                                        className="form-control"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6 col-xl-6">
                                    <div className="form-group local-forms">
                                      <label>
                                        Vehical Detail{" "}
                                        <span className="login-danger">*</span>
                                      </label>
                                      <input
                                        className="form-control"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6 col-xl-6">
                                    <div className="form-group local-forms">
                                      <label>
                                        Admitted By{" "}
                                        <span className="login-danger">*</span>
                                      </label>
                                      <input
                                        className="form-control"
                                        type="text"
                                      />
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
                                      <input
                                        className="form-control"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6 col-xl-6">
                                    <div className="form-group local-forms">
                                      <label>
                                        Police Station Name{" "}
                                        <span className="login-danger">*</span>
                                      </label>
                                      <input
                                        className="form-control"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6 col-xl-6">
                                    <div className="form-group local-forms">
                                      <label>
                                        Bukle Number{" "}
                                        <span className="login-danger">*</span>
                                      </label>
                                      <input
                                        className="form-control"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6 col-xl-6">
                                    <div className="form-group local-forms">
                                      <label>
                                        Accident Place{" "}
                                        <span className="login-danger">*</span>
                                      </label>
                                      <input
                                        className="form-control"
                                        type="text"
                                      />
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
                                      <input
                                        className="form-control"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6 col-xl-6">
                                    <div className="form-group local-forms">
                                      <label>
                                        Relation With Admitted By
                                        <span className="login-danger">*</span>
                                      </label>
                                      <input
                                        className="form-control"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6 col-xl-6">
                                    <div className="form-group local-forms">
                                      <label>
                                        Accident By
                                        <span className="login-danger">*</span>
                                      </label>
                                      <input
                                        className="form-control"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6 col-xl-6">
                                    <div className="form-group local-forms">
                                      <label>
                                        Vehicle Details Of Accident By
                                        <span className="login-danger">*</span>
                                      </label>
                                      <input
                                        className="form-control"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6 col-xl-6">
                                    <div className="form-group local-forms">
                                      <label>
                                        Police Officer Name
                                        <span className="login-danger">*</span>
                                      </label>
                                      <input
                                        className="form-control"
                                        type="text"
                                      />
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
                                </div>
                              </div>
                            )}
                            <div
                              className="tab-pane"
                              id="bottom-justified-tab2"
                            >
                              <div className="row">
                                <div className="col-12 col-md-4">
                                  <div className="form-group local-forms">
                                    <label>Payer Type</label>
                                    <Select
                                      defaultValue={selectedPayerType}
                                      onChange={setSelectedPayerType}
                                      options={payerTypes}
                                      menuPortalTarget={document.body}
                                      styles={{
                                        menuPortal: (base) => ({
                                          ...base,
                                          zIndex: 9999,
                                        }),
                                      }}
                                      id="search-commodity"
                                      components={{
                                        IndicatorSeparator: () => null,
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      Payer Name/TPA
                                      <span className="login-danger">*</span>
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      Insurance
                                      <span className="login-danger">*</span>
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      Policy Number
                                      <span className="login-danger">*</span>
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      Card Number
                                      <span className="login-danger">*</span>
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      Plan/Class
                                      <span className="login-danger">*</span>
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-4">
                                  <div className="form-group local-forms cal-icon">
                                    <label>
                                      Valid From
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
                                  <div className="form-group local-forms cal-icon">
                                    <label>
                                      Valid To
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
                                      Image
                                      <span className="login-danger">*</span>
                                    </label>
                                    <input
                                      className="form-control"
                                      type="file"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane"
                              id="bottom-justified-tab3"
                            >
                              <div className="row">
                                <div className="col-12 col-md-6 col-xl-4">
                                  <div className="form-group local-forms">
                                    <label>Medplus Hos No</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-4">
                                  <div className="form-group local-forms">
                                    <label>Title</label>
                                    <Select
                                      defaultValue={selectedTitle}
                                      onChange={setSelectedTitle}
                                      options={title}
                                      menuPortalTarget={document.body}
                                      styles={{
                                        menuPortal: (base) => ({
                                          ...base,
                                          zIndex: 9999,
                                        }),
                                      }}
                                      id="search-commodity"
                                      components={{
                                        IndicatorSeparator: () => null,
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-4">
                                  <div className="form-group local-forms">
                                    <label>Full Name</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-4">
                                  <div className="form-group local-forms">
                                    <label>Relation</label>
                                    <Select
                                      defaultValue={selectedRelation}
                                      onChange={setSelectedRelation}
                                      options={relation}
                                      menuPortalTarget={document.body}
                                      styles={{
                                        menuPortal: (base) => ({
                                          ...base,
                                          zIndex: 9999,
                                        }),
                                      }}
                                      id="search-commodity"
                                      components={{
                                        IndicatorSeparator: () => null,
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-4">
                                  <div className="form-group local-forms">
                                    <label>Contact No</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default AddInpatient;
