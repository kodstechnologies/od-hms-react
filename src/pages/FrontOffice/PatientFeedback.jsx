import React, { useState } from 'react'
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
import { Table } from "antd";
import PatientFeedbackJson from '../../assets/json/PatientFeedback';
import {
    blogimg10, imagesend, pdficon, pdficon3, pdficon4, plusicon, refreshicon, searchnormal, blogimg12,
    blogimg2, blogimg4, blogimg6, blogimg8,
    calendar,
    profile_add,
    scissor,
    empty_wallet
  } from '../../components/imagepath';
  import { itemRender, onShowSizeChange } from '../../components/Pagination';




const PatientFeedback = () => {
      const [selectedrowKeys, setSelectedrowKeys] = useState([]);
    
      const onSelectChange = (newSelectedrowKeys) => {
        console.log("selectedrowKeys changed: ", selectedrowKeys);
        setSelectedrowKeys(newSelectedrowKeys);
      };
    
      const rowSelection = {
        selectedrowKeys,
        onChange: onSelectChange,
      };
      const datasource =PatientFeedbackJson;
      const columns = [
        {
          title: "Patient Name",
          dataIndex: "PatientName",
          render: (text, record) => (
            <>
              <h2 className="profile-image">
              
                <Link to="#">{record.PatientName}</Link>
              </h2>
    
            </>
          )
        },
        {
          title: "Doctor Name",
          dataIndex: "DoctorName",
          sorter: (a, b) => a.Doctor.length - b.Doctor.length
        },
        {
          title: "Rating",
          dataIndex: "Rating",
          sorter: (a, b) => a.Rating.length - b.Rating.length
        },
        {
          title: "Feedback",
          dataIndex: "Feedback",
          sorter: (a, b) => a.Feedback.length - b.Feedback.length
        },
        
    
      ]
    return (
        <>
            <Header />
            <Sidebar
                id="reception-dropmenu"
                id1="reception-items"
                activeClassName="Feedback"
            />
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="#">Front Office </Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                        <Link to="#">Patient Feedback</Link>
                                    </li>
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
                          <h3>Patient Feedback</h3>
                          <div className="doctor-search-blk">
                            <div className="top-nav-search table-search-blk">
                              <form>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search here"
                                />
                                <Link className="btn">
                                  <img
                                    src={searchnormal}
                                    alt="#"
                                  />
                                </Link>
                              </form>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-auto text-end float-end ms-auto download-grp">
                        {/* <Link to="#" className=" me-2">
                          <img src={pdficon} alt="#" />
                        </Link>
                        <Link to="#" className=" me-2">
                        </Link>
                        <Link to="#" className=" me-2">
                          <img src={pdficon3} alt="#" />
                        </Link>
                        <Link to="#">
                          <img src={pdficon4} alt="#" />
                        </Link> */}
                              <Link
                                to="add-feedback"
                                className="btn btn-primary add-pluss ms-2"
                                
                              >
                                 <span>Add Feedback</span>
                                {/* <img src={plusicon} alt="#" /> */}
                              </Link>
                              {/* <Link
                                to="#"
                                className="btn btn-primary doctor-refresh ms-2"
                              >
                              
                                <img src={refreshicon} alt="#" />
                              </Link> */}
                           
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
                        backgroundColor: '#f2f2f2', // Replace with your desired background color for the table
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
    )
}

export default PatientFeedback