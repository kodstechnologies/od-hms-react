/* eslint-disable no-unused-vars */
import React from "react";
import { Table } from "antd";
import { onShowSizeChange, itemRender } from "../../components/Pagination";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import {
  imagesend,
  pdficon,
  pdficon3,
  pdficon4,
  plusicon,
  refreshicon,
  searchnormal,
} from "../../components/imagepath";
import { useState } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import StockHistoryData from "../../assets/json/StockHistory";

const StockHistory = () => {
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

  const datasource = StockHistoryData.Data;
  const columns = [
    {
      title: "Type",
      dataIndex: "Type",
      render: (text, record) => (
        <>
          <h2 className="profile-image">
            <Link to="#">{record.Type}</Link>
          </h2>
        </>
      ),
      sorter: (a, b) => a.Type.length - b.Type.length,
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
      sorter: (a, b) => a.Quantity.length - b.Quantity.length,
    },
    {
      title: "UnitCost",
      dataIndex: "UnitCost",
      sorter: (a, b) => a.UnitCost.length - b.UnitCost.length,
    },
    {
      title: "TotalCost",
      dataIndex: "TotalCost",
      sorter: (a, b) => a.TotalCost.length - b.TotalCost.length,
    },
    {
      title: "AddedBy",
      dataIndex: "AddedBy",
      sorter: (a, b) => a.AddedBy.length - b.AddedBy.length,
    },
    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a, b) => a.Date.length - b.Date.length,
    },
    {
      title: "Supplier",
      dataIndex: "Supplier",
      sorter: (a, b) => a.Supplier.length - b.Supplier.length,
    },
    {
      title: "Expiry",
      dataIndex: "Expiry",
      sorter: (a, b) => a.Expiry.length - b.Expiry.length,
    },
    {
      title: "Notes",
      dataIndex: "Notes",
      sorter: (a, b) => a.Notes.length - b.Notes.length,
    },
  ];

  return (
    <>
      <Header />
      <Sidebar
        id="pharmacy-menu-item"
        id1="pharmacy-menu-items"
        activeClassName="inventory"
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
                      <Link to="/pharmacy/inventory">Inventory List</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                      Stock History
                    </li>
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
                            <h3>Stock History</h3>
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
                                  to="add"
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
                        // rowSelection={rowSelection}
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
        <div
          id="delete_patient"
          className="modal fade delete-modal"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src={imagesend} alt="#" width={50} height={46} />
                <h3>Are you sure want to delete this ?</h3>
                <div className="m-t-20">
                  {" "}
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
    </>
  );
};

export default StockHistory;
