import React, { useState } from "react";
import Select from "react-select";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Link } from "feather-icons-react/build/IconComponents";
import { useLocation, useNavigate } from "react-router-dom";

const OperationRegistration = () => {
      const location = useLocation();
      const record = location.state;
      const navigate = useNavigate();
      console.log("🚀 ~ OTEditor ~ record:", record);

  const [formData, setFormData] = useState(() => ({
    patient: record?.patientName || "",
    operation: record?.operationName || "",
    operationTheater: record?.otName || "",
    template: "",
    operationDate: record?.operationDate || "",
    status: record?.status ? record.status.toUpperCase() : "PENDING",
    operativeNote: "",
    involvedDoctors: record?.involvedDr || "",
    asstSurgeon: "",
    anesthesiologist: "",
    scrubNurse: "",
    duration: record?.duration || "",
    startTime: record?.startTime || "",
    endTime: record?.endTime || "",
    preOperativeDiagnosis: "",
    operativePosition: "",
    anaesthesia: "",
    amount: "",
  }));

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <>
      <Header />
      <Sidebar
        id="menu-item"
        id1="menu-items"
        activeClassName="operative-info"
      />
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="row my-3 ">
              <h2 className="text-center my-3">Operation Registration</h2>

            </div>
            <div className="row my-3 d-flex align-items-center justify-content-center">
              <div className="col-8 bg-light p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group row mb-3">
                        <div className="col-md-12">
                          <Select
                            placeholder="Patient *"
                            value={
                              formData.patient
                                ? {
                                    label: formData.patient,
                                    value: formData.patient,
                                  }
                                : null
                            }
                            onChange={(value) =>
                              handleInputChange("patient", value)
                            }
                            className="basic-single"
                            classNamePrefix="select"
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6">
                          <Select
                            placeholder="Operation *"
                            value={
                              formData.operation
                                ? {
                                    label: formData.operation,
                                    value: formData.operation,
                                  }
                                : null
                            }
                            onChange={(value) =>
                              handleInputChange("operation", value)
                            }
                            className="basic-single"
                            classNamePrefix="select"
                          />
                        </div>
                        <div className="col-md-6">
                          <Select
                            placeholder="Operation Theater"
                            value={
                              formData.operationTheater
                                ? {
                                    label: formData.operationTheater,
                                    value: formData.operationTheater,
                                  }
                                : null
                            }
                            onChange={(value) =>
                              handleInputChange("operationTheater", value)
                            }
                            className="basic-single"
                            classNamePrefix="select"
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-4">
                          <Select
                            placeholder="Template"
                            value={
                              formData.template
                                ? {
                                    label: formData.template,
                                    value: formData.template,
                                  }
                                : null
                            }
                            onChange={(value) =>
                              handleInputChange("template", value)
                            }
                            className="basic-single"
                            classNamePrefix="select"
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            type="date"
                            className="form-control"
                            placeholder="Operation Date *"
                            value={formData.operationDate}
                            onChange={(e) =>
                              handleInputChange("operationDate", e.target.value)
                            }
                          />
                        </div>
                        <div className="col-md-4">
                          <Select
                            placeholder="Status *"
                            value={{
                              label: formData.status,
                              value: formData.status.toLowerCase(),
                            }}
                            onChange={(value) =>
                              handleInputChange("status", value)
                            }
                            className="basic-single"
                            classNamePrefix="select"
                          />
                        </div>
                      </div>

                      <div className="form-group mb-3">
                        <textarea
                          className="form-control"
                          rows={4}
                          placeholder="Operative Note"
                          value={formData.operativeNote}
                          onChange={(e) =>
                            handleInputChange("operativeNote", e.target.value)
                          }
                        />
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6">
                          <Select
                            placeholder="Involved Doctors *"
                            value={
                              formData.involvedDoctors
                                ? {
                                    label: formData.involvedDoctors,
                                    value: formData.involvedDoctors,
                                  }
                                : null
                            }
                            onChange={(value) =>
                              handleInputChange("involvedDoctors", value)
                            }
                            className="basic-single"
                            classNamePrefix="select"
                          />
                        </div>
                        <div className="col-md-6">
                          <Select
                            placeholder="Asst. Surgeon"
                            value={
                              formData.asstSurgeon
                                ? {
                                    label: formData.asstSurgeon,
                                    value: formData.asstSurgeon,
                                  }
                                : null
                            }
                            onChange={(value) =>
                              handleInputChange("asstSurgeon", value)
                            }
                            className="basic-single"
                            classNamePrefix="select"
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6">
                          <Select
                            placeholder="Anesthesiologist"
                            value={
                              formData.anesthesiologist
                                ? {
                                    label: formData.anesthesiologist,
                                    value: formData.anesthesiologist,
                                  }
                                : null
                            }
                            onChange={(value) =>
                              handleInputChange("anesthesiologist", value)
                            }
                            className="basic-single"
                            classNamePrefix="select"
                          />
                        </div>
                        <div className="col-md-6">
                          <Select
                            placeholder="Scrub Nurse"
                            value={
                              formData.scrubNurse
                                ? {
                                    label: formData.scrubNurse,
                                    value: formData.scrubNurse,
                                  }
                                : null
                            }
                            onChange={(value) =>
                              handleInputChange("scrubNurse", value)
                            }
                            className="basic-single"
                            classNamePrefix="select"
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-4">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Duration(minutes)"
                            value={formData.duration}
                            onChange={(e) =>
                              handleInputChange("duration", e.target.value)
                            }
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            type="time"
                            className="form-control"
                            value={formData.startTime}
                            onChange={(e) =>
                              handleInputChange("startTime", e.target.value)
                            }
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            type="time"
                            className="form-control"
                            value={formData.endTime}
                            onChange={(e) =>
                              handleInputChange("endTime", e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="form-group mb-3">
                        <textarea
                          className="form-control"
                          rows={4}
                          placeholder="Pre-Operative Diagnosis"
                          value={formData.preOperativeDiagnosis}
                          onChange={(e) =>
                            handleInputChange(
                              "preOperativeDiagnosis",
                              e.target.value
                            )
                          }
                        />
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-4">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Operative Position"
                            value={formData.operativePosition}
                            onChange={(e) =>
                              handleInputChange(
                                "operativePosition",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Anaesthesia"
                            value={formData.anaesthesia}
                            onChange={(e) =>
                              handleInputChange("anaesthesia", e.target.value)
                            }
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Amount"
                            value={formData.amount}
                            onChange={(e) =>
                              handleInputChange("amount", e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="text-end">
                        <button
                          type="button"
                          className="btn btn-secondary me-2"
                        >
                          Cancel
                        </button>
                        <button type="button" className="btn btn-light me-2">
                          Medicine Print
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Save
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
    </>
  );
};

export default OperationRegistration;
