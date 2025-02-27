import React, { useState } from "react";
import { Table, Dropdown, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";

const TokenBoard = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [floorFilter, setFloorFilter] = useState("All");

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleFloorFilterChange = (floor) => {
    setFloorFilter(floor);
  };

  const datasource = [
    {
      key: 1,
      roomName: "OPD - 1",
      token: "T1234",
      patientName: "John Doe",
      floor: "1",
    },
    {
      key: 2,
      roomName: "OPD - 2",
      token: "T1235",
      patientName: "Jane Smith",
      floor: "2",
    },
    {
      key: 3,
      roomName: "OPD - 3",
      token: "T1236",
      patientName: "Michael Brown",
      floor: "3",
    },
  ];

  const columns = [
    {
      title: "Room",
      dataIndex: "roomName",
      sorter: (a, b) => a.roomName.localeCompare(b.roomName),
      width: "30%",
      render: (text) => <span style={{ fontSize: "16px", fontWeight: "bold" }}>{text}</span>,
    },
    {
      title: "Token",
      dataIndex: "token",
      sorter: (a, b) => a.token.localeCompare(b.token),
      width: "30%",
      render: (text) => <span style={{ fontSize: "16px", fontWeight: "bold" }}>{text}</span>,
    },
    {
      title: "Patient Name",
      dataIndex: "patientName",
      sorter: (a, b) => a.patientName.length - b.patientName.length,
      width: "40%",
      render: (text) => <span style={{ fontSize: "16px", fontWeight: "bold" }}>{text}</span>,
    },
  ];

  const floorMenu = (
    <Menu>
      <Menu.Item key="1" onClick={() => handleFloorFilterChange("1")}>
        1st Floor
      </Menu.Item>
      <Menu.Item key="2" onClick={() => handleFloorFilterChange("2")}>
        2nd Floor
      </Menu.Item>
      <Menu.Item key="3" onClick={() => handleFloorFilterChange("3")}>
        3rd Floor
      </Menu.Item>
      <Menu.Item key="all" onClick={() => handleFloorFilterChange("All")}>
        All Floors
      </Menu.Item>
    </Menu>
  );

  const filteredData = floorFilter === "All" 
    ? datasource 
    : datasource.filter(item => item.floor === floorFilter);

  return (
    <>
      <Header />
      <Sidebar id="frontoffice" activeClassName="Tokenboard" />
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-8">
                <h3 style={{ fontSize: "28px", fontWeight: "bold", color: "#2e37a4" }}>
                  Token Board
                </h3>
              </div>
              <div className="col-sm-4 text-right">
                <Dropdown overlay={floorMenu}>
                  <Link
                    className="btn btn-primary"
                    style={{
                      fontSize: "16px",
                      padding: "6px 20px",
                      backgroundColor: "#2C3E50",
                      color: "#fff",
                    }}
                    to="#"
                  >
                    Floor: {floorFilter} <i className="feather-chevron-down"></i>
                  </Link>
                </Dropdown>
                <Link to="/token-board/add">
                  <Button
                    type="primary"
                    style={{
                      marginLeft: "10px",
                      fontSize: "16px",
                      backgroundColor: "#2C3E50",
                      borderColor: "#2C3E50",
                    }}
                  > 
                    Add Token
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-8">
              <div className="card card-table show-entire">
                <div className="card-body">
                  <Table
                    columns={columns}
                    dataSource={filteredData}
                    rowKey={(record) => record.key}
                    pagination={{
                      total: filteredData.length,
                      showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                      pageSize: 3,
                    }}
                    style={{
                      backgroundColor: "#ECF0F1",
                      textAlign: "center",
                      borderRadius: "8px",
                      margin: "10px 0", // Reduced gap between header and table
                    }}
                    bordered
                    className="custom-table"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-table .ant-table-thead > tr > th {
          background-color: rgb(169, 175, 240) !important;
          color: white;
          font-size: 18px;
          font-weight: bold;
          text-align: center;
          padding: 12px 0;
        }

        .ant-table-tbody > tr > td {
          padding: 16px 8px;
        }
      `}</style>
    </>
  );
};

export default TokenBoard;
