/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Table } from "antd";
import { Link,useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import { plusicon, refreshicon, pdficon, pdficon3, pdficon4, searchnormal } from "../../components/imagepath";
import Button from "../../components/ui_elements/Button";

const ComponentIssue = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const navigate = useNavigate();

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

  const handleAddBloodComponent= () => {
    navigate("/blood/componentIssue/add");
  };

  const datasource = [
    {
      key: 1,
      slno: "1",
      donorName: "Murugesh",
      uhid: "12345",
      issueDate: "2025-02-26",
      receivedTo: "Hospital A",
      bloodGroup: "A+",
      component: "Platelet",
      gender: "Male",
      bagNo: "A123",
      volume: "1 Unit",
      note: "Urgent",
    },
    {
      key: 2,
      slno: "2",
      donorName: "Ganesh",
      uhid: "12346",
      issueDate: "2025-02-25",
      receivedTo: "Hospital B",
      bloodGroup: "B+",
      component: "Plasma",
      gender: "Female",
      bagNo: "B123",
      volume: "2 Units",
      note: "Routine",
    },
    {
      key: 3,
      slno: "3",
      donorName: "Ramesh",
      uhid: "12346",
      issueDate: "2025-02-25",
      receivedTo: "Hospital B",
      bloodGroup: "B+",
      component: "Plasma",
      gender: "Female",
      bagNo: "B123",
      volume: "2 Units",
      note: "Routine",
    },
  ];

  const columns = [
    {
      title: "No.",
      dataIndex: "slno",
      sorter: (a, b) => a.slno - b.slno,
    },
    {
      title: "Donor Name",
      dataIndex: "donorName",
      sorter: (a, b) => a.donorName.length - b.donorName.length,
    },
    {
      title: "UHID",
      dataIndex: "uhid",
      sorter: (a, b) => a.uhid.localeCompare(b.uhid),
    },
    {
      title: "Issue Date",
      dataIndex: "issueDate",
      sorter: (a, b) => a.issueDate.localeCompare(b.issueDate),
    },
    {
      title: "Received To",
      dataIndex: "receivedTo",
      sorter: (a, b) => a.receivedTo.length - b.receivedTo.length,
    },
    {
      title: "Blood Group",
      dataIndex: "bloodGroup",
      sorter: (a, b) => a.bloodGroup.localeCompare(b.bloodGroup),
    },
    {
      title: "Component",
      dataIndex: "component",
      sorter: (a, b) => a.component.localeCompare(b.component),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      sorter: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
      title: "Bag No.",
      dataIndex: "bagNo",
      sorter: (a, b) => a.bagNo.length - b.bagNo.length,
    },
    {
      title: "Volume (Unit)",
      dataIndex: "volume",
      sorter: (a, b) => a.volume.localeCompare(b.volume),
    },
    {
      title: "Note",
      dataIndex: "note",
      sorter: (a, b) => a.note.length - b.note.length,
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
              <Link className="dropdown-item" to="/edit-component-issue">
                <i className="far fa-edit me-2" />
                Edit
              </Link>
              <Link
                className="dropdown-item"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#delete_component_issue"
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
        id="blood-menu-item"
        id1="blood-menu-items"
        activeClassName="ComponentIssue"
      />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Blood Bank </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Component Issue</li>
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
                          <h3>Component Issue List</h3>
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
                            <div className="text-end mt-6" style={{ marginLeft: "390px" }}>
                              <Button onClick={handleAddBloodComponent}>
                                Add Blood Component
                              </Button>
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

      {/* Modal for Deleting Component Issue */}
      <div
        id="delete_component_issue"
        className="modal fade delete-modal"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <h3>Are you sure want to delete this Component Issue?</h3>
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

export default ComponentIssue;
