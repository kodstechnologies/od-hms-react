import React, { useState } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import { plusicon, refreshicon, pdficon, pdficon3, pdficon4, searchnormal } from "../../components/imagepath";

const AmbulanceDetails = () => {
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
      vehicleNumber: "AB123CD",
      driverName: "John Doe",
      driverContact: "+1 23 456789",
      driverLicence: "DL1234567",
      vehicleModel: "Toyota Hiace",
      launchYear: 2018,
      note: "Available for emergencies.",
      vehicleType: "Ambulance",
      status: "Active",
    },
    {
      key: 2,
      vehicleNumber: "XY456ZT",
      driverName: "Jane Smith",
      driverContact: "+1 23 456790",
      driverLicence: "DL7654321",
      vehicleModel: "Ford Transit",
      launchYear: 2020,
      note: "Available for city tours.",
      vehicleType: "Ambulance",
      status: "Inactive",
    },
  ];

  const columns = [
    {
      title: "Vehicle Number",
      dataIndex: "vehicleNumber",
      sorter: (a, b) => a.vehicleNumber.localeCompare(b.vehicleNumber),
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
      title: "Driver Licence",
      dataIndex: "driverLicence",
      sorter: (a, b) => a.driverLicence.localeCompare(b.driverLicence),
    },
    {
      title: "Vehicle Model",
      dataIndex: "vehicleModel",
      sorter: (a, b) => a.vehicleModel.localeCompare(b.vehicleModel),
    },
    {
      title: "Launch Year",
      dataIndex: "launchYear",
      sorter: (a, b) => a.launchYear - b.launchYear,
    },
    {
      title: "Note",
      dataIndex: "note",
      sorter: (a, b) => a.note.length - b.note.length,
    },
    {
      title: "Vehicle Type",
      dataIndex: "vehicleType",
      sorter: (a, b) => a.vehicleType.localeCompare(b.vehicleType),
    },
    {
      title: "Status",
      dataIndex: "status",
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
              <Link className="dropdown-item" to="/edit-ambulance-details">
                <i className="far fa-edit me-2" />
                Edit
              </Link>
              <Link
                className="dropdown-item"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#delete_ambulance"
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
        activeClassName="AmbulanceDetails"
      />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Ambulance Management</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Ambulance Details</li>
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
                          <h3>Ambulance Details List</h3>
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
                                to="/Ambulance/AmbulanceDetails/add"
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

      {/* Modal for Deleting Ambulance */}
      <div
        id="delete_ambulance"
        className="modal fade delete-modal"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <h3>Are you sure want to delete this Ambulance?</h3>
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

export default AmbulanceDetails;
