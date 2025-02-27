import React, { useState }  from 'react'
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { Link} from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import {
  blogimg10, imagesend, pdficon, pdficon3, pdficon4, plusicon, refreshicon, searchnormal, blogimg12,
  blogimg2, blogimg4, blogimg6, blogimg8,
  calendar,
  profile_add,
  scissor,
  empty_wallet
} from '../../components/imagepath';
import { itemRender, onShowSizeChange } from '../../components/Pagination';
import { Table } from "antd";


const equipments = () => {
  const [selectedrowKeys, setSelectedrowKeys] = useState([]);
  
    const onSelectChange = (newSelectedrowKeys) => {
      console.log("selectedrowKeys changed: ", selectedrowKeys);
      setSelectedrowKeys(newSelectedrowKeys);
    };
  
    const rowSelection = {
      selectedrowKeys,
      onChange: onSelectChange,
    };
    const datasource = [
      {
        id: "1",
        Img: blogimg2,
  
        FIELD1: "",
        Name: "Andrea Lalema",
        ConsultingDoctor: "Dr.Bernardo James",
        Treatment: "Infertility",
        Mobile: "+1 23 456890",
        Email: "example@email.com",
        Date: "01.10.2022",
        Time: "07:30",
        FIELD9: ""
      },
      {
        id: "2",
        Img: blogimg4,
  
  
        FIELD1: "",
        Name: "Smith Bruklin",
        ConsultingDoctor: "Dr.William Stephin",
        Treatment: "Infertility",
        Mobile: "+1 23 456890",
        Email: "example@email.com",
        Date: "01.10.2022",
        Time: "07:30",
        FIELD9: ""
      },
      {
        id: "3",
        Img: blogimg6,
  
        FIELD1: "",
        Name: "William Stephin",
        ConsultingDoctor: "Dr.Galaviz Lalema",
        Treatment: "Cancer",
        Mobile: "+1 23 456890",
        Email: "example@email.com",
        Date: "01.10.2022",
        Time: "07:30",
        FIELD9: ""
      },
      {
        id: "4",
        Img: blogimg12,
  
        FIELD1: "",
        Name: "Bernardo James",
        ConsultingDoctor: "Dr.Cristina Groves",
        Treatment: "Infertility",
        Mobile: "+1 23 456890",
        Email: "example@email.com",
        Date: "01.10.2022",
        Time: "07:30",
        FIELD9: " "
      },
      {
        id: "5",
        Img: blogimg10,
  
        FIELD1: "",
        Name: "Cristina Groves",
        ConsultingDoctor: "Dr.Smith Bruklin",
        Treatment: "Infertility",
        Mobile: "+1 23 456890",
        Email: "example@email.com",
        Date: "01.10.2022",
        Time: "07:30",
        FIELD9: " "
      },
      {
        id: "6",
        Img: blogimg8,
  
        FIELD1: "",
        Name: "Mark Hay Smith",
        ConsultingDoctor: "Dr.Smith Bruklin",
        Treatment: "Prostate",
        Mobile: "+1 23 456890",
        Email: "example@email.com",
        Date: "01.10.2022",
        Time: "07:30",
        FIELD9: " "
      },
      {
        id: "7",
        Img: blogimg2,
  
        FIELD1: "",
        Name: "Andrea Lalema",
        ConsultingDoctor: "Dr.Smith Bruklin",
        Treatment: "Infertility",
        Mobile: "+1 23 456890",
        Email: "example@email.com",
        Date: "01.10.2022",
        Time: "07:30",
        FIELD9: " "
      },
      {
        id: "8",
        Img: blogimg4,
  
        FIELD1: "",
        Name: "Smith Bruklin",
        ConsultingDoctor: "Dr.Bernardo James",
        Treatment: "Infertility",
        Mobile: "+1 23 456890",
        Email: "example@email.com",
        Date: "01.10.2022",
        Time: "07:30",
        FIELD9: " "
      }
    ]
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
        )
      },
      {
        title: "ConsultingDoctor",
        dataIndex: "ConsultingDoctor",
        sorter: (a, b) => a.ConsultingDoctor.length - b.ConsultingDoctor.length
      },
      {
        title: "Treatment",
        dataIndex: "Treatment",
        sorter: (a, b) => a.Treatment.length - b.Treatment.length
      },
      {
        title: "Mobile",
        dataIndex: "Mobile",
        sorter: (a, b) => a.Mobile.length - b.Mobile.length
      },
      {
        title: "Email",
        dataIndex: "Email",
        sorter: (a, b) => a.Email.length - b.Email.length,
        render: (text, record) => (
          <>
  
            <Link to="#">{record.Mobile}</Link>
  
          </>
        )
      }, {
        title: "Date",
        dataIndex: "Date",
        sorter: (a, b) => a.Date.length - b.Date.length
      }, {
        title: "Time",
        dataIndex: "Time",
        sorter: (a, b) => a.Time.length - b.Time.length
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
                  <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_patient">
                    <i className="fa fa-trash-alt m-r-5"></i> Delete</Link>
                </div>
              </div>
            </div>
          </>
        ),
      },
  
    ]
  return (

    <div>
      <Header />
      <Sidebar
        id="reception-dropmenu"
        id1="reception-items"
        activeClassName="equipment"
      />
      <div className="page-wrapper">
        <div className="content">
        <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Equipment</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  {/* <li className="breadcrumb-item active">Add Equipment</li> */}
                </ul>
              </div>
            </div>
          </div>
 {/* form */}
 <div className="row">
            <div className="col-sm-12">
              <div className="card card-table show-entire">
                <div className="card-body">
                  {/* Table Header */}
                  <div className="page-table-header mb-2">
                    <div className="row align-items-center">
                      <div className="col">
                        <div className="doctor-table-blk">
                          <h3>Equipment</h3>
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
                                to="add-equipment"
                                className="btn btn-primary add-pluss ms-2"
                                
                              >
                                 <span>Add Equipment</span>
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
    </div>
  )
}

export default equipments