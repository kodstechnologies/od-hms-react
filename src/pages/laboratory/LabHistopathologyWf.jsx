import { useState } from "react";
import { Table } from "antd";
import { Link, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";

const HistopathologyWorkflows = () => {
  const navigate = useNavigate();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // Row Selection Configuration
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys) => setSelectedRowKeys(selectedKeys),
  };

  const columns = [
    {
      title: "CASE ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id.localeCompare(b.id),
    },
    {
      title: "PATIENT INFO",
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
      sorter: (a, b) => a.patient.name.localeCompare(b.patient.name),
    },
    {
      title: "SPECIMEN TYPE",
      dataIndex: "specimenType",
      key: "specimenType",
      sorter: (a, b) => a.specimenType.localeCompare(b.specimenType),
    },
    {
      title: "STAGE",
      dataIndex: "stage",
      key: "stage",
      sorter: (a, b) => a.stage.localeCompare(b.stage),
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
      render: (status) => {
        let badgeClass = "badge ";
        switch (status) {
          case "In Progress":
            badgeClass += "bg-warning text-dark";
            break;
          case "Ready for Review":
            badgeClass += "bg-success";
            break;
          default:
            badgeClass += "bg-primary";
        }
        return <span className={badgeClass}>{status}</span>;
      },
    },
    {
      title: "ACTIONS",
      key: "actions",
      render: () => (
        <div className="d-flex gap-2">
          <Link to="#" className="text-primary">
            View
          </Link>
          <Link to="#" className="text-success">
            Edit
          </Link>
          <Link to="#" className="text-danger">
            Delete
          </Link>
        </div>
      ),
    },
  ];

  // Sample data for active cases
const activeCases = [
  {
    id: "#HIST-2023-001",
    patient: {
      name: "Arjun Mehta",
      id: "#PAT-2023-001",
      avatar: "A",
    },
    specimenType: "Breast Biopsy",
    stage: "Processing",
    status: "In Progress",
  },
  {
    id: "#HIST-2023-002",
    patient: {
      name: "Pooja Nair",
      id: "#PAT-2023-002",
      avatar: "P",
    },
    specimenType: "Liver Biopsy",
    stage: "Staining",
    status: "Ready for Review",
  },
];


  return (
    <>
      <Header />
      <Sidebar
        id="laboratory-menu-item"
        id1="laboratory-menu-items"
        activeClassName="LabHistopathology"
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
              <li className="breadcrumb-item active">Histopathology</li>
            </ul>
          </div>

          {/* Status Cards */}
          <div className="row mb-4">
            <div className="col-md-3">
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">Active Cases</p>
                    <h2 className="mb-0">32</h2>
                  </div>
                  <div className="dash-icon-circle dash-icon-circle-md bg-primary bg-opacity-10 p-3">
                    <FeatherIcon icon="clipboard" className="text-primary" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">Processing</p>
                    <h2 className="mb-0">15</h2>
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
                    <p className="text-muted mb-1">Completed</p>
                    <h2 className="mb-0">248</h2>
                  </div>
                  <div className="dash-icon-circle dash-icon-circle-md bg-success bg-opacity-10 p-3">
                    <FeatherIcon icon="check-circle" className="text-success" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">Critical</p>
                    <h2 className="mb-0">5</h2>
                  </div>
                  <div className="dash-icon-circle dash-icon-circle-md bg-danger bg-opacity-10 p-3">
                    <FeatherIcon
                      icon="alert-triangle"
                      className="text-dark"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Specimen Analysis Button */}
          <div className="mb-4">
            <button
              className="btn btn-primary"
              onClick={() => navigate("create")}
            >
              <FeatherIcon icon="plus" size={14} className="me-1" />
              New Specimen Analysis
            </button>
          </div>

          {/* Active Cases Table */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="card-title mb-0">Active Cases</h4>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-secondary">
                    <FeatherIcon icon="filter" size={14} className="me-1" />{" "}
                    Filter
                  </button>
                </div>
              </div>
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={activeCases}
                  rowKey={(record) => record.id}
                  pagination={{ pageSize: 10 }}
                  rowSelection={rowSelection}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistopathologyWorkflows;
