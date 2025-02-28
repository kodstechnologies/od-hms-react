"use client";

import { useState } from "react";
import { Table } from "antd";
import FeatherIcon from "feather-icons-react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../layouts/header";
import { onShowSizeChange, itemRender } from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";
import { Button } from "react-bootstrap";

const OrganDonorDetails = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const navigate = useNavigate();

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns = [
    {
      title: "Donor ID",
      dataIndex: "donorId",
      sorter: (a, b) => a.donorId.localeCompare(b.donorId),
    },
    {
      title: "Donor Name",
      dataIndex: "donorName",
      sorter: (a, b) => a.donorName.localeCompare(b.donorName),
    },
    {
      title: "Age",
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Blood Type",
      dataIndex: "bloodType",
      sorter: (a, b) => a.bloodType.localeCompare(b.bloodType),
    },
    {
      title: "Organs Available",
      dataIndex: "organsAvailable",
      sorter: (a, b) => a.organsAvailable.localeCompare(b.organsAvailable),
    },
    {
      title: "Registration Date",
      dataIndex: "registrationDate",
      sorter: (a, b) =>
        new Date(a.registrationDate) - new Date(b.registrationDate),
    },
    {
      title: "Donor Status",
      dataIndex: "donorStatus",
      sorter: (a, b) => a.donorStatus.localeCompare(b.donorStatus),
    },
    {
      title: "Preview",
      dataIndex: "preview",
      render: (_, record) => (
        <Button
          type="primary"
          onClick={() => navigate('preview')}
        >
          View
        </Button>
      ),
    },
  ];

  const organDonorData = [
    {
      donorId: "DON001",
      donorName: "Rahul Sharma",
      age: 35,
      bloodType: "O+",
      organsAvailable: "Kidney, Liver",
      registrationDate: "2024-02-15",
      donorStatus: "Living",
    },
    {
      donorId: "DON002",
      donorName: "Priya Patel",
      age: 28,
      bloodType: "A-",
      organsAvailable: "Corneas",
      registrationDate: "2024-02-18",
      donorStatus: "Living",
    },
    {
      donorId: "DON003",
      donorName: "Amit Singh",
      age: 45,
      bloodType: "B+",
      organsAvailable: "Heart, Lungs",
      registrationDate: "2024-02-10",
      donorStatus: "Deceased",
    },
    {
      donorId: "DON004",
      donorName: "Sneha Reddy",
      age: 32,
      bloodType: "AB+",
      organsAvailable: "Kidney",
      registrationDate: "2024-02-20",
      donorStatus: "Living",
    },
    {
      donorId: "DON005",
      donorName: "Vikram Malhotra",
      age: 50,
      bloodType: "O-",
      organsAvailable: "Liver, Pancreas",
      registrationDate: "2024-02-05",
      donorStatus: "Deceased",
    },
  ];

  return (
    <>
      <Header />
      <Sidebar
        id="reception-dropmenu"
        id1="reception-items"
        activeClassName="OrganDonorDetails"
      />
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <FeatherIcon icon="chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">
                    Organ Donor Details
                  </li>
                </ul>
              </div>
              <div className="mt-3">
                <button
                  className="btn btn-primary me-2"
                  onClick={() => navigate("create")}
                >
                  <i className="bi bi-plus-circle me-2"></i>
                  New Donor
                </button>
                <button className="btn btn-outline-secondary">
                  <i className="bi bi-funnel me-2"></i>
                  Filter
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card-box">
                <div className="card-block">
                  <h6 className="card-title text-bold">Organ Donor Details</h6>
                  <div className="table-responsive">
                    <Table
                      pagination={{
                        total: organDonorData.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      columns={columns}
                      dataSource={organDonorData}
                      rowSelection={rowSelection}
                      rowKey={(record) => record.donorId}
                    />
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

export default OrganDonorDetails;
