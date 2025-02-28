/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { DatePicker } from "antd";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";

const AddAppointments = () => {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState(null);
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [existingConditions, setExistingConditions] = useState("");
  const [existingConditionsDetails, setExistingConditionsDetails] = useState("");
  const [takingMedications, setTakingMedications] = useState("");
  const [medicationsDetails, setMedicationsDetails] = useState("");
  const [allergies, setAllergies] = useState("");
  const [allergiesDetails, setAllergiesDetails] = useState("");
  const [smokeAlcohol, setSmokeAlcohol] = useState("");
  const [smokeAlcoholDetails, setSmokeAlcoholDetails] = useState("");
  const [packageType, setPackageType] = useState(null);
  const [doctorName, setDoctorName] = useState(null);
  const [doctorRemarks, setDoctorRemarks] = useState("");

  const navigate = useNavigate();

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];

  const packageOptions = [
    { value: "Basic Health Check-up", label: "Basic Health Check-up (₹ 499)" },
    { value: "Full Body Check-up", label: "Full Body Check-up (₹ 999)" },
    { value: "Executive Check-up", label: "Executive Check-up (₹ 2999)" },
    { value: "Specialized Check-up", label: "Specialized Check-up (₹ 3999)" },
    { value: "Other", label: "Other" },
  ];

  const doctorOptions = [
    { value: "Shekar", label: "Shekar" },
    { value: "Shivakumar", label: "Shivakumar" },
    { value: "Shankar", label: "Shankar" },
  ];

  const handleSave = () => {
    console.log("Appointment Saved", {
      fullName,
      age,
      gender,
      dob,
      contactNumber,
      email,
      address,
      existingConditions,
      existingConditionsDetails,
      takingMedications,
      medicationsDetails,
      allergies,
      allergiesDetails,
      smokeAlcohol,
      smokeAlcoholDetails,
      packageType,
      doctorName,
      doctorRemarks,
    });
  };

  const handleCancel = () => {
    setFullName("");
    setAge("");
    setGender("");
    setDob(null);
    setContactNumber("");
    setEmail("");
    setAddress("");
    setExistingConditions("");
    setExistingConditionsDetails("");
    setTakingMedications("");
    setMedicationsDetails("");
    setAllergies("");
    setAllergiesDetails("");
    setSmokeAlcohol("");
    setSmokeAlcoholDetails("");
    setPackageType(null);
    setDoctorName(null);
    setDoctorRemarks("");
    navigate("/appointment");
  };

  return (
    <>
      <Header />
      <Sidebar id="frontoffice" id1="frontoffices" activeClassName="Appointment" />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Appointments</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Add Appointment</li>
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
                      {/* Section 1: Personal Information */}
                      <div className="col-12">
                        <h4 style={{ marginBottom: "15px" }}>Personal Information</h4>
                      </div>
                      <div className="col-12 col-md-6" style={{ marginBottom: "15px" }}>
                        <label>Full Name <span className="login-danger">*</span></label>
                        <input
                          className="form-control"
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>
                      <div className="col-12 col-md-6" style={{ marginBottom: "15px" }}>
                        <label>Age <span className="login-danger">*</span></label>
                        <input
                          className="form-control"
                          type="number"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                        />
                      </div>
                      <div className="col-12 col-md-6" style={{ marginBottom: "15px" }}>
                        <label>Gender <span className="login-danger">*</span></label>
                        <Select
                          value={gender}
                          onChange={setGender}
                          options={genderOptions}
                          placeholder="Select Gender"
                        />
                      </div>
                      <div className="col-12 col-md-6" style={{ marginBottom: "15px" }}>
                        <label>Date of Birth <span className="login-danger">*</span></label>
                        <DatePicker
                          className="form-control"
                          onChange={(date, dateString) => setDob(dateString)}
                        />
                      </div>
                      <div className="col-12 col-md-6" style={{ marginBottom: "15px" }}>
                        <label>Contact Number <span className="login-danger">*</span></label>
                        <input
                          className="form-control"
                          type="text"
                          value={contactNumber}
                          onChange={(e) => setContactNumber(e.target.value)}
                        />
                      </div>
                      <div className="col-12 col-md-6" style={{ marginBottom: "15px" }}>
                        <label>Email <span className="login-danger">*</span></label>
                        <input
                          className="form-control"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="col-12" style={{ marginBottom: "15px" }}>
                        <label>Address <span className="login-danger">*</span></label>
                        <textarea
                          className="form-control"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>

                      {/* Section 2: Medical History */}
                      <div className="col-12" style={{ marginBottom: "15px" }}>
                        <h4>Medical History</h4>
                      </div>
                      <div className="col-12 col-md-6" style={{ marginBottom: "15px" }}>
                        <label>Do you have any existing medical conditions? <span className="login-danger">*</span></label>
                        <div>
                          <input
                            type="radio"
                            name="existingConditions"
                            checked={existingConditions === "Yes"}
                            onChange={() => setExistingConditions("Yes")}
                          />
                          Yes
                          <input
                            type="radio"
                            name="existingConditions"
                            checked={existingConditions === "No"}
                            onChange={() => setExistingConditions("No")}
                          />
                          No
                        </div>
                        {existingConditions === "Yes" && (
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Specify"
                            value={existingConditionsDetails}
                            onChange={(e) => setExistingConditionsDetails(e.target.value)}
                          />
                        )}
                      </div>
                      <div className="col-12 col-md-6" style={{ marginBottom: "15px" }}>
                        <label>Are you taking any medications? <span className="login-danger">*</span></label>
                        <div>
                          <input
                            type="radio"
                            name="takingMedications"
                            checked={takingMedications === "Yes"}
                            onChange={() => setTakingMedications("Yes")}
                          />
                          Yes
                          <input
                            type="radio"
                            name="takingMedications"
                            checked={takingMedications === "No"}
                            onChange={() => setTakingMedications("No")}
                          />
                          No
                        </div>
                        {takingMedications === "Yes" && (
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Specify"
                            value={medicationsDetails}
                            onChange={(e) => setMedicationsDetails(e.target.value)}
                          />
                        )}
                      </div>
                      <div className="col-12 col-md-6" style={{ marginBottom: "15px" }}>
                        <label>Do you have any allergies? <span className="login-danger">*</span></label>
                        <div>
                          <input
                            type="radio"
                            name="allergies"
                            checked={allergies === "Yes"}
                            onChange={() => setAllergies("Yes")}
                          />
                          Yes
                          <input
                            type="radio"
                            name="allergies"
                            checked={allergies === "No"}
                            onChange={() => setAllergies("No")}
                          />
                          No
                        </div>
                        {allergies === "Yes" && (
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Specify"
                            value={allergiesDetails}
                            onChange={(e) => setAllergiesDetails(e.target.value)}
                          />
                        )}
                      </div>
                      <div className="col-12 col-md-6" style={{ marginBottom: "15px" }}>
                        <label>Do you smoke or consume alcohol? <span className="login-danger">*</span></label>
                        <div>
                          <input
                            type="radio"
                            name="smokeAlcohol"
                            checked={smokeAlcohol === "Yes"}
                            onChange={() => setSmokeAlcohol("Yes")}
                          />
                          Yes
                          <input
                            type="radio"
                            name="smokeAlcohol"
                            checked={smokeAlcohol === "No"}
                            onChange={() => setSmokeAlcohol("No")}
                          />
                          No
                        </div>
                        {smokeAlcohol === "Yes" && (
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Specify"
                            value={smokeAlcoholDetails}
                            onChange={(e) => setSmokeAlcoholDetails(e.target.value)}
                          />
                        )}
                      </div>

                      {/* Section 3: Type of Health Check-up Package */}
                      <div className="col-12" style={{ marginBottom: "15px" }}>
                        <h4>Type of Health Check-up Package</h4>
                      </div>
                      <div className="col-12 col-md-6" style={{ marginBottom: "15px" }}>
                        <label>Package Type <span className="login-danger">*</span></label>
                        <Select
                          value={packageType}
                          onChange={setPackageType}
                          options={packageOptions}
                          placeholder="Select Package"
                        />
                      </div>

                      {/* Section 5: Doctor’s Recommendation */}
                      <div className="col-12" style={{ marginBottom: "15px" }}>
                        <h4>Doctor’s Recommendation</h4>
                      </div>
                      <div className="col-12 col-md-6" style={{ marginBottom: "15px" }}>
                        <label>Doctor's Name</label>
                        <Select
                          value={doctorName}
                          onChange={setDoctorName}
                          options={doctorOptions}
                          placeholder="Select Doctor"
                        />
                      </div>
                      <div className="col-12 col-md-6" style={{ marginBottom: "15px" }}>
                        <label>Remarks</label>
                        <textarea
                          className="form-control"
                          rows={3}
                          value={doctorRemarks}
                          onChange={(e) => setDoctorRemarks(e.target.value)}
                        />
                      </div>

                      {/* Save & Cancel Buttons */}
                      <div className="col-12 text-end mt-3">
                        <button type="button" className="btn btn-primary me-2" onClick={handleSave}>
                          Save
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={handleCancel}>
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
  );
};

export default AddAppointments;
