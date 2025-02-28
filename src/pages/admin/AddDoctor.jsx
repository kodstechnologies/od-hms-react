import React, { useState } from 'react'
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
import { DatePicker } from 'antd';
import Select from "react-select";

const AddDoctor = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    { value: 1, label: "Select City" },
    { value: 2, label: "Alaska" },
    { value: 3, label: "California" },
  ]);
  const [option, setOption] = useState([
    { value: 1, label: "Select Country" },
    { value: 2, label: "Usa" },
    { value: 3, label: "Uk" },
    { value: 4, label: "Italy" },
  ]);
  const [statevalue, setStateValue] = useState([
    { value: 1, label: "Select City" },
    { value: 2, label: "Alaska" },
    { value: 3, label: "California" },
  ]);

  const [department, setDepartment] = useState([
    { value: 1, label: "Orthopedics" },
    { value: 2, label: "Radiology" },
    { value: 3, label: "Dentist" },
  ]);

  const onChange = (date, dateString) => {
    // console.log(date, dateString);
    setIsClicked(true);
  };
  const loadFile = (event) => {
    // Handle file loading logic here
  };

  return (
    <>
      <Header />
      <Sidebar
        id="menu-item"
        id1="menu-items"
        activeClassName="doctors"
      />
      <div className="page-wrapper">
        <div className="content">
          {/* page header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Admin </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                    <Link to="/admin/doctors">Doctors</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                    Add Doctors
                  </li>
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
                          <h4>Doctor Details</h4>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            First Name <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Last Name <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            User Name <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Mobile <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Email <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="email"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Password <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="password"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Confirm Password{" "}
                            <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="password"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms cal-icon">
                          <label>
                            Date Of Birth{" "}
                            <span className="login-danger">*</span>
                          </label>
                          <DatePicker
                            className="form-control datetimepicker"
                            onChange={onChange}
                            suffixIcon={null}
                            style={{
                              borderColor: isClicked ? '#2E37A4' : '2px solid rgba(46, 55, 164, 0.1)',
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
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
                        <div className="form-group local-forms">
                          <label>
                            Education <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Designation{" "}
                            <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>

                            Department <span className="login-danger">*</span>
                          </label>
                          <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={department}
                            id="search-commodity"
                            components={{
                              IndicatorSeparator: () => null
                            }}
                            styles={{
                              control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1);',
                                boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
                                '&:hover': {
                                  borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
                                },
                                borderRadius: '10px',
                                fontSize: "14px",
                                minHeight: "45px",
                              }),
                              dropdownIndicator: (base, state) => ({
                                ...base,
                                transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                                transition: '250ms',
                                width: '35px',
                                height: '35px',
                              }),
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
                            cols={30}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="form-group local-forms">
                          <label>
                            City <span className="login-danger">*</span>
                          </label>
                          <Select
                            menuPosition={'fixed'}
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            menuPortalTarget={document.body}
                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                            id="search-commodity"
                            components={{
                              IndicatorSeparator: () => null
                            }}

                            styles={{
                              control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1);',
                                boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
                                '&:hover': {
                                  borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
                                },
                                borderRadius: '10px',
                                fontSize: "14px",
                                minHeight: "45px",
                              }),
                              dropdownIndicator: (base, state) => ({
                                ...base,
                                transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                                transition: '250ms',
                                width: '35px',
                                height: '35px',
                              }),
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="form-group local-forms">
                          <label>
                            Country <span className="login-danger">*</span>
                          </label>
                          <Select
                            menuPosition={'fixed'}
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={option}
                            menuPortalTarget={document.body}
                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                            id="search-commodity"
                            components={{
                              IndicatorSeparator: () => null
                            }}

                            styles={{
                              control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1);',
                                boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
                                '&:hover': {
                                  borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
                                },
                                borderRadius: '10px',
                                fontSize: "14px",
                                minHeight: "45px",
                              }),
                              dropdownIndicator: (base, state) => ({
                                ...base,
                                transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                                transition: '250ms',
                                width: '35px',
                                height: '35px',
                              }),
                            }}
                          />

                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="form-group local-forms">
                          <label>
                            State/Province{" "}
                            <span className="login-danger">*</span>
                          </label>
                          <Select
                            menuPosition={'fixed'}
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            menuPortalTarget={document.body}
                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                            id="search-commodity"
                            components={{
                              IndicatorSeparator: () => null
                            }}

                            styles={{
                              control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1);',
                                boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
                                '&:hover': {
                                  borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
                                },
                                borderRadius: '10px',
                                fontSize: "14px",
                                minHeight: "45px",
                              }),
                              dropdownIndicator: (base, state) => ({
                                ...base,
                                transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                                transition: '250ms',
                                width: '35px',
                                height: '35px',
                              }),
                            }}
                          />

                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="form-group local-forms">
                          <label>
                            Postal Code{" "}
                            <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-12">
                        <div className="form-group local-forms">
                          <label>
                            Start Biography{" "}
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
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-top-form">
                          <label className="local-top">
                            Avatar <span className="login-danger">*</span>
                          </label>
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
                          {/* <div className="settings-btn upload-files-avator">
                              <input
                                type="file"
                                accept="image/*"
                                name="image"
                                id="file"
                                onchange="loadFile(event)"
                                className="hide-input"
                              />
                              <label htmlFor="file" className="upload">
                                Choose File
                              </label>
                            </div> */}
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
                                name="gender"
                                className="form-check-input"
                              />
                              Active
                            </label>
                          </div>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                name="gender"
                                className="form-check-input"
                              />
                              In Active
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="doctor-submit text-end">
                          <Link to='/admin/doctors'>
                            <button
                              type="submit"
                              className="btn btn-primary submit-form me-2"

                            >

                              Submit
                            </button>
                          </Link>
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
  )
}

export default AddDoctor