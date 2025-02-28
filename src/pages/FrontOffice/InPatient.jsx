import React, { useState } from "react";
import { Table } from "antd";
import Select from "react-select";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { onShowSizeChange, itemRender } from "../../components/Pagination";

import { searchnormal } from "../../components/imagepath";
import CountUp from "react-countup";
import InpatientList from "../../assets/json/InpatientList";

const InPatient = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const [filters, setFilters] = useState([
    { value: 1, label: "All (392)" },
    { value: 2, label: "Pre Booked (0)" },
    { value: 3, label: "Admitted (78)" },
    { value: 4, label: "Discharged (303)" },
    { value: 5, label: "Cancelled (11)" },
  ]);
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const datasource = InpatientList.Data;
  const columns = [
    {
      title: "Patient ID",
      dataIndex: "PatientId",
      sorter: (a, b) => a.PatientId.length - b.PatientId.length,
    },
    {
      title: "Name",
      dataIndex: "Name",
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Mobile No",
      dataIndex: "Mobile",
      sorter: (a, b) => a.Mobile.length - b.Mobile.length,
    },
    {
      title: "Ward",
      dataIndex: "Ward",
      sorter: (a, b) => a.Ward.length - b.Ward.length,
    },
    {
      title: "MLC",
      dataIndex: "MLC",
      render: (text, record) => (
        <span className="text-red">{text ? "MLC" : "--"}</span>
      ),
      sorter: (a, b) => a.MLC.length - b.MLC.length,
    },
    {
      title: "Bed",
      dataIndex: "Bed",
      sorter: (a, b) => a.Bed.length - b.Bed.length,
    },
    {
      title: "Admission Date",
      dataIndex: "Date",
      sorter: (a, b) => a.Date.length - b.Date.length,
    },
    {
      title: "Primary Doctor",
      dataIndex: "PrimaryDoctor",
      sorter: (a, b) => a.PrimaryDoctor.length - b.PrimaryDoctor.length,
    },
    {
      title: "Payer Name",
      dataIndex: "PayerName",
      sorter: (a, b) => a.PayerName.length - b.PayerName.length,
    },
    {
      title: "Billing",
      dataIndex: "Billing",
      render: (text, record) =>
        text === "DUE" ? (
          <span className="text-danger">DUE</span>
        ) : (
          <span className="text-success">PAID</span>
        ),
      sorter: (a, b) => a.Billing.length - b.Billing.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      sorter: (a, b) => a.Status.length - b.Status.length,
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
                <Link className="dropdown-item" to="patient-bill-account">
                  Patient Bill Account
                </Link>
                <Link className="dropdown-item" to="doctor-visit">
                  Doctor Visit
                </Link>
                <Link className="dropdown-item" to="discharge-form">
                  Discharge Form
                </Link>
                <Link className="dropdown-item" to="send-order">
                  Send Order
                </Link>
                <Link className="dropdown-item" to="vital-details">
                  Vital Details
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
        id="frontoffice"
        id1="frontoffices"
        activeClassName="inpatient"
      />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Inpatient</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <div className="dash-content dash-count flex-grow-1">
                  <h4>Total Beds</h4>
                  <h2>
                    {" "}
                    <CountUp delay={0.4} end={200} duration={0.6} />
                  </h2>
                  <p>
                    <span className="passive-view">Capacity:</span> 250
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <div className="dash-content dash-count flex-grow-1">
                  <h4>Occupied Beds</h4>
                  <h2>
                    {" "}
                    <CountUp delay={0.4} end={165} duration={0.6} />
                  </h2>
                  <p>
                    <span className="passive-view">
                      <i className="feather-arrow-up-right me-1">
                        <FeatherIcon icon="arrow-up-right" />
                      </i>
                      82.5%
                    </span>{" "}
                    Occupancy
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <div className="dash-content dash-count flex-grow-1">
                  <h4>Available Beds</h4>
                  <h2>
                    {" "}
                    <CountUp delay={0.4} end={35} duration={0.6} />
                  </h2>
                  <p>
                    <span className="passive-view">Ready for admission</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <div className="dash-content dash-count flex-grow-1">
                  <h4>Reserved Beds</h4>
                  <h2>
                    {" "}
                    <CountUp delay={0.4} end={12} duration={0.6} />
                  </h2>
                  <p>
                    <span className="passive-view">Pending admission</span>{" "}
                  </p>
                </div>
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
                          <h3>Current Inpatients</h3>
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

                          <div
                            className="form-group local-forms ms-2 my-auto"
                            style={{ width: "250px" }}
                          >
                            <label>Filter</label>
                            <Select
                              defaultValue={selectedFilter}
                              onChange={setSelectedFilter}
                              options={filters}
                              menuPortalTarget={document.body}
                              styles={{
                                menuPortal: (base) => ({
                                  ...base,
                                  zIndex: 9999,
                                }),
                              }}
                              id="search-commodity"
                              components={{
                                IndicatorSeparator: () => null,
                              }}
                            />
                          </div>
                          <div style={{ marginLeft: "auto" }}>
                            <Link
                              to="/inpatient/add"
                              className="btn btn-primary add-pluss ms-2"
                            >
                              Add IPD
                            </Link>
                          </div>
                        </div>
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
                        //showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      columns={columns}
                      dataSource={datasource}
                      rowSelection={rowSelection}
                      rowKey={(record) => record.id}
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

export default InPatient;
