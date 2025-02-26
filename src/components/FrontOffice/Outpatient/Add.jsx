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
  const [selectedRelation, setSelectedRelation] = useState(null);

  const [doctor, setTitle] = useState([
    { value: 2, label: "Dr. Yogesh Balar(ENT)" },
    { value: 3, label: "Dr. Suryajit Panda(NEUROLOGY)." },
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
                            From <span className="login-danger">*</span>
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
