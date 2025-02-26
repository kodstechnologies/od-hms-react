/* eslint-disable no-unused-vars */
import React from "react";
import { Table } from "antd";
import { onShowSizeChange, itemRender } from "../../components/Pagination";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import {
  blogimg10,
  imagesend,
  pdficon,
  pdficon3,
  pdficon4,
  plusicon,
  refreshicon,
  searchnormal,
  blogimg12,
  blogimg2,
  blogimg4,
  blogimg6,
  blogimg8,
} from "../../components/imagepath";
import { useState } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import PrescriptionList from "../../assets/json/PrescriptionList";

const Prescriptions = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const onChange = (date, dateString) => {
    // console.log(date, dateString);
  };

  const datasource = PrescriptionList.Data;
  const columns = [
    {
      title: "OrderId",
      dataIndex: "OrderId",
      render: (text, record) => (
        <>
          <h2 className="profile-image">
            <Link to="#">{record.OrderId}</Link>
          </h2>
        </>
      ),
      sorter: (a, b) => a.OrderId.length - b.OrderId.length,
    },
    {
      title: "Patient",
      dataIndex: "Patient",
      sorter: (a, b) => a.Patient.length - b.Patient.length,
    },
    {
      title: "Doctor",
      dataIndex: "Doctor",
      sorter: (a, b) => a.Doctor.length - b.Doctor.length,
    },
    {
      title: "Dept",
      dataIndex: "Dept",
      sorter: (a, b) => a.Dept.length - b.Dept.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text, record) => (
        <div>
          {text === "Pending" && (
            <span className="custom-badge status-green">{text}</span>
          )}
          {text === "Completed" && (
            <span className="custom-badge status-red">{text}</span>
          )}
        </div>
      ),
    },
    {
      title: "",
      dataIndex: "FIELD8",
      render: (text, record) => (
        <>
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
                <Link className="dropdown-item" to="create">
                  <i className="far fa-plus me-2" />
                  Create
                </Link>
                <Link className="dropdown-item" to="view">
                  <i className="far fa-bar-chart me-2" />
                  View
                </Link>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <Header />
      <Sidebar
        id="pharmacy-menu-item"
        id1="pharmacy-menu-items"
        activeClassName="prescriptions"
      />
      <>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">Pharmacy </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                    </li>
                    <li className="breadcrumb-item active">Prescription List</li>
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
                            <h3>Prescription List</h3>
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
                        pagination={{
                          total: datasource.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          // showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                        columns={columns}
                        dataSource={datasource}
                        rowSelection={rowSelection}
                        rowKey={(record) => record.id}
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
      </>
    </>
  );
};

export default Prescriptions;
