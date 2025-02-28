import React, { useState } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";

const LabOutsource = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // Row Selection Configuration
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys) => setSelectedRowKeys(selectedKeys),
  };

  const columns = [
    {
      title: "Sample ID",
      dataIndex: "sampleId",
      key: "sampleId",
      sorter: (a, b) => a.sampleId.localeCompare(b.sampleId),
    },
    {
      title: "Partner Lab",
      dataIndex: "partnerLab",
      key: "partnerLab",
      sorter: (a, b) => a.partnerLab.localeCompare(b.partnerLab),
    },
    {
      title: "Test Type",
      dataIndex: "testType",
      key: "testType",
      sorter: (a, b) => a.testType.localeCompare(b.testType),
    },
    {
      title: "Sent Date",
      dataIndex: "sentDate",
      key: "sentDate",
      sorter: (a, b) => new Date(a.sentDate) - new Date(b.sentDate),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
      render: (status) => {
        let badgeClass = "badge ";
        let bgColor = "";

        switch (status) {
          case "In Progress":
            bgColor = "bg-info bg-opacity-10 text-info";
            break;
          case "Completed":
            bgColor = "bg-success bg-opacity-10 text-success";
            break;
          case "Pending":
            bgColor = "bg-warning bg-opacity-10 text-warning";
            break;
          default:
            bgColor = "bg-secondary bg-opacity-10 text-secondary";
        }

        return (
          <span className={`${badgeClass} ${bgColor} px-3 py-1 rounded-pill`}>
            {status}
          </span>
        );
      },
    },
  ];

  // Sample data for recent outsourced samples
  const recentSamples = [
    {
      key: "1",
      sampleId: "OS-2023-001",
      partnerLab: "Central Labs",
      testType: "Genetic Testing",
      sentDate: "2023-12-01",
      status: "In Progress",
    },
    {
      key: "2",
      sampleId: "OS-2023-002",
      partnerLab: "Advanced Diagnostics",
      testType: "Molecular Testing",
      sentDate: "2023-12-02",
      status: "Completed",
    },
    {
      key: "3",
      sampleId: "OS-2023-003",
      partnerLab: "PathLab Plus",
      testType: "Special Chemistry",
      sentDate: "2023-12-03",
      status: "Pending",
    },
  ];

  return (
    <>
      <Header />
      <Sidebar
        id="laboratory-menu-item"
        id1="laboratory-menu-items"
        activeClassName="LabOutsource"
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
              <li className="breadcrumb-item active">
                Outsource
              </li>
            </ul>
          </div>

          {/* Status Cards */}
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title mb-0">Active Samples</h5>
                    <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-pill">
                      42 Active
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">In Transit</span>
                    <span>15</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Processing</span>
                    <span>18</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Pending Results</span>
                    <span>9</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title mb-0">Partner Labs</h5>
                    <span className="badge bg-success bg-opacity-10 text-success px-3 py-1 rounded-pill">
                      12 Active
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Connected</span>
                    <span>8</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Pending</span>
                    <span>3</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Inactive</span>
                    <span>1</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title mb-0">TAT Monitoring</h5>
                    <span className="badge bg-warning bg-opacity-10 text-warning px-3 py-1 rounded-pill">
                      Avg 2.3 Days
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Within TAT</span>
                    <span>85%</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Delayed</span>
                    <span>12%</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Critical</span>
                    <span>3%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Outsourced Samples */}
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title mb-4">Recent Outsourced Samples</h4>
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={recentSamples}
                  rowKey={(record) => record.key}
                  pagination={{ pageSize: 10 }}
                  rowSelection={rowSelection}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="row p-2">
            <div className="col-md-3">
              <Link
                to="create"
                className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2 py-2"
              >
                <FeatherIcon icon="plus" size={16} />
                <span>New Outsource Request</span>
              </Link>
            </div>
            <div className="col-md-3">
              <Link
                // to="/generate-reports"
                className="btn btn-light w-100 d-flex align-items-center justify-content-center gap-2 py-2"
              >
                <FeatherIcon icon="file-text" size={16} />
                <span>Generate Reports</span>
              </Link>
            </div>
            <div className="col-md-3">
              <Link
                // to="/track-samples"
                className="btn btn-light w-100 d-flex align-items-center justify-content-center gap-2 py-2"
              >
                <FeatherIcon icon="eye" size={16} />
                <span>Track Samples</span>
              </Link>
            </div>
            <div className="col-md-3">
              <Link
                // to="/partner-settings"
                className="btn btn-light w-100 d-flex align-items-center justify-content-center gap-2 py-2"
              >
                <FeatherIcon icon="settings" size={16} />
                <span>Partner Settings</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabOutsource;
