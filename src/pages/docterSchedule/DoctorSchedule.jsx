import React, { useState } from "react";
import { Table } from "antd";
import { Link, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import {
  searchnormal,
  pdficon,
  pdficon3,
  pdficon4,
} from "../../components/imagepath";
import Button from "../../components/ui_elements/Button";

const DoctorSchedule = () => {
  const navigate = useNavigate();

  // Row selection state
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // Sample data
  const dataSource = [
    {
      key: 1,
      slno: "1",
      doctorName: "Dr.Madan Gopal",
      department: "Cardiology",
      availableDays: "Mon, Wed, Fri",
      availableTime: "9 AM - 12 PM",
      status: "Active",
    },
    {
      key: 2,
      slno: "2",
      doctorName: "Dr. Mohan Gupta",
      department: "Neurology",
      availableDays: "Tue, Thu",
      availableTime: "10 AM - 2 PM",
      status: "Inactive",
    },
    {
        key: 3,
        slno: "3",
        doctorName: "Dr.Manoj Ganesan",
        department: "Dentist",
        availableDays: "wed, Thu",
        availableTime: "12 AM - 2 PM",
        status: "Active",
      },
      {
        key: 4,
        slno: "4",
        doctorName: "Dr.Madan Gowrye",
        department: "Psycologist",
        availableDays: "sat-sun",
        availableTime: "9AM - 10 PM",
        status: "Inactive",
      },
  ];

  // Define columns
  const columns = [
    {
      title: "No.",
      dataIndex: "slno",
      sorter: (a, b) => a.slno - b.slno,
    },
    {
      title: "Doctor Name",
      dataIndex: "doctorName",
      sorter: (a, b) => a.doctorName.localeCompare(b.doctorName),
    },
    {
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => a.department.localeCompare(b.department),
    },
    {
      title: "Available Days",
      dataIndex: "availableDays",
      sorter: (a, b) => a.availableDays.localeCompare(b.availableDays),
    },
    {
      title: "Available Time",
      dataIndex: "availableTime",
      sorter: (a, b) => a.availableTime.localeCompare(b.availableTime),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <>
          {text === "Active" && (
            <span className="custom-badge status-green">{text}</span>
          )}
          {text === "Inactive" && (
            <span className="custom-badge status-pink">{text}</span>
          )}
        </>
      ),
      sorter: (a, b) => a.status.localeCompare(b.status),
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
              <Link className="dropdown-item" to="/doctor/doctor-schedule-edit">
                <i className="far fa-edit me-2" />
                Edit
              </Link>
              <Link
                className="dropdown-item"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#delete_doctor_schedule"
              >
                <i className="fa fa-trash-alt m-r-5" />
                Delete
              </Link>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Navigate to Add Schedule
  const handleAddSchedule = () => {
    navigate("/doctor/doctor-schedule-add");
  };

  return (
    <>
      <Header />
      <Sidebar id="doctor-dropmenu" id1="doctor-items" activeClassName="DocterSchedule" />
     
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Doctor Management</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Doctor Schedule</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}

          {/* Table Section */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table show-entire">
                <div className="card-body">
                  {/* Table Header */}
                  <div className="page-table-header mb-2">
                    <div className="row align-items-center">
                      <div className="col">
                        <div className="doctor-table-blk">
                          <h3>Doctor Schedule List</h3>
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
                            <div
                              className="text-end mt-6"
                              style={{ marginLeft: "470px" }}
                            >
                              <Button onClick={handleAddSchedule}>
                                Add Schedule
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto text-end float-end ms-auto download-grp">
                        <Link to="#" className="me-2">
                          <img src={pdficon} alt="#" />
                        </Link>
                        <Link to="#" className="me-2">
                          <img src={pdficon3} alt="#" />
                        </Link>
                        <Link to="#">
                          <img src={pdficon4} alt="#" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* /Table Header */}
                  <div className="table-responsive doctor-list">
                    <Table
                      rowSelection={rowSelection}
                      columns={columns}
                      dataSource={dataSource}
                      rowKey={(record) => record.key}
                      pagination={{
                        total: dataSource.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                      }}
                      style={{ backgroundColor: "#f2f2f2" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Deleting Doctor Schedule */}
      <div
        id="delete_doctor_schedule"
        className="modal fade delete-modal"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <h3>Are you sure you want to delete this schedule?</h3>
              <div className="m-t-20">
                <Link
                  to="#"
                  className="btn btn-white me-2"
                  data-bs-dismiss="modal"
                >
                  Close
                </Link>
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorSchedule;
