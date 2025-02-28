"use client";

import { useState } from "react";
import { Table } from "antd";
import { Link, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";

const LabDoorStepSampleCollection = () => {
  const navigate = useNavigate();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // Row Selection Configuration
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys) => setSelectedRowKeys(selectedKeys),
  };

  const columns = [
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      sorter: (a, b) =>
        new Date("1970/01/01 " + a.time) - new Date("1970/01/01 " + b.time),
    },
    {
      title: "Patient",
      dataIndex: "patient",
      key: "patient",
      sorter: (a, b) => a.patient.localeCompare(b.patient),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      sorter: (a, b) => a.location.localeCompare(b.location),
    },
    {
      title: "Phlebotomist",
      dataIndex: "phlebotomist",
      key: "phlebotomist",
      sorter: (a, b) => a.phlebotomist.localeCompare(b.phlebotomist),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
      render: (status) => {
        let badgeClass = "badge ";
        switch (status) {
          case "Completed":
            badgeClass += "bg-success";
            break;
          case "In Progress":
            badgeClass += "bg-info";
            break;
          case "Pending":
            badgeClass += "bg-warning";
            break;
          default:
            badgeClass += "bg-secondary";
        }
        return <span className={badgeClass}>{status}</span>;
      },
    },
  ];

const appointments = [
  {
    key: "1",
    time: "09:00 AM",
    patient: "Amit Sharma",
    location: "12 MG Road, Delhi",
    phlebotomist: "Dr. Neha",
    status: "Completed",
  },
  {
    key: "2",
    time: "10:30 AM",
    patient: "Sneha Iyer",
    location: "45 Jayanagar, Bengaluru",
    phlebotomist: "Dr. Rajesh",
    status: "In Progress",
  },
  {
    key: "3",
    time: "11:45 AM",
    patient: "Vikram Singh",
    location: "78 Park Street, Kolkata",
    phlebotomist: "Dr. Pooja",
    status: "Pending",
  },
];


  const kitInventory = [
    { type: "Blood Collection", count: 32, variant: "success" },
    { type: "Urine Collection", count: 28, variant: "success" },
    { type: "Swab Collection", count: 15, variant: "warning" },
    { type: "Special Tests", count: 10, variant: "danger" },
  ];

  return (
    <>
      <Header />
      <Sidebar
        id="laboratory-menu-item"
        id1="laboratory-menu-items"
        activeClassName="DoorStepSampleCollection"
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
              <li className="breadcrumb-item active">Door Step Sample Collection</li>
            </ul>
          </div>

          {/* Status Cards */}
          <div className="row mb-4">
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-muted mb-0">
                    Today's Collections
                  </h6>
                  <h2 className="mt-2 mb-1">24</h2>
                  <p className="text-success mb-0">
                    <small>8 completed</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-muted mb-0">Pending</h6>
                  <h2 className="mt-2 mb-1">16</h2>
                  <p className="text-primary mb-0">
                    <small>Next 2 hours: 5</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-muted mb-0">Phlebotomists</h6>
                  <h2 className="mt-2 mb-1">12</h2>
                  <p className="text-success mb-0">
                    <small>8 active</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-muted mb-0">
                    Collection Kits
                  </h6>
                  <h2 className="mt-2 mb-1">85</h2>
                  <p className="text-warning mb-0">
                    <small>Restock soon</small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Today's Appointments */}
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="card-title mb-0">Today's Appointments</h4>
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate("create")}
                    >
                      New Appointment
                    </button>
                  </div>
                  <div className="table-responsive">
                    <Table
                      columns={columns}
                      dataSource={appointments}
                      rowSelection={rowSelection}
                      pagination={false}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-md-4">

              {/* Kit Inventory */}
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-4">Kit Inventory</h4>
                  <div className="d-grid gap-3">
                    {kitInventory.map((kit, index) => (
                      <div
                        key={index}
                        className="d-flex justify-content-between align-items-center"
                      >
                        <span>{kit.type}</span>
                        <span className={`badge bg-${kit.variant}`}>
                          {kit.count} kits
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabDoorStepSampleCollection;
