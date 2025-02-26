/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import { DatePicker } from "antd";
import { TextField } from "@mui/material";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";

const AddInventory = () => {
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const onChange = (date, dateString) => {
    // console.log(date, dateString);
  };
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    { value: 1, label: "Select Department" },
    { value: 2, label: "Cipla" },
    { value: 3, label: "Doctor Redis" },
    { value: 4, label: "Medplus" },
    { value: 4, label: "Apolo" },
  ]);

  return (
    <div>
      <Header />
      <Sidebar
        id="pharmacy-menu-item"
        id1="pharmacy-menu-items"
        activeClassName="inventory"
      />
      <>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">Pharmacy </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                      <Link to="/pharmacy/inventory">Inventory List</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                      Add Item
                    </li>
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
                            <h4>Add Inventory</h4>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Type <span className="login-danger">*</span>
                            </label>
                            <select className="form-control">
                              <option value="">Select Type</option>
                              <option value="">Drug</option>
                              <option value="">Equipment</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Name <span className="login-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Item Code <span className="login-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Manufacturer{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <Select
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={options}
                              menuPortalTarget={document.body}
                              id="search-commodity"
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
                                    : "2px solid rgba(46, 55, 164, 0.1);",
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
                              Stock Unit <span className="login-danger">*</span>
                            </label>
                            <input className="form-control" type="number" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Reorder Limit{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <input className="form-control" type="number" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Retail Price{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <input className="form-control" type="number" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Tax <span className="login-danger">*</span>
                            </label>
                            <input className="form-control" type="number" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="doctor-submit text-end">
                            <Link to="/pharmacy/inventory">
                              <button
                                type="submit"
                                className="btn btn-primary submit-form me-2"
                              >
                                Create
                              </button>
                            </Link>
                            <Link to="/pharmacy/inventory">
                              <button
                                type="submit"
                                className="btn btn-primary cancel-form"
                              >
                                Cancel
                              </button>
                            </Link>
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
    </div>
  );
};

export default AddInventory;
