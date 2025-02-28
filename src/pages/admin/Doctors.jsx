import React,{ useState }  from 'react'
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
import {
   searchnormal
} from '../../components/imagepath';
import AdminDoctorList from '../../assets/json/AdminDoctorList';
import { itemRender, onShowSizeChange } from '../../components/Pagination';
import { Table } from "antd";
const Doctors = () => {
   const [selectedrowKeys, setSelectedrowKeys] = useState([]);
    
      const onSelectChange = (newSelectedrowKeys) => {
        console.log("selectedrowKeys changed: ", selectedrowKeys);
        setSelectedrowKeys(newSelectedrowKeys);
      };
    
      const rowSelection = {
        selectedrowKeys,
        onChange: onSelectChange,
      };
      const datasource = AdminDoctorList.datasaource;
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
          title: "Department",
          dataIndex: "Department",
          sorter: (a, b) => a.Department.length - b.Department.length
        },
        {
          title: "Designation",
          dataIndex: "Designation",
          sorter: (a, b) => a.Designation.length - b.Designation.length
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
    
              <Link to="#">{record.Email}</Link>
    
            </>
          )
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
                    {/* <Link className="dropdown-item" to="/editappoinments">
                      <i className="far fa-edit me-2" />
                      Edit
                    </Link> */}
                    {/* <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_patient">
                      <i className="fa fa-trash-alt m-r-5"></i> Delete</Link> */}
                      <Link className="dropdown-item" to="/admin/doctors/view-profile"><i className="far fa-edit me-2" />
                      View
                      </Link>
                  </div>
                  
                </div>
              </div>
            </>
          ),
        },
    
      ]
    return (
        <>
            <Header />
            <Sidebar
                id="menu-item"
                id1="menu-items"
                activeClassName="doctors"
            />
            <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Admin</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Doctors </li>
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
                          <h3>Doctors List</h3>
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
                                to="add-doctor"
                                className="btn btn-primary add-pluss ms-2"
                                
                              >
                                 <span>Add Doctor</span>
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

export default Doctors