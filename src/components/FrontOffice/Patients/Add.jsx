import { DatePicker } from "antd";
import Select from "react-select";
import FeatherIcon from "feather-icons-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";

const AddPatient = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedRelation, setSelectedRelation] = useState(null);
  
  const [title, setTitle] = useState([
    { value: 2, label: "Mr." },
    { value: 3, label: "Mrs." },
    { value: 4, label: "Ms." },
    { value: 4, label: "Dr." },
  ]);
  const [relation, setrelation] = useState([
    { value: 1, label: "Brother" },
    { value: 2, label: "Father" },
    { value: 3, label: "Others" },
  ]);

  const loadFile = (event) => {
    // Handle file loading logic here
  };

  const onChange = (date, dateString) => {
    // console.log(date, dateString);
    setIsClicked(true);
  };
  return (
    <>
      <Header />
      <Sidebar id="frontoffice" id1="frontoffices" activeClassName="patients" />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/patients">Patients </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Add Patient</li>
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
                          <h4>Patient Details</h4>
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
                            First Name <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Father/Husband Name{" "}
                            <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Last Name <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group select-gender">
                          <label className="gen-label">
                            Gender<span className="login-danger">*</span>
                          </label>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                name="gender"
                                className="form-check-input"
                              />
                              Male
                            </label>
                          </div>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                name="gender"
                                className="form-check-input"
                              />
                              Female
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms cal-icon">
                          <label>
                            Date of Birth{" "}
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
                          {/* <input
                      className="form-control datetimepicker"
                      type="text"
                    /> */}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-heading">
                          <h4>Contact Details</h4>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Mobile <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Email <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="email" />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>House/Flat Number</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>City</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>State</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>Country</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-heading">
                          <h4>Kin Details</h4>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>Medplus Hos No</label>
                          <input className="form-control" type="text" />
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
                          <label>Full Name</label>
                          <input className="form-control" type="text" />
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
                          <label>Contact No</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-heading">
                          <h4>Patient Identity Details</h4>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-top-form">
                          <label className="local-top">Pan Card PDF</label>
                          <div className="settings-btn upload-files-avator">
                            <input
                              type="file"
                              accept="image/*"
                              name="image"
                              id="file"
                              onChange={loadFile}
                              className="hide-input"
                            />
                            <label htmlFor="file" className="upload">
                              Choose File
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-top-form">
                          <label className="local-top">Aadhar Card PDF</label>
                          <div className="settings-btn upload-files-avator">
                            <input
                              type="file"
                              accept="image/*"
                              name="image"
                              id="file"
                              onChange={loadFile}
                              className="hide-input"
                            />
                            <label htmlFor="file" className="upload">
                              Choose File
                            </label>
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

export default AddPatient;
