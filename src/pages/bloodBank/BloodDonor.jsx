import React, { useState } from "react";
import { Table } from "antd";
import { Link,useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import { plusicon, refreshicon, pdficon, pdficon3, pdficon4, searchnormal } from "../../components/imagepath";
import Button from "../../components/ui_elements/Button";

const BloodDonor = () => {
    const navigate = useNavigate();
  
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

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
  const handleAddBloodDonar= () => {
    navigate("/blood/bloodDonor/add");
  };


  const datasource = [
    {
      key: 1,
      slno: "1",
      donorName: "Harish kumar",
      age: 30,
      bloodGroup: "A+",
      gender: "Male",
      contactNo: "+1 23 456890",
      fatherName: "Guna shekar",
      address: "123 Main St, City, Country",
    },
    {
      key: 2,
      slno: "2",
      donorName: "Hemanth Kumar",
      age: 28,
      bloodGroup: "B+",
      gender: "Female",
      contactNo: "+1 23 456891",
      fatherName: "Raja shekar",
      address: "456 Elm St, City, Country",
    },
    {
      key: 3,
      slno: "3",
      donorName: "hanumantha Kumar",
      age: 28,
      bloodGroup: "B+",
      gender: "Female",
      contactNo: "+1 23 456891",
      fatherName: "Ruthu shekar",
      address: "456 Elm St, City, Country",
    },
    {
      key: 4,
      slno: "4",
      donorName: "Kumar",
      age: 28,
      bloodGroup: "B+",
      gender: "Female",
      contactNo: "+1 23 456891",
      fatherName: "Raja shekar",
      address: "456 Elm St, City, Country",
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
      title: "Age",
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Blood Group",
      dataIndex: "bloodGroup",
      sorter: (a, b) => a.bloodGroup.localeCompare(b.bloodGroup),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      sorter: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
      title: "Contact No",
      dataIndex: "contactNo",
      sorter: (a, b) => a.contactNo.localeCompare(b.contactNo),
    },
    {
      title: "Father Name",
      dataIndex: "fatherName",
      sorter: (a, b) => a.fatherName.length - b.fatherName.length,
    },
    {
      title: "Address",
      dataIndex: "address",
      sorter: (a, b) => a.address.length - b.address.length,
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
              <Link className="dropdown-item" to="/edit-blood-donar">
                <i className="far fa-edit me-2" />
                Edit
              </Link>
              <Link
                className="dropdown-item"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#delete_blood_donar"
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
        activeClassName="BloodDonor"
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
                  <li className="breadcrumb-item active">Blood Donor</li>
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
                          <h3>Blood Donor List</h3>
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
                            <div className="text-end mt-6" style={{ marginLeft: "470px" }}>
                              <Button onClick={handleAddBloodDonar}>
                                Add Blood Donor
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

      {/* Modal for Deleting Blood Donor */}
      <div
        id="delete_blood_donar"
        className="modal fade delete-modal"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <h3>Are you sure want to delete this Blood Donor?</h3>
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

export default BloodDonor;
