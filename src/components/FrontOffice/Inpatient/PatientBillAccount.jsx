import React, { useState } from "react";
import { Table } from "antd";
// import Select from "react-select";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import InpatientList from "../../../assets/json/InpatientList";
import { onShowSizeChange, itemRender } from "../../../components/Pagination";
import BillingGroupSummary from "../../../assets/json/BillingGroupSummary";

const PatientBillAccount = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const datasource = BillingGroupSummary.Data;
  const columns = [
    {
      title: "Sl No",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Fees Type",
      dataIndex: "FeesType",
      sorter: (a, b) => a.FeesType.length - b.FeesType.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
  ];
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
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
                    <Link to="/inpatient">Inpatient</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">
                    Patient Bill Account
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <div className="form-heading">
                      <h4 className="text-center border-bottom bg-secondary p-2 rounded">
                        Add walk-In appointment
                      </h4>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex flex-wrap justify-content-between p-3 bg-light rounded shadow-sm">
                      <div className="d-flex flex-column flex-sm-row mb-3 mb-sm-0">
                        <div
                          className="d-flex align-items-center justify-content-center bg-danger text-white rounded-circle"
                          style={{
                            width: "40px",
                            height: "40px",
                            fontSize: "18px",
                          }}
                        >
                          R
                        </div>
                        <div className="ms-3">
                          <h5 className="mb-1">
                            (HC736) RANVIJAY A SINGH, (28Y / M)
                          </h5>
                          <p className="mb-1">+91 9523147890</p>
                          <p className="mb-1">DOB: 28/02/1997</p>
                          <p className="mb-0">REF: DR. RAKESH BHUYAN</p>
                        </div>
                      </div>

                      <div className="text-end flex-column flex-sm-row">
                        <p className="mb-1">BED No/ Ward Name: 2/ ICU -01</p>
                        <p className="mb-1">IPD NO: IPD-745</p>
                        <p className="mb-1">ADMITTING DR: DR. CHINMAYA SAHU</p>
                        <p className="mb-0">DOA: 28/02/2025 11:49 AM</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-heading mt-3 ">
                      <h4 className="text-center border-bottom bg-secondary p-2 rounded">
                        Billing Group Summary
                      </h4>
                    </div>
                  </div>
                </div>
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
    </>
  );
};

export default PatientBillAccount;
