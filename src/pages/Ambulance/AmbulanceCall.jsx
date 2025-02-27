import React, { useState } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import { plusicon, refreshicon, pdficon, pdficon3, pdficon4, searchnormal } from "../../components/imagepath";

const AmbulanceCall = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleDelete = (id) => {
    console.log("Delete row with ID: ", id);
    // Implement the delete logic here
  };

  const handleEdit = (id) => {
    console.log("Edit row with ID: ", id);
    // Implement the edit logic here
  };

  const datasource = [
    {
      key: 1,
      patientName: "Alice Johnson",
      vehicleModel: "Toyota Hiace",
      driverName: "John Doe",
      driverContact: "+1 23 456789",
      patientAddress: "789 Pine St, City, Country",
      dateTime: "2025-01-10 14:30",
      note: "Emergency call from the hospital.",
    },
    {
      key: 2,
      patientName: "Bob Williams",
      vehicleModel: "Ford Transit",
      driverName: "Jane Smith",
      driverContact: "+1 23 456790",
      patientAddress: "456 Oak St, City, Country",
      dateTime: "2025-01-12 09:15",
      note: "Patient in critical condition.",
    },
  ];

  const columns = [
    {
      title: "Patient Name",
      dataIndex: "patientName",
      sorter: (a, b) => a.patientName.length - b.patientName.length,
    },
    {
      title: "Vehicle Model",
      dataIndex: "vehicleModel",
      sorter: (a, b) => a.vehicleModel.localeCompare(b.vehicleModel),
    },
    {
      title: "Driver Name",
      dataIndex: "driverName",
      sorter: (a, b) => a.driverName.length - b.driverName.length,
    },
    {
      title: "Driver Contact",
      dataIndex: "driverContact",
      sorter: (a, b) => a.driverContact.localeCompare(b.driverContact),
    },
    {
      title: "Patient Address",
      dataIndex: "patientAddress",
      sorter: (a, b) => a.patientAddress.length - b.patientAddress.length,
    },
    {
      title: "Date & Time",
      dataIndex: "dateTime",
      sorter: (a, b) => new Date(a.dateTime) - new Date(b.dateTime),
    },
    {
      title: "Note",
      dataIndex: "note",
      sorter: (a, b) => a.note.length - b.note.length,
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
              <Link className="dropdown-item" to="/edit-ambulance-call">
                <i className="far fa-edit me-2" />
                Edit
              </Link>
              <Link
                className="dropdown-item"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#delete_ambulance_call"
              >
                <i className="fa fa-trash-alt m-r-5"></i> Delete
              </Link>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Header />
      <Sidebar
        id="ambulance-menu-item"
        id1="ambulance-menu-items"
        activeClassName="AmbulanceCall"
      />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Ambulance Call Management</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Ambulance Call Details</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table show-entire">
                <div className="card-body">
                  {/* Table Header */}
                  <div className="page-table-header mb-2">
                    <div className="row align-items-center">
                      <div className="col">
                        <div className="doctor-table-blk">
                          <h3>Ambulance Call List</h3>
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
                                to="/Ambulance/AmbulanceCall/add"
                                className="btn btn-primary add-pluss ms-2"
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
                      <div className="col-auto text-end float-end ms-auto download-grp">
                        <Link to="#" className=" me-2">
                          <img src={pdficon} alt="#" />
                        </Link>
                        <Link to="#" className=" me-2"></Link>
                        <Link to="#" className=" me-2">
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
                      dataSource={datasource}
                      rowKey={(record) => record.key}
                      pagination={{
                        total: datasource.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                      }}
                      style={{
                        backgroundColor: "#f2f2f2", // Replace with your desired background color for the table
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Deleting Ambulance Call */}
      <div
        id="delete_ambulance_call"
        className="modal fade delete-modal"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <h3>Are you sure want to delete this Ambulance Call?</h3>
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

export default AmbulanceCall;
