/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { DatePicker } from "antd";
import { TextField } from "@mui/material";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";

const AddDietPlan = () => {
  const navigate = useNavigate();

  const [patientName, setPatientName] = useState(null);
  const [roomNo, setRoomNo] = useState(null);
  const [dietType, setDietType] = useState(null);
  const [mealTime, setMealTime] = useState(null);
  const [customizeDiet, setCustomizeDiet] = useState([""]);
  
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

  const dietTypes = [
    { value: "Diabetic", label: "Diabetic" },
    { value: "Low Sodium", label: "Low Sodium" },
    { value: "Liquid", label: "Liquid" },
  ];

  const mealTimes = [
    { value: "Breakfast", label: "Breakfast" },
    { value: "Lunch", label: "Lunch" },
    { value: "Dinner", label: "Dinner" },
  ];

  const handleSave = () => {
    // Handle save logic here
    console.log("Diet Plan Saved", {
      patientName,
      roomNo,
      dietType,
      mealTime,
      customizeDiet,
    });
  };

  const handleCancel = () => {
    // Reset the form fields
    setPatientName(null);
    setRoomNo(null);
    setDietType(null);
    setMealTime(null);
    setCustomizeDiet([""]);

    // Navigate to diet/dietPlan
    navigate("/admin/diet-plan");
  };

  const handleAddMeal = () => {
    setCustomizeDiet([...customizeDiet, ""]);
  };

  const handleMealChange = (e, index) => {
    const newMeals = [...customizeDiet];
    newMeals[index] = e.target.value;
    setCustomizeDiet(newMeals);
  };

  return (
    <>
      <Header />
      <Sidebar id="menu-item" id1="menu-items" activeClassName="DietPlan" />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Diet Management</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/admin/diet-plan">Diet Plan</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Add Diet Plan</li>
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
                          <h4>Add Diet Plan</h4>
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
                            Diet Type <span className="login-danger">*</span>
                          </label>
                          <Select
                            value={dietType}
                            onChange={setDietType}
                            options={dietTypes}
                            placeholder="Select Diet Type"
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
                            Meal Time <span className="login-danger">*</span>
                          </label>
                          <Select
                            value={mealTime}
                            onChange={setMealTime}
                            options={mealTimes}
                            placeholder="Select Meal Time"
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

                      <div className="col-12">
                        <div className="form-group local-forms">
                          <label>
                            Customize Diet <span className="login-danger">*</span>
                          </label>
                          {customizeDiet.map((meal, index) => (
                            <div key={index} className="d-flex mb-2">
                              <TextField
                                value={meal}
                                onChange={(e) => handleMealChange(e, index)}
                                placeholder="Enter Meal"
                                fullWidth
                                style={{
                                  marginRight: "10px",
                                }}
                              />
                              {customizeDiet.length - 1 === index && (
                                <button
                                  type="button"
                                  onClick={handleAddMeal}
                                  className="btn btn-primary"
                                  style={{ height: "100%" }}
                                >
                                  Add Meal
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

export default AddDietPlan;
