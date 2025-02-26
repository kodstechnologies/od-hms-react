import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import {
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  calendar,
  dep_icon1,
  dep_icon2,
  dep_icon3,
  dep_icon4,
  dep_icon5,
  empty_wallet,
  imagesend,
  morning_img_01,
  profile_add,
  scissor,
  user001,
} from "../../components/imagepath";
import { Table } from 'antd';
import { itemRender, onShowSizeChange } from '../../components/ui_elements/Pagination';
import data  from '../../assets/json/PatientList.js';

const datasource = data.Data;

const columns = [
  {
    title: "ID No.",
    dataIndex: "idNo",
    sorter: (a, b) => a.idNo.length - b.idNo.length,
  },
  {
    title: "Patient Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Mobile Number",
    dataIndex: "mobile",
    sorter: (a, b) => a.mobile.length - b.mobile.length,
  },
  {
    title: "Patient Email",
    dataIndex: "email",
    sorter: (a, b) => a.EmployeeName.length - b.EmployeeName.length,
  },
  {
    title: "Reason for Consultation",
    dataIndex: "reasonForConsultation",
    sorter: (a, b) => a.reasonForConsultation.length - b.reasonForConsultation.length,
  },
  {
    title: "Doctor's Review",
    dataIndex: "doctorReview",
    sorter: (a, b) => a.doctorReview.length - b.doctorReview.length,
  },
];

const Schedule = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <Header />
      <Sidebar
        id="doctor-dropmenu"
        id1="doctor-items"
        activeClassName="schedule"
      />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/doctor/schedule">Doctor </Link></li>
                  <li className="breadcrumb-item"><i className="fa fa-angle-right" /></li>
                  <li className="breadcrumb-item active">Schedule</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <div className='card-header'>
              <div className="morning-user" style={{ padding: 0 }}>
                <h2>
                  Good Morning, <span>Doctor</span>
                </h2>
                <p>Have a nice day at work</p>
              </div>
            </div>
            <div className="card-body">
              <div className="card mb-4" style={{ margin: 'auto', padding: '1rem', width: '50%', backgroundColor: '#d7d4d4' }}>
                <div className="card-body">
                  <h4 style={{ fontWeight: 700 }} className='mb-4 text-center'>
                    New Request
                  </h4>
                  <div>
                    <p> Patient Name : Bharath </p>
                    <p> Gender : Male </p>
                    <p> Contact : +91 9812384832 </p>
                    <p> Patient Email : bharath@gmail.com </p>
                    <p> Reason for Consultation : Common Illness </p>
                    <p> Specilization Required : General Physician </p>
                  </div>
                  <div className='d-flex justify-content-around'>
                    <button
                      type="submit"
                      className="btn btn-success"
                    >
                      Accept
                    </button>
                    <button
                      type="submit"
                      className="btn btn-danger"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
              <h4>
                {/* <span>space for image</span> */}
                Recent Schedule
              </h4>
              <div className="table-responsive">
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
                />
                <table className="table border-0 custom-table comman-table datatable mb-0">
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Schedule;
