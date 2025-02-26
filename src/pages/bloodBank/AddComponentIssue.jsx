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

const AddComponentIssue = () => {
  const [patient, setPatient] = useState(null);
  const [issueDate, setIssueDate] = useState(null);
  const [hospitalDoctor, setHospitalDoctor] = useState(null);
  const [referenceNumber, setReferenceNumber] = useState("");
  const [technician, setTechnician] = useState("");
  const [chargeCategory, setChargeCategory] = useState(null);
  const [chargeName, setChargeName] = useState(null);
  const [standardCharge, setStandardCharge] = useState("");
  const [bloodGroup, setBloodGroup] = useState(null);
  const [bag, setBag] = useState("");
  const [note, setNote] = useState("");
  const [component, setComponent] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const patients = [
    { value: "John Doe", label: "John Doe" },
    { value: "Jane Smith", label: "Jane Smith" },
    { value: "Sam Wilson", label: "Sam Wilson" },
  ];

  const hospitalDoctors = [
    { value: "Dr. Smith", label: "Dr. Smith" },
    { value: "Dr. Johnson", label: "Dr. Johnson" },
    { value: "Dr. Lee", label: "Dr. Lee" },
  ];

  const chargeCategories = [
    { value: "A+", label: "A+" },
    { value: "B+", label: "B+" },
    { value: "O+", label: "O+" },
    { value: "AB+", label: "AB+" },
    { value: "A-", label: "A-" },
    { value: "B-", label: "B-" },
    { value: "O-", label: "O-" },
    { value: "AB-", label: "AB-" },
  ];

  const chargeNames = [
    { value: "HIV", label: "HIV" },
    { value: "Blood Group Test", label: "Blood Group Test" },
    { value: "Test", label: "Test" },
    { value: "Test ABC", label: "Test ABC" },
  ];

  const bloodGroups = [
    { value: "A+", label: "A+" },
    { value: "B+", label: "B+" },
    { value: "O+", label: "O+" },
    { value: "AB+", label: "AB+" },
    { value: "A-", label: "A-" },
    { value: "B-", label: "B-" },
    { value: "O-", label: "O-" },
    { value: "AB-", label: "AB-" },
  ];

  const components = [
    { value: "Platelets", label: "Platelets" },
    { value: "Plasma", label: "Plasma" },
    { value: "Whiteblood cells", label: "Whiteblood cells" },
    { value: "Redblood cells", label: "Redblood cells" },
  ];

  const handleSave = () => {
    // Handle save logic here
    console.log("Component Issue Saved", {
      patient,
      issueDate,
      hospitalDoctor,
      referenceNumber,
      technician,
      chargeCategory,
      chargeName,
      standardCharge,
      bloodGroup,
      bag,
      note,
      component,
    });
  };

  const handleCancel = () => {
    // Reset the form fields
    setPatient(null);
    setIssueDate(null);
    setHospitalDoctor(null);
    setReferenceNumber("");
    setTechnician("");
    setChargeCategory(null);
    setChargeName(null);
    setStandardCharge("");
    setBloodGroup(null);
    setBag("");
    setNote("");
    setComponent(null);

    // Navigate to the component issue list page
    navigate("/blood/componentIssue");
  };

  return (
    <>
      <Header />
      <Sidebar
        id="blood-menu-item"
        id1="blood-menu-items"
        activeClassName="ComponentIssue"
      />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Blood Bank </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/blood/componentIssue">Component Issue</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Add Component Issue</li>
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
                          <h4>Add Component Issue</h4>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Patient <span className="login-danger">*</span>
                          </label>
                          <Select
                            value={patient}
                            onChange={setPatient}
                            options={patients}
                            placeholder="Select Patient"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Issue Date <span className="login-danger">*</span>
                          </label>
                          <DatePicker
                            className="form-control"
                            onChange={(date, dateString) => setIssueDate(dateString)}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Hospital Doctor <span className="login-danger">*</span>
                          </label>
                          <Select
                            value={hospitalDoctor}
                            onChange={setHospitalDoctor}
                            options={hospitalDoctors}
                            placeholder="Select Doctor"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Reference Number <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={referenceNumber}
                            onChange={(e) => setReferenceNumber(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Technician <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={technician}
                            onChange={(e) => setTechnician(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Charge Category <span className="login-danger">*</span>
                          </label>
                          <Select
                            value={chargeCategory}
                            onChange={setChargeCategory}
                            options={chargeCategories}
                            placeholder="Select Charge Category"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Charge Name <span className="login-danger">*</span>
                          </label>
                          <Select
                            value={chargeName}
                            onChange={setChargeName}
                            options={chargeNames}
                            placeholder="Select Charge Name"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Standard Charge <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={standardCharge}
                            onChange={(e) => setStandardCharge(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Blood Group <span className="login-danger">*</span>
                          </label>
                          <Select
                            value={bloodGroup}
                            onChange={setBloodGroup}
                            options={bloodGroups}
                            placeholder="Select Blood Group"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Bag <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={bag}
                            onChange={(e) => setBag(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group local-forms">
                          <label>
                            Component <span className="login-danger">*</span>
                          </label>
                          <Select
                            value={component}
                            onChange={setComponent}
                            options={components}
                            placeholder="Select Component"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-sm-12">
                        <div className="form-group local-forms">
                          <label>
                            Note <span className="login-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            rows={3}
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
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
                            className="btn btn-secondary"
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

export default AddComponentIssue;
