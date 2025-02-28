/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "antd";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { plusicon, refreshicon, searchnormal } from "../../components/imagepath";
import Button from "../../components/ui_elements/Button";

const Nursing = () => {
  const navigate = useNavigate();

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const data = [
    {
      key: "1",
      patientName: "Shivaji",
      room: 201,
      careType: "Acute Care",
      visitTime: "09:00 AM",
      nurseName: "Amurutha",
    },
    {
      key: "2",
      patientName: "Salman",
      room: 305,
      careType: "Chronic Care",
      visitTime: "10:30 AM",
      nurseName: "Ambika",
    },
    {
      key: "3",
      patientName: "Sharukhan",
      room: 103,
      careType: "Home Health Care",
      visitTime: "02:00 PM",
      nurseName: "Deepika",
    },
  ];

  const columns = [
    {
      title: "Patient Name",
      dataIndex: "patientName",
      key: "patientName",
    },
    {
      title: "Room No",
      dataIndex: "room",
      key: "room",
    },
    {
      title: "Care Type",
      dataIndex: "careType",
      key: "careType",
    },
    {
      title: "Visit Time",
      dataIndex: "visitTime",
      key: "visitTime",
    },
    {
      title: "Nurse Name",
      dataIndex: "nurseName",
      key: "nurseName",
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
              <Link className="dropdown-item" to="/edit-nursing-care">
                <i className="far fa-edit me-2" />
                Edit
              </Link>
              <Link
                className="dropdown-item"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#delete_nursing_care"
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

  const handleAddNursingCare = () => {
    navigate("/admin/nursing-add");
  };

  return (
    <>
      <Header />
      <Sidebar id="menu-item" id1="menu-items" activeClassName="Nursing" />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Nursing Management</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Nursing Care</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table show-entire">
                <div className="card-body">
                  {/* Table Header */}
                  <div className="page-table-header mb-2">
                    <div className="row align-items-center">
                      <div className="col">
                        <div className="doctor-table-blk">
                          <h3>Today's Nursing Schedule</h3>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Table Header */}
                  <div className="text-end mt-6" style={{ marginLeft: "550px" }}>
                    <Button onClick={handleAddNursingCare}>
                      Add Nursing Care
                    </Button>
                  </div>
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

          {/* Upcoming Tasks Section */}
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="card" style={{ backgroundColor: "#f3f8ff", padding: "15px" }}>
                <div className="card-body">
                  <h5>Upcoming Tasks</h5>
                  <div className="task-item" style={{ padding: "10px", margin: "10px 0", backgroundColor: "#FFFFED", borderRadius: "8px" }}>
                    <p><strong>Medication Round</strong></p>
                    <small>General Ward A</small>
                    <span style={{ backgroundColor: "#FFEB3B", padding: "5px", borderRadius: "5px", fontWeight: "bold", float: "right" }}>In 15 mins</span>
                  </div>
                  <div className="task-item" style={{ padding: "10px", margin: "10px 0", backgroundColor: "#DEEFF5", borderRadius: "8px" }}>
                    <p><strong>Patient Monitoring</strong></p>
                    <small>ICU Ward</small>
                    <span style={{ backgroundColor: "#42A5F5", padding: "5px", borderRadius: "5px", fontWeight: "bold", float: "right" }}>In 30 mins</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Staff Schedule Section */}
            <div className="col-md-6">
              <div className="card" style={{ backgroundColor: "#E8F5E9", padding: "15px" }}>
                <div className="card-body">
                  <h5>Staff Schedule</h5>
                  <div className="schedule-item" style={{ padding: "10px", margin: "10px 0", backgroundColor: "#C8E6C9", borderRadius: "8px" }}>
                    <p><strong>Morning Shift</strong></p>
                    <small>6:00 AM - 2:00 PM</small>
                    <span style={{ color: "green", fontWeight: "bold", float: "right" }}>8 Nurses</span>
                  </div>
                  <div className="schedule-item" style={{ padding: "10px", margin: "10px 0", backgroundColor: "#C8E6C9", borderRadius: "8px" }}>
                    <p><strong>Afternoon Shift</strong></p>
                    <small>2:00 PM - 10:00 PM</small>
                    <span style={{ color: "green", fontWeight: "bold", float: "right" }}>10 Nurses</span>
                  </div>
                  <div className="schedule-item" style={{ padding: "10px", margin: "10px 0", backgroundColor: "#C8E6C9", borderRadius: "8px" }}>
                    <p><strong>Night Shift</strong></p>
                    <small>10:00 PM - 6:00 AM</small>
                    <span style={{ color: "orange", fontWeight: "bold", float: "right" }}>6 Nurses</span>
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

export default Nursing;
