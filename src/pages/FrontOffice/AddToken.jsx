/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const AddToken = () => {
  const [roomNo, setRoomNo] = useState("");
  const [tokenNo, setTokenNo] = useState("");
  const [patientName, setPatientName] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    // Handle save logic here
    console.log("Token Saved", {
      roomNo,
      tokenNo,
      patientName,
    });
  };

  const handleCancel = () => {
    // Reset the form fields
    setRoomNo("");
    setTokenNo("");
    setPatientName("");

    // Navigate to token/tokenDetails
    navigate("/token-board");
  };

  return (
    <>
      <Header />
      <Sidebar id="frontoffice" activeClassName="Tokenboard" />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Token Management</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/token/tokenDetails">Token Details</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Add Token</li>
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
                          <h4>Add Token</h4>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Room No <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={roomNo}
                            onChange={(e) => setRoomNo(e.target.value)}
                            style={{
                              backgroundColor: "#fff", // Ensure white background
                              border: "1px solid #ccc", // Border color
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Token No <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={tokenNo}
                            onChange={(e) => setTokenNo(e.target.value)}
                            style={{
                              backgroundColor: "#fff", // Ensure white background
                              border: "1px solid #ccc", // Border color
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Patient Name <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            style={{
                              backgroundColor: "#fff", // Ensure white background
                              border: "1px solid #ccc", // Border color
                            }}
                          />
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

export default AddToken;
