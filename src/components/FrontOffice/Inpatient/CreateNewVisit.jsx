import React, { useState } from "react";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { DatePicker } from "antd";
import { TextField } from "@mui/material";
import Select from "react-select";

const CreateNewVisit = () => {
  const [time, setTime] = useState();
  const [selectedVisitorDoctor, setSelectedVisitorDoctor] = useState(null);

  const onChange = (date, dateString) => {
    // console.log(date, dateString);
    setIsClicked(true);
  };
  const [visitorDoctors, setVisitorDoctors] = useState([
    { value: 1, label: "Dr. Rajesh Patel (GP)(+91 6758976790)" },
    {
      value: 2,
      label: "Dr. Amul charan swain (Diabetologist)(+91 7654675676)",
    },
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
                  <li className="breadcrumb-item">
                    <Link to="/inpatient/doctor-visit">Doctor Visit</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Create New Visit</li>
                </ul>
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
                            <h4>Create New Visit</h4>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms cal-icon">
                            <label>
                              Visit Date
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
                              Time (HH:MM)
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
                          <div className="form-group select-gender">
                            <label className="gen-label">
                              Select Doctor Type
                              <span className="login-danger">*</span>
                            </label>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="doctors"
                                  className="form-check-input"
                                />
                                Organization Doctor
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="doctors"
                                  className="form-check-input"
                                />
                                Visitor Doctor
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group local-forms">
                            <label>Visitor Doctor</label>
                            <Select
                              defaultValue={selectedVisitorDoctor}
                              onChange={setSelectedVisitorDoctor}
                              options={visitorDoctors}
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

export default CreateNewVisit;
