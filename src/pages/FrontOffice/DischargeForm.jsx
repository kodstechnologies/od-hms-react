import React, { useState } from "react";
import { Table } from "antd";
import Select from "react-select";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { DatePicker } from "antd";
import { TextField } from "@mui/material";

const DischargeForm = () => {
  const [selectedDischargeStatus, setSelectedDischargeStatus] = useState(null);
  const [selectedProvider, setSelectedProvider] = useState({
    value: 1,
    label: "Self",
  });
  const [selectedAdmittingDoctor, setSelectedAdmittingDoctor] = useState({
    value: 1,
    label: "Dr. Yogesh Balar (ENT)",
  });
  const [time, setTime] = useState();

  const onChange = (date, dateString) => {
    setIsClicked(true);
  };
  const [dischargeStatus, setDischargeStatus] = useState([
    { value: 1, label: "DISCHARGE" },
    { value: 2, label: "DOR" },
    { value: 3, label: "REFER" },
    { value: 4, label: "TRANSFERRED" },
  ]);
  const [admittingDoctors, setAdmittingDoctors] = useState([
    { value: 1, label: "Dr. Yogesh Balar (ENT)" },
    { value: 2, label: "Dr. Chetanya Dabi (Neurosurgeon)" },
    { value: 3, label: "Dr. Ankit Namdev (Cardiologist)" },
  ]);
  const [providers, setProviders] = useState([
    { value: 1, label: "Self" },
    { value: 2, label: "Internal Provider" },
    { value: 2, label: "External Provider" },
  ]);
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
                  <li className="breadcrumb-item active">Discharge Form</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-12 mb-3">
                          <div className="d-flex flex-wrap justify-content-between p-3 bg-light rounded shadow-sm">
                            <div className="d-flex flex-column flex-sm-row mb-3 mb-sm-0">
                              <div
                                className="d-flex align-items-center justify-content-center bg-danger text-white rounded-circle"
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  fontSize: "18px",
                                }}
                              >
                                R
                              </div>
                              <div className="ms-3">
                                <h5 className="mb-1">
                                  (HC736) RANVIJAY A SINGH, (28Y / M)
                                </h5>
                                <p className="mb-1">+91 9523147890</p>
                                <p className="mb-1">DOB: 28/02/1997</p>
                                <p className="mb-0">REF: DR. RAKESH BHUYAN</p>
                              </div>
                            </div>

                            <div className="text-end flex-column flex-sm-row">
                              <p className="mb-1">BED No/ Ward Name: 2/ ICU -01</p>
                              <p className="mb-1">IPD NO: IPD-745</p>
                              <p className="mb-1">
                                ADMITTING DR: DR. CHINMAYA SAHU
                              </p>
                              <p className="mb-0">DOA: 28/02/2025 11:49 AM</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>IPD Details</h4>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              IPD Registration Number{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value="IPD-746"
                              disabled
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
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
                                  defaultChecked
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
                            <label>Secondary Consultant</label>
                            <Select
                              defaultValue={selectedAdmittingDoctor}
                              onChange={setSelectedAdmittingDoctor}
                              options={admittingDoctors}
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
                              Expected Length Of Stay
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
                          <div className="form-heading">
                            <h4>Discharge Detail</h4>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Enter Surgery Performed
                              <span className="login-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Enter Operation Notes Here
                              <span className="login-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
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
                            <label>Discharge Status</label>
                            <Select
                              defaultValue={selectedDischargeStatus}
                              onChange={setSelectedDischargeStatus}
                              options={dischargeStatus}
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
                        <div className="col-12">
                          <div className="doctor-submit text-end">
                            <button
                              type="submit"
                              className="btn btn-primary submit-form me-2"
                            >
                              Submit
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
      </div>
    </>
  );
};

export default DischargeForm;
