import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { Table } from "antd";
import { onShowSizeChange, itemRender } from "../../components/Pagination";
import { Link } from "react-router-dom";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";

const LabSendReceive = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const navigate = useNavigate();

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // Table columns
  const columns = [
    {
      title: "Transfer ID",
      dataIndex: "id",
      sorter: (a, b) => a.id.localeCompare(b.id),
    },
    {
      title: "Sample ID",
      dataIndex: "sampleId",
      sorter: (a, b) => a.sampleId.localeCompare(b.sampleId),
    },
    {
      title: "From",
      dataIndex: "from",
      sorter: (a, b) => a.from.localeCompare(b.from),
    },
    {
      title: "To",
      dataIndex: "to",
      sorter: (a, b) => a.to.localeCompare(b.to),
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
      render: (status) =>
        status === "In Transit" ? (
          <span className="badge bg-warning text-dark">In Transit</span>
        ) : (
          <span className="badge bg-secondary">Pending</span>
        ),
    },
    {
      title: "Priority",
      dataIndex: "priority",
      sorter: (a, b) => a.priority.localeCompare(b.priority),
      render: (priority) =>
        priority === "Urgent" ? (
          <span className="badge bg-danger">Urgent</span>
        ) : (
          <span className="badge bg-light text-dark">Normal</span>
        ),
    },
    {
      title: "Actions",
      render: (row) => (
        <div className="d-flex">
          <Link to="#" className="text-primary me-2">
            Track
          </Link>
          <Link to="#" className="text-success">
            Complete
          </Link>
        </div>
      ),
    },
  ];

  // Sample data
  const activeTransfers = [
    {
      id: "#TRF-2023-001",
      sampleId: "#SAM-2023-001",
      from: "Collection Center",
      to: "Laboratory",
      status: "In Transit",
      priority: "Urgent",
    },
    {
      id: "#TRF-2023-002",
      sampleId: "#SAM-2023-002",
      from: "Laboratory",
      to: "Pathology",
      status: "Pending",
      priority: "Normal",
    },
  ];

  return (
    <>
      <Header />
      <Sidebar
        id="laboratory-menu-item"
        id1="laboratory-menu-items"
        activeClassName="LabSendReceive"
      />
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/laboratory/dashboard">Laboratory</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <FeatherIcon icon="chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">Transfers</li>
                </ul>
              </div>
              <div className="mt-3">
                <button
                  className="btn btn-primary me-2"
                  onClick={() => navigate("create")}
                >
                  <i className="fa fa-plus-circle me-2"></i>
                  Create
                </button>
                <button className="btn btn-outline-secondary me-2">
                  <i className="fa fa-filter me-2"></i>
                  Filter
                </button>
                <button className="btn btn-outline-secondary">
                  <i className="fa fa-download me-2"></i>
                  Export
                </button>
              </div>
            </div>
          </div>

          {/* Status Summary */}
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">Pending Transfers</p>
                    <h2 className="mb-0">24</h2>
                  </div>
                  <div className="dash-icon-circle dash-icon-circle-md bg-warning bg-opacity-10">
                    <FeatherIcon icon="clock" className="text-light" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">In Transit</p>
                    <h2 className="mb-0">12</h2>
                  </div>
                  <div className="dash-icon-circle dash-icon-circle-md bg-primary bg-opacity-10 p-3">
                    <FeatherIcon icon="truck" className="text-primary" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">Completed Today</p>
                    <h2 className="mb-0">45</h2>
                  </div>
                  <div className="dash-icon-circle dash-icon-circle-md bg-success bg-opacity-10 p-3">
                    <FeatherIcon icon="check" className="text-success" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transfers Table */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card-box">
                <div className="card-block">
                  <h6 className="card-title text-bold">Active Transfers</h6>
                  <div className="table-responsive">
                    <Table
                      pagination={{
                        total: activeTransfers.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      columns={columns}
                      dataSource={activeTransfers}
                      rowSelection={rowSelection}
                      rowKey={(record) => record.id}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Transfers Table */}
        </div>
      </div>
    </>
  );
};

export default LabSendReceive;
