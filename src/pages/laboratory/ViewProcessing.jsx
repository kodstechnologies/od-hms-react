import React from "react";
import { useParams } from "react-router-dom";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Link } from "react-router-dom";

const processingQueue = [
  {
    id: "SMP001",
    description: "Blood sample - Routine checkup",
    type: "Blood Test",
    stage: "Initial Processing",
    timeElapsed: "15 mins",
    status: "In Progress",
  },
  {
    id: "SMP002",
    description: "Urine sample - Kidney Function Test",
    type: "Urine Test",
    stage: "Analysis",
    timeElapsed: "30 mins",
    status: "In Progress",
  },
  {
    id: "SMP003",
    description: "X-Ray for Chest Pain Diagnosis",
    type: "Radiology",
    stage: "Scanning",
    timeElapsed: "10 mins",
    status: "Critical",
  },
  {
    id: "SMP004",
    description: "MRI Scan - Brain Tumor Detection",
    type: "MRI",
    stage: "Scanning",
    timeElapsed: "45 mins",
    status: "Critical",
  },
  {
    id: "SMP005",
    description: "CBC Blood Test",
    type: "Blood Test",
    stage: "Reviewing",
    timeElapsed: "20 mins",
    status: "In Progress",
  },
];

const ViewProcessing = () => {
  const { id } = useParams();
  const process = processingQueue.find((item) => item.id === id);

  if (!process) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <p className="text-danger fw-bold fs-5">Process not found</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Sidebar id="laboratory-menu-item" activeClassName="ViewProcessing" />

      <div className="page-wrapper">
        <div className="content py-4">
          <div className="col-sm-12 mb-2">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/laboratory/dashboard">Laboratory </Link>
              </li>
              <li className="breadcrumb-item">
                <FeatherIcon icon="chevron-right" />
              </li>
              <li className="breadcrumb-item active">Processing</li>
              <li className="breadcrumb-item">
                <FeatherIcon icon="chevron-right" />
              </li>
              <li className="breadcrumb-item active">View</li>
            </ul>
          </div>
          <div className="card shadow-sm border-0">
            <div className="card-body px-4 py-4">
              <h4 className="card-title text-center text-uppercase fw-bold mb-4">
                Process Details
              </h4>
              <hr />

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Sample ID</label>
                  <input
                    type="text"
                    className="form-control bg-light"
                    value={process.id}
                    disabled
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Type</label>
                  <input
                    type="text"
                    className="form-control bg-light"
                    value={process.type}
                    disabled
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Stage</label>
                  <input
                    type="text"
                    className="form-control bg-light"
                    value={process.stage}
                    disabled
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Time Elapsed</label>
                  <input
                    type="text"
                    className="form-control bg-light"
                    value={process.timeElapsed}
                    disabled
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Status</label>
                  <input
                    type="text"
                    className="form-control bg-light"
                    value={process.status}
                    disabled
                  />
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label fw-semibold">Description</label>
                  <textarea
                    className="form-control bg-light"
                    rows="3"
                    value={process.description}
                    disabled
                  ></textarea>
                </div>
              </div>

              <hr className="mt-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProcessing;
