import React, { useState } from "react";
import { Table } from "antd";
import { Link, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";

const LabReport = () => {
  const navigate=useNavigate();
const columns = [
  {
    title: "REPORT ID",
    dataIndex: "id",
    key: "id",
    sorter: (a, b) => a.id.localeCompare(b.id), // Sorting for Report ID
  },
  {
    title: "PATIENT",
    dataIndex: "patient",
    key: "patient",
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
    sorter: (a, b) => a.patient.name.localeCompare(b.patient.name), // Sorting for Patient Name
  },
  {
    title: "TYPE",
    dataIndex: "type",
    key: "type",
    sorter: (a, b) => a.type.localeCompare(b.type), // Sorting for Report Type
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    sorter: (a, b) => a.status.localeCompare(b.status), // Sorting for Status
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
    title: "GENERATED ON",
    dataIndex: "generatedOn",
    key: "generatedOn",
    sorter: (a, b) => new Date(a.generatedOn) - new Date(b.generatedOn), // Sorting for Date
  },
  {
    title: "ACTIONS",
    key: "actions",
    render: (_, record) => (
      <div className="d-flex gap-2">
        <Link to={`record`} state={{ record }} className="text-primary">
          View
        </Link>
        <Link to="#" className="text-success">
          Print
        </Link>
        <Link to="#" className="text-danger">
          Delete
        </Link>
      </div>
    ),
  },
];


  // Sample data for recent reports
const recentReports = [
  {
    id: "#REP-2023-001",
    patient: {
      name: "Rahul Sharma",
      id: "#PAT-2023-001",
      avatar: "R",
    },
    type: "Blood Analysis",
    status: "Completed",
    generatedOn: "2023-10-25",
    actions: ["View", "Print", "Delete"],
  },
  {
    id: "#REP-2023-002",
    patient: {
      name: "Sneha Iyer",
      id: "#PAT-2023-002",
      avatar: "S",
    },
    type: "Pathology",
    status: "Pending",
    generatedOn: "2023-10-25",
    actions: ["View", "Print", "Delete"],
  },
];


  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // Row Selection Configuration
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys) => setSelectedRowKeys(selectedKeys),
  };

  return (
    <>
      <Header />
      <Sidebar
        id="laboratory-menu-item"
        id1="laboratory-menu-items"
        activeClassName="LabReporting"
      />
      <div className="page-wrapper">
        <div className="content">
          <div className="col-sm-12 mb-2">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/laboratory/dashboard">Laboratory </Link>
              </li>
              <li className="breadcrumb-item">
                <FeatherIcon icon="chevron-right" />
              </li>
              <li className="breadcrumb-item active">Reports</li>
            </ul>
          </div>

          {/* Status Cards */}
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">Pending Reports</p>
                    <h2 className="mb-0">28</h2>
                  </div>
                  <div className="dash-icon-circle dash-icon-circle-md bg-warning bg-opacity-10 p-3">
                    <FeatherIcon icon="clock" className="text-dark" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">Generated Today</p>
                    <h2 className="mb-0">45</h2>
                  </div>
                  <div className="dash-icon-circle dash-icon-circle-md bg-success bg-opacity-10 p-3">
                    <FeatherIcon icon="check-circle" className="text-success" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">Critical Reports</p>
                    <h2 className="mb-0">7</h2>
                  </div>
                  <div className="dash-icon-circle dash-icon-circle-md bg-danger bg-opacity-10 p-3">
                    <FeatherIcon icon="alert-triangle" className="text-dark" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Status Cards */}

          {/* Recent Reports */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex align-items-center justify-content-center gap-3">
                  <h4 className="card-title mb-0">Recent Reports</h4>
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("create")}
                  >
                    <FeatherIcon icon="plus" size={14} className="me-1" />
                    New Report
                  </button>
                </div>
                <div className="d-flex gap-2">
                  <div className="position-relative">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search reports..."
                    />
                    <FeatherIcon
                      icon="search"
                      className="position-absolute top-50 end-0 translate-middle-y me-2 text-muted"
                      size={16}
                    />
                  </div>
                  <button className="btn btn-outline-secondary">
                    <FeatherIcon icon="filter" size={14} className="me-1" />{" "}
                    Filter
                  </button>
                </div>
              </div>
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={recentReports}
                  rowKey={(record) => record.id}
                  pagination={{ pageSize: 5 }}
                  rowSelection={rowSelection}
                />
              </div>
            </div>
          </div>
          {/* /Recent Reports */}
        </div>
      </div>
    </>
  );
};

export default LabReport;
