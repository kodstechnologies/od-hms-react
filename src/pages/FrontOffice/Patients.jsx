import FeatherIcon from "feather-icons-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { onShowSizeChange, itemRender } from "../../components/Pagination";
import { plusicon, searchnormal } from "../../components/imagepath";
import CountUp from "react-countup";
import { Table } from "antd";
import OutPatient from "../../assets/json/OutPatient";

const AddPatient = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const datasource = OutPatient.Data;
  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      render: (text, record) => (
        <>
          <h2 className="profile-image">
            <Link to="#" className="avatar avatar-sm me-2">
              <img
                className="avatar-img rounded-circle"
                src={record.Img}
                alt="User Image"
              />
            </Link>
            <Link to="#">{record.Name}</Link>
          </h2>
        </>
      ),
    },
    {
      title: "ConsultingDoctor",
      dataIndex: "ConsultingDoctor",
      sorter: (a, b) => a.ConsultingDoctor.length - b.ConsultingDoctor.length,
    },
    {
      title: "Treatment",
      dataIndex: "Treatment",
      sorter: (a, b) => a.Treatment.length - b.Treatment.length,
    },
    {
      title: "Mobile",
      dataIndex: "Mobile",
      sorter: (a, b) => a.Mobile.length - b.Mobile.length,
    },
    {
      title: "Email",
      dataIndex: "Email",
      sorter: (a, b) => a.Email.length - b.Email.length,
      render: (text, record) => (
        <>
          <Link to="#">{record.Email}</Link>
        </>
      ),
    },
    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a, b) => a.Date.length - b.Date.length,
    },
    {
      title: "Time",
      dataIndex: "Time",
      sorter: (a, b) => a.Time.length - b.Time.length,
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
                <Link className="dropdown-item" to="/editappoinments">
                  <i className="far fa-edit me-2" />
                  Edit
                </Link>
                <Link
                  className="dropdown-item"
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_patient"
                >
                  <i className="fa fa-trash-alt m-r-5"></i> Delete
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
      <Sidebar id="frontoffice" id1="frontoffices" activeClassName="patients" />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Outpatient</Link>
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
                  <h4>Total Patient Today</h4>
                  <h2>
                    {" "}
                    <CountUp delay={0.4} end={250} duration={0.6} />
                  </h2>
                  <p>
                    <span className="passive-view">
                      <i className="feather-arrow-up-right me-1">
                        <FeatherIcon icon="arrow-up-right" />
                      </i>
                      40%
                    </span>{" "}
                    from yesterday
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <div className="dash-content dash-count flex-grow-1">
                  <h4>Appointments</h4>
                  <h2>
                    {" "}
                    <CountUp delay={0.4} end={28} duration={0.6} />
                  </h2>
                  <p>
                    <span className="passive-view">
                      <i className="feather-arrow-up-right me-1">
                        <FeatherIcon icon="arrow-up-right" />
                      </i>
                      15
                    </span>{" "}
                    Completed
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <div className="dash-content dash-count flex-grow-1">
                  <h4>Walk-ins</h4>
                  <h2>
                    {" "}
                    <CountUp delay={0.4} end={14} duration={0.6} />
                  </h2>
                  <p>
                    <span className="passive-view">
                      <i className="feather-arrow-up-right me-1">
                        <FeatherIcon icon="arrow-up-right" />
                      </i>
                      8
                    </span>{" "}
                    in waiting
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <div className="dash-content dash-count flex-grow-1">
                  <h4>Average Wait Time</h4>
                  <h2>
                    {" "}
                    <CountUp delay={0.4} end={25} duration={0.6} />
                    min
                  </h2>
                  <p>
                    <span className="passive-view">
                      <i className="feather-arrow-up-right me-1">
                        <FeatherIcon icon="arrow-up-right" />
                      </i>
                      5 min
                    </span>{" "}
                    from average
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Outpatient</Link>
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
                          <h3>Appoinment List</h3>
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
                          <div style={{ marginLeft: "auto" }}>
                            <Link
                              to="/add-patient"
                              className="btn btn-primary add-pluss ms-2"
                            >
                              Add Patient
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

export default AddPatient;
