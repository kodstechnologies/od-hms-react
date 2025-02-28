import React, { useState } from "react";
import { Table } from "antd";
import { Link, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";

const LabRadiologyReport = () => {
  const navigate = useNavigate();

const columns = [
  {
    title: "PATIENT ID",
    dataIndex: "patient",
    key: "patient",
    sorter: (a, b) => a.patient.id.localeCompare(b.patient.id),
    render: (patient) => (
      <div className="d-flex align-items-center">
        <div
          className="avatar-xs me-2 bg-primary text-white dash-icon-circle dash-icon-circle-md d-flex align-items-center justify-content-center"
          style={{ width: "32px", height: "32px" }}
        >
          {patient.avatar}
        </div>
        <div>
          <div>{patient.name}</div>
          <div className="text-muted small">{patient.id}</div>
        </div>
      </div>
    ),
  },
  {
    title: "SCAN TYPE",
    dataIndex: "scanType",
    key: "scanType",
    sorter: (a, b) => a.scanType.localeCompare(b.scanType),
  },
  {
    title: "BODY PART",
    dataIndex: "bodyPart",
    key: "bodyPart",
    sorter: (a, b) => a.bodyPart.localeCompare(b.bodyPart),
  },
  {
    title: "DATE",
    dataIndex: "date",
    key: "date",
    sorter: (a, b) => new Date(a.date) - new Date(b.date),
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    sorter: (a, b) => a.status.localeCompare(b.status),
    render: (status) => (
      <span
        className={`badge ${
          status === "Completed" ? "bg-success" : "bg-warning text-dark"
        }`}
      >
        {status}
      </span>
    ),
  },
  {
    title: "ACTIONS",
    key: "actions",
    render: (_, record) => (
      <div className="d-flex gap-2">
        <Link to="#" className="text-primary">
          View
        </Link>
        <Link to="#" className="text-success">
          Print
        </Link>
      </div>
    ),
  },
];

const recentReports = [
  {
    patient: {
      name: "Rohan Gupta",
      id: "#PAT-2023-001",
      avatar: "R",
    },
    scanType: "X-Ray",
    bodyPart: "Chest",
    date: "2023-10-25",
    status: "Completed",
  },
  {
    patient: {
      name: "Ananya Pillai",
      id: "#PAT-2023-002",
      avatar: "A",
    },
    scanType: "MRI",
    bodyPart: "Brain",
    date: "2023-10-25",
    status: "In Progress",
  },
];


  return (
    <>
      <Header />
      <Sidebar
        id="laboratory-menu-item"
        id1="laboratory-menu-items"
        activeClassName="LabRadiologyReporting"
      />
      <div className="page-wrapper">
        <div className="content">
          <div className="col-sm-12 mb-2">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/laboratory/dashboard">Laboratory </Link>
              </li>
            </ul>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">Today's Scans</p>
                    <h2 className="mb-0">24</h2>
                  </div>
                  <div className="dash-icon-circle dash-icon-circle-md bg-primary bg-opacity-10 p-3">
                    <i className="fas fa-x-ray text-light"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">Pending Reports</p>
                    <h2 className="mb-0">12</h2>
                  </div>
                  <div className="dash-icon-circle dash-icon-circle-md bg-warning bg-opacity-10 p-3">
                    <i className="fas fa-clock text-light"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">In Progress</p>
                    <h2 className="mb-0">8</h2>
                  </div>
                  <div className="dash-icon-circle dash-icon-circle-md bg-info bg-opacity-10 p-3">
                    <i className="fas fa-spinner text-light"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">Completed</p>
                    <h2 className="mb-0">156</h2>
                  </div>
                  <div className="dash-icon-circle dash-icon-circle-md bg-success bg-opacity-10 p-3">
                    <i className="fas fa-check-circle text-light"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-start gap-3">
                <h4 className="card-title mb-0">Recent Reports</h4>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("create")}
                >
                  <FeatherIcon icon="plus" size={14} className="me-1" />
                  New Report
                </button>
              </div>
              <Table
                columns={columns}
                dataSource={recentReports}
                rowKey={(record) => record.patient.id}
                pagination={{ pageSize: 5 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabRadiologyReport;
