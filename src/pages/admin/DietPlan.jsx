/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "antd";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { plusicon, refreshicon, searchnormal } from "../../components/imagepath";

const DietPlan = () => {
  const navigate = useNavigate();

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const data = [
    {
      key: "1",
      patientName: "Ram Kumar",
      room: 201,
      dietType: "Diabetic",
      mealTime: "Breakfast",
      status: "Delivered",
    },
    {
      key: "2",
      patientName: "Raj Kumar",
      room: 305,
      dietType: "Low Sodium",
      mealTime: "Lunch",
      status: "Preparing",
    },
    {
      key: "3",
      patientName: "Ravi Kumar",
      room: 103,
      dietType: "Liquid",
      mealTime: "Lunch",
      status: "Scheduled",
    },
  ];

  const columns = [
    {
      title: "Patient",
      dataIndex: "patientName",
      key: "patientName",
    },
    {
      title: "Room",
      dataIndex: "room",
      key: "room",
    },
    {
      title: "Diet Type",
      dataIndex: "dietType",
      key: "dietType",
    },
    {
      title: "Meal Time",
      dataIndex: "mealTime",
      key: "mealTime",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          style={{
            padding: "5px 10px",
            borderRadius: "20px",
            color:
              status === "Delivered"
                ? "green"
                : status === "Preparing"
                ? "orange"
                : "blue",
            backgroundColor:
              status === "Delivered"
                ? "rgba(0, 255, 0, 0.2)"
                : status === "Preparing"
                ? "rgba(255, 165, 0, 0.2)"
                : "rgba(0, 0, 255, 0.2)",
            fontWeight: "bold",
          }}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <div className="text-end">
          <div className="dropdown dropdown-action">
            <Link
              to="#"
              className="action-icon dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v" />
            </Link>
            <div className="dropdown-menu dropdown-menu-end">
              <Link className="dropdown-item" to="/edit-diet-plan">
                <i className="far fa-edit me-2" />
                Edit
              </Link>
              <Link
                className="dropdown-item"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#delete_diet_plan"
              >
                <i className="fa fa-trash-alt m-r-5"></i> Delete
              </Link>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys) => {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      setSelectedRowKeys(newSelectedRowKeys);
    },
  };

  const handleAddDiet = () => {
    navigate("/diet/Add-diet");
  };

  return (
    <>
      <Header />
      <Sidebar id="menu-item" id1="menu-items" activeClassName="DietPlan" />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Diet Management</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Diet Plan</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}

          {/* Section 1: Today's Diet Schedule */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table show-entire">
                <div className="card-body">
                  {/* Table Header */}
                  <div className="page-table-header mb-2">
                    <div className="row align-items-center">
                      <div className="col">
                        <div className="doctor-table-blk">
                          <h3>Today's Diet Schedule</h3>
                          <div className="doctor-search-blk">
                            <div className="top-nav-search table-search-blk">
                              <form>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search here"
                                />
                                <Link className="btn">
                                  <img src={searchnormal} alt="#" />
                                </Link>
                              </form>
                            </div>
                            <div className="add-group">
                              <Link
                                to="/admin/diet-plan/add"
                                className="btn btn-primary add-pluss ms-2"
                                onClick={handleAddDiet}
                              >
                                <img src={plusicon} alt="#" />
                              </Link>
                              <Link
                                to="#"
                                className="btn btn-primary doctor-refresh ms-2"
                              >
                                <img src={refreshicon} alt="#" />
                              </Link>
                            </div>
                            
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Table Header */}
                  <div className="table-responsive doctor-list">
                    <Table
                      rowSelection={rowSelection}
                      columns={columns}
                      dataSource={data}
                      rowKey={(record) => record.key}
                      pagination={{
                        total: data.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                      }}
                      style={{
                        backgroundColor: "#f2f2f2",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Regular Diet and Diabetic Diet in the same row */}
          <div className="row mt-4">
            {/* Regular Diet Section */}
            <div className="col-md-6">
              <div
                className="card"
                style={{ backgroundColor: "rgb(184, 243, 201)" }}
              >
                <div className="card-body">
                  <div className="form-heading">
                    <h4>Regular Diet</h4>
                  </div>
                  <p>
                    <strong>Balanced nutrition</strong>
                    <br />
                    • No restrictions
                    <br />
                    • Regular portions
                    <br />
                    • All food groups included
                  </p>
                </div>
              </div>
            </div>

            {/* Diabetic Diet Section */}
            <div className="col-md-6">
              <div
                className="card"
                style={{ backgroundColor: "rgb(165, 200, 245)" }}
              >
                <div className="card-body">
                  <div className="form-heading">
                    <h4>Diabetic Diet</h4>
                  </div>
                  <p>
                    <strong>Controlled carbohydrates</strong>
                    <br />
                    • Low sugar content
                    <br />
                    • Balanced meals
                    <br />
                    • Specific timing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DietPlan;
