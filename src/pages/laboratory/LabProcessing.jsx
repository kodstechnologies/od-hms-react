import React, { useState } from "react";
import { Table } from "antd";
import { Link, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";


const LabProcessing = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const navigate =useNavigate();
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns = [
    {
      title: "Sample ID",
      dataIndex: "id",
      sorter: (a, b) => a.id.localeCompare(b.id),
      render: (text, record) => (
        <div>
          <strong>{text}</strong>
          <div className="text-muted small">{record.description}</div>
        </div>
      ),
    },
    {
      title: "Type",
      dataIndex: "type",
      sorter: (a, b) => a.type.localeCompare(b.type),
    },
    {
      title: "Stage",
      dataIndex: "stage",
      sorter: (a, b) => a.stage.localeCompare(b.stage),
    },
    {
      title: "Time Elapsed",
      dataIndex: "timeElapsed",
      sorter: (a, b) => parseInt(a.timeElapsed) - parseInt(b.timeElapsed),
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
      render: (status) => (
        <span
          className={`badge ${
            status === "In Progress"
              ? "bg-warning text-dark"
              : "bg-danger text-white"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record) => (
        <div className="d-flex">
          <Link to={`${record.id}`} className="text-primary me-2">
            View Details
          </Link>
          <Link to="#" className="text-success">
            Complete
          </Link>
        </div>
      ),
    },
  ];

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

  // Sample data for quality metrics
  const qualityMetrics = [
    {
      name: "Processing Accuracy",
      value: 98,
      color: "success",
    },
    {
      name: "Average Processing Time",
      value: 85,
      color: "primary",
    },
    {
      name: "Protocol Adherence",
      value: 95,
      color: "purple",
    },
  ];

  // Sample data for standard protocols
  const standardProtocols = [
    {
      title: "Blood Sample Processing",
      description: "Standard protocol for processing blood samples",
      action: "View",
    },
    {
      title: "Tissue Processing",
      description: "Protocol for tissue sample preparation",
      action: "View",
    },
    {
      title: "Urine Analysis",
      description: "Standard protocol for urine sample processing",
      action: "View",
    },
  ];

  return (
    <>
      <Header />
      <Sidebar
        id="laboratory-menu-item"
        id1="laboratory-menu-items"
        activeClassName="LabProcessing"
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
              <li className="breadcrumb-item active">Processing</li>
            </ul>
          </div>

          {/* Status Cards */}
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">Total Samples</p>
                    <h2 className="mb-0">156</h2>
                  </div>
                  <div className="dash-icon-circle dash-icon-circle-md bg-info bg-opacity-10 p-3">
                    <FeatherIcon icon="database" className="text-info" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">In Process</p>
                    <h2 className="mb-0">42</h2>
                  </div>
                  <div className="dash-icon-circle dash-icon-circle-md bg-warning bg-opacity-10 p-3">
                    <FeatherIcon icon="clock" className="text-dark" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">Critical</p>
                    <h2 className="mb-0">8</h2>
                  </div>
                  <div className="dash-icon-circle dash-icon-circle-md bg-danger bg-opacity-10 p-3">
                    <FeatherIcon icon="alert-triangle" className="text-dark" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">Completed</p>
                    <h2 className="mb-0">106</h2>
                  </div>
                  <div className="dash-icon-circle dash-icon-circle-md bg-success bg-opacity-10 p-3">
                    <FeatherIcon icon="check-circle" className="text-success" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Status Cards */}

          {/* Current Processing Queue */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="card-title mb-0">Current Processing Queue</h4>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("create")}
                >
                  <FeatherIcon icon="plus" size={14} className="me-1" /> Start
                  New Process
                </button>
              </div>
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={processingQueue}
                  rowSelection={rowSelection}
                  rowKey={(record) => record.id}
                  pagination={{ pageSize: 5 }}
                />
              </div>
            </div>
          </div>
          {/* /Current Processing Queue */}

          {/* Standard Protocols and Quality Metrics */}
          <div className="row">
            {/* Standard Protocols */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Standard Protocols</h4>
                  <div className="protocols-list">
                    {standardProtocols.map((protocol, index) => (
                      <div
                        key={index}
                        className="protocol-item border-bottom py-3"
                      >
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h5 className="mb-1">{protocol.title}</h5>
                            <p className="text-muted mb-0 small">
                              {protocol.description}
                            </p>
                          </div>
                          <Link
                            to={`protocol`}
                            state={{ protocol }}
                            className="text-primary"
                          >
                            View
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* /Standard Protocols */}

            {/* Quality Metrics */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Quality Metrics</h4>
                  <div className="metrics-list">
                    {qualityMetrics.map((metric, index) => (
                      <div key={index} className="metric-item mb-3">
                        <div className="d-flex justify-content-between mb-1">
                          <span>{metric.name}</span>
                          <span>{metric.value}%</span>
                        </div>
                        <div className="progress" style={{ height: "8px" }}>
                          <div
                            className={`progress-bar bg-${metric.color}`}
                            role="progressbar"
                            style={{ width: `${metric.value}%` }}
                            aria-valuenow={metric.value}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* /Quality Metrics */}
          </div>
          {/* /Standard Protocols and Quality Metrics */}
        </div>
      </div>
    </>
  );
};

export default LabProcessing;
