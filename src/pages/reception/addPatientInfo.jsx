import FeatherIcon from 'feather-icons-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { DatePicker, Select } from 'antd';
import { useState } from "react";
import { TextField } from '@mui/material';



const addPatientInfo = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [startTime, setStartTime] = useState();

  const [option, setOption] = useState([
    { value: 1, label: "Select " },
    { value: 2, label: "Alaska" },
    { value: 3, label: "California" },
  ]);
  const [options, setOptions] = useState([
    { value: 1, label: "Select Country" },
    { value: 2, label: "Usa" },
    { value: 3, label: "Uk" },
    { value: 4, label: "Italy" },
  ]);
  const [options2, setOptions2] = useState([
    { value: 1, label: "Select" },
    { value: 2, label: "Oral" },
    { value: 3, label: "Iv" },
    { value: 4, label: "Injection" },


  ]);
  const onChange = (date, dateString) => {
    // console.log(date, dateString);
  };
  const [department, setDepartment] = useState([
    { value: 2, label: "Orthopedics" },
    { value: 3, label: "Radiology" },
    { value: 4, label: "Dentist" },
  ]);
  const loadFile = (event) => {
    // Handle file loading logic here
  };
  return (
    <>
      <Header />
      <Sidebar
        id="reception-dropmenu"
        id1="reception-items"
        activeClassName="medicaladminstration"
      />
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Medical Administration </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Add Medical Administration </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">

                  {/* patient details */}
                  <form>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-heading">
                          <h4>Patient Details</h4>
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
                            Patient ID <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>
                      {/* <div className="col-12 col-md-6 col-xl-6">
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
                        </div> */}
                      {/* <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Email <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="email"
                              placeholder=""
                              autoComplete="username"
                            />
                          </div>
                        </div> */}
                      {/* <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Password <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              placeholder=""
                              autoComplete="new-password"
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
                              autoComplete="new-password"
                            />
                          </div>
                        </div> */}
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Room Number<span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="number"
                            placeholder=""
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Bed Number<span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="number"
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
                          {/* <input
                              className="form-control datetimepicker"
                              type="text"
                              placeholder=""
                            /> */}
                          <DatePicker
                            className="form-control datetimepicker"
                            onChange={onChange}
                            suffixIcon={null}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Attending Physician<span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>
                      {/* <div className="col-12 col-md-6 col-xl-6">
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
                      </div> */}
                      {/* <div className="col-12 col-md-6 col-xl-4">
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
                        </div> */}
                      {/* <div className="col-12 col-md-6 col-xl-4">
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
                        </div> */}
                      {/* <div className="col-12 col-md-6 col-xl-4">
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
                                  borderColor: state.isFocused ?'none' : '2px solid rgba(46, 55, 164, 0.1);',
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
                        </div> */}
                      {/* <div className="col-12 col-sm-12">
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
                        </div> */}

                      {/* <div className="col-12 col-md-6 col-xl-3">
                          <div className="form-group local-forms">
                            <label>
                              State/Province{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <Select
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
                                  borderColor: state.isFocused ?'none' : '2px solid rgba(46, 55, 164, 0.1);',
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
                        </div> */}
                      {/* <div className="col-12 col-md-6 col-xl-6">
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
                        </div> */}
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms cal-icon">
                          <label>
                            Admission Date{" "}
                            <span className="login-danger">*</span>
                          </label>
                          {/* <input
                              className="form-control datetimepicker"
                              type="text"
                              placeholder=""
                            /> */}
                          <DatePicker
                            className="form-control datetimepicker"
                            onChange={onChange}
                            suffixIcon={null}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms cal-icon">
                          <label>
                            Discharge Date{" "}
                            <span className="login-danger">*</span>
                          </label>
                          {/* <input
                              className="form-control datetimepicker"
                              type="text"
                              placeholder=""
                            /> */}
                          <DatePicker
                            className="form-control datetimepicker"
                            onChange={onChange}
                            suffixIcon={null}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* medication details */}
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-heading">
                          <h4>Medication details</h4>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Mediaction Name <span className="login-danger">*</span>
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
                            Dose <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="number"
                            placeholder=""
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms cal-icon">
                          <label>
                            Start date Of Medication{" "}
                            <span className="login-danger">*</span>
                          </label>
                          {/* <input
                              className="form-control datetimepicker"
                              type="text"
                              placeholder=""
                            /> */}
                          <DatePicker
                            className="form-control datetimepicker"
                            onChange={onChange}
                            suffixIcon={null}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms cal-icon">
                          <label>
                            Start date Of Medication{" "}
                            <span className="login-danger">*</span>
                          </label>
                          {/* <input
                              className="form-control datetimepicker"
                              type="text"
                              placeholder=""
                            /> */}
                          <DatePicker
                            className="form-control datetimepicker"
                            onChange={onChange}
                            suffixIcon={null}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="form-group local-forms">
                          <label>
                            Route Of Administration <span className="login-danger">*</span>
                          </label>
                          <Select
                            menuPortalTarget={document.body}
                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options2}
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
                    </div>
                  </form>
                </div>
                {/* Administration Details */}
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-heading">
                          <h4>Administration Details</h4>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Administered By  <span className="login-danger">*</span>
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
                            Time of Administration <span className="login-danger">*</span>
                          </label>
                          <div className="">
                            <TextField
                              className="form-control"
                              id="outlined-controlled"
                              type="time"
                              value={startTime}
                              onChange={(event) => {
                                setStartTime(event.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Administered Dose  <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="number"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Route of Administration  <span className="login-danger">*</span>
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
                            Observed Effects<span className="login-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            placeholder=""
                            rows="4"
                          ></textarea>

                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Nursing Notes/Comments<span className="login-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            placeholder=""
                            rows="4"
                          ></textarea>

                        </div>
                      </div>

                    </div>
                  </form>
                </div>
                {/* Vitals Monitoring (Post-Administration) */}
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-heading">
                          <h4>Vitals Monitoring </h4>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Temperature (°C)<span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="number"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Pulse (bpm):  <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="number"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Blood Pressure (mmHg) <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="number"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Respiratory Rate (breaths/min): <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="number"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>


                  </form>
                </div>
                {/* Verification */}
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-heading">
                          <h4>Verification</h4>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12">
                        <div className="form-group local-forms">
                          <label>
                            Signature of Administering Nurse/Staff<span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="note-checkit">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="select_specialist"
                            defaultChecked
                          />
                          <span className="checkmark" /> Reviewed By Attending Physician
                        </label>
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

export default addPatientInfo