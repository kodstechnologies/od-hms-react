import React, { useState } from "react";

import FeatherIcon from "feather-icons-react";
import { Table } from "antd";
import { onShowSizeChange, itemRender } from "../../components/Pagination";
import { Link, useNavigate } from "react-router-dom";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";

const LabCollection = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const navigate = useNavigate();

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns = [
    {
      title: "Lab ID",
      dataIndex: "labId",
      sorter: (a, b) => a.labId.localeCompare(b.labId),
    },
    {
      title: "Patient Name",
      dataIndex: "patientName",
      sorter: (a, b) => a.patientName.localeCompare(b.patientName),
    },
    {
      title: "Test Name",
      dataIndex: "testName",
      sorter: (a, b) => a.testName.localeCompare(b.testName),
    },
    {
      title: "Collection Date",
      dataIndex: "collectionDate",
      sorter: (a, b) => new Date(a.collectionDate) - new Date(b.collectionDate),
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
    },
  ];

  const labCollectionData = [
    {
      labId: "LAB001",
      patientName: "John Doe",
      testName: "Blood Test",
      collectionDate: "2024-02-20",
      status: "Completed",
    },
    {
      labId: "LAB002",
      patientName: "Jane Smith",
      testName: "X-Ray",
      collectionDate: "2024-02-21",
      status: "Pending",
    },
    {
      labId: "LAB003",
      patientName: "Alice Johnson",
      testName: "MRI Scan",
      collectionDate: "2024-02-19",
      status: "In Progress",
    },
  ];

  return (
    <>
      <Header />
      <Sidebar
        id="laboratory-menu-item"
        id1="laboratory-menu-items"
        activeClassName="LabCollection"
      />
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/laboratory/dashboard">Laboratory</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <FeatherIcon icon="chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">Lab Collection</li>
                </ul>
              </div>
              <div className="mt-3">
                <button className="btn btn-primary me-2" onClick={()=>navigate("create")}>
                  <i className="bi bi-plus-circle me-2"></i>
                  New Collection
                </button>
                <button className="btn btn-outline-secondary">
                  <i className="bi bi-funnel me-2"></i>
                  Filter
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card-box">
                <div className="card-block">
                  <h6 className="card-title text-bold">Lab Collection Table</h6>
                  <div className="table-responsive">
                    <Table
                      pagination={{
                        total: labCollectionData.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      columns={columns}
                      dataSource={labCollectionData}
                      rowSelection={rowSelection}
                      rowKey={(record) => record.labId}
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

export default LabCollection;
