import { useEffect, useRef, useState } from "react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Table } from "antd";
import { onShowSizeChange, itemRender } from "../../components/Pagination";
import { Link, useNavigate } from "react-router-dom";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import "./OperativeInfo.css";
import OperationRegistration from "./operationRegistration";
// Add this import if you're using inline styles
import { Select, DatePicker, Button } from "antd";
import ConfirmationModal from "../../components/Modal/GenericModal";

const OperativeInformation = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [operationFilter, setOperationFilter] = useState("All");
  const [doctorFilter, setDoctorFilter] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate=useNavigate()
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const [currentAction, setCurrentAction] = useState(null);

  const triggerConfirmationModal = (action) => {
    console.log("🚀 ~ triggerConfirmationModal ~ action:", action)
    setCurrentAction(action);
    setModalOpen(true);
  };

  const handleConfirm = () => {
    console.log(`Confirmed action: ${currentAction}`);
    setModalOpen(false);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [data, setData] = useState(generateMockData());

  // Operation types for filter
  const operationTypes = [
    "All",
    "LASIK surgery",
    "LSCS",
    "HAND SERGERY",
    "CANCER",
    "Delivery Operation",
    "Oral Surgery",
    "HIP REPLACEMENT",
    "Leg Surgery",
    "CRANIOTOMY",
    "shoulder replacement surgery-1",
    "CABG",
    "shoulder replacement surgery",
    "Limb Lengthening Surgery",
    "Eye Surgery",
    "Heart Surgery",
    "Wrist join",
    "Knee replacement",
    "Heart Transplant",
  ];

  // Doctor list for filter
  const doctorList = [
    "All",
    "Dr. Amul charan swain",
    "Dr. arun",
    "Dr. Rajesh Patel",
    "Dr. Chetan",
    "Dr. Manoj",
    "Dr. Mukul Tamuli",
    "Dr. YOGESH",
    "Dr. Raj",
    "Dr. Keshav maharaj",
    "Dr. Harsh sharma",
    "Dr. dhiraj",
    "Dr. Vishal Sharma",
    "Dr. Anurag Pathak",
    "Dr. Chinmaya Sahu",
    "Dr. Rakesh Bhuyan",
    "Dr. Amanhusen Kureshi",
    "Dr. BIRSINGH RAJPUT",
    "Dr. Kaushik Patel",
    "Dr. Neha Patel",
    "Dr. Ankit Namdev",
    "Dr. Abhishek Namdev",
    "Dr. Chandrika Patel",
    "Dr. Orthopaedic Demo account",
    "Dr. Healthray Ahmedabad",
    "Dr. Tosif Saiyad",
    "Dr. Avinash Chaudhry",
    "Dr. Keshav Hari",
    "Dr. Jonathan Wick",
    "Dr. Yogesh Balar",
    "Dr. Chetanya Dabi",
  ];

  // Filter function to apply all filters
  const getFilteredData = () => {
    return data.filter((item) => {
      // Filter by tab (status)
      if (activeTab !== "all" && item.status !== activeTab) {
        return false;
      }

      // Filter by operation type
      if (operationFilter !== "All" && item.operationName !== operationFilter) {
        return false;
      }

      // Filter by doctor
      if (doctorFilter !== "All" && !item.involvedDr.includes(doctorFilter)) {
        return false;
      }

      // Filter by date range could be added here

      return true;
    });
  };

  // Use the mock data function that includes status field
  function generateMockData() {
    const data = [
      {
        key: "1",
        no: 1,
        uhid: "HC694",
        patientName: "Dr. Anurag P",
        ageGender: "29Y 5M 1D/ M",
        mobileNo: "+91 1234567890",
        involvedDr: "Dr. Chetan",
        bloodGroup: "--",
        startTime: "12:00 AM",
        endTime: "01:00 AM",
        duration: "60 Minute(s)",
        otName: "EMERGENCY OPD",
        operationName: "LASIK surgery",
        operationNo: "OP001",
        operationDate: "27/01/2025",
        status: "pending",
      },
      {
        key: "2",
        no: 2,
        uhid: "HC658",
        patientName: "Mr. ROCKY KUMAR",
        ageGender: "25Y 13D/ M",
        mobileNo: "+91 3534634555",
        involvedDr: "Dr. Chetan",
        bloodGroup: "--",
        startTime: "10:00 AM",
        endTime: "10:40 AM",
        duration: "40 Minute(s)",
        otName: "OT-1",
        operationName: "HAND",
        operationNo: "OP002",
        operationDate: "27/01/2025",
        status: "pending",
      },
      {
        key: "3",
        no: 3,
        uhid: "HC671",
        patientName: "Mahesh kumar",
        ageGender: "29Y 8M 2D/ M",
        mobileNo: "+91 9878909878",
        involvedDr: "Dr. Chetan",
        bloodGroup: "--",
        startTime: "12:00 AM",
        endTime: "--",
        duration: "--",
        otName: "--",
        operationName: "HAND",
        operationNo: "OP003",
        operationDate: "28/01/2025",
        status: "pending",
      },
      {
        key: "4",
        no: 4,
        uhid: "HC667",
        patientName: "Mr. Piyushbhai Jer...",
        ageGender: "32Y 11D/ F",
        mobileNo: "+91 9876543210",
        involvedDr: "Dr. Manoj,Dr. C...",
        bloodGroup: "--",
        startTime: "12:00 AM",
        endTime: "12:30 AM",
        duration: "30 Minute(s)",
        otName: "OT-1",
        operationName: "Knee replacement",
        operationNo: "OP004",
        operationDate: "28/01/2025",
        status: "pending",
      },
      {
        key: "5",
        no: 5,
        uhid: "HC646",
        patientName: "Nikhil Ganesh Saw...",
        ageGender: "31Y 8M 1D/ M",
        mobileNo: "+91 8805006037",
        involvedDr: "Dr. Chetan",
        bloodGroup: "--",
        startTime: "12:00 AM",
        endTime: "06:20 AM",
        duration: "380 Minute(s)",
        otName: "EMERGENCY OPD",
        operationName: "Heart Surgery",
        operationNo: "OP005",
        operationDate: "29/01/2025",
        status: "done",
      },
      {
        key: "6",
        no: 6,
        uhid: "HTPL76",
        patientName: "Vishal",
        ageGender: "55Y 9M 4D/ M",
        mobileNo: "+91 9589958304",
        involvedDr: "Dr. Chetan,Dr. ...",
        bloodGroup: "--",
        startTime: "11:00 AM",
        endTime: "01:09 PM",
        duration: "129 Minute(s)",
        otName: "MAJOR OT ROOM",
        operationName: "Leg Surgery",
        operationNo: "OP006",
        operationDate: "29/01/2025",
        status: "done",
      },
      {
        key: "7",
        no: 7,
        uhid: "HC600",
        patientName: "Mr. Rajveer Singh",
        ageGender: "21Y 22D/ M",
        mobileNo: "+91 0258963147",
        involvedDr: "Dr. Chetan",
        bloodGroup: "--",
        startTime: "12:00 AM",
        endTime: "08:40 AM",
        duration: "520 Minute(s)",
        otName: "EMERGENCY OPD",
        operationName: "Shoulder Surgery",
        operationNo: "OP007",
        operationDate: "30/01/2025",
        status: "done",
      },
      {
        key: "8",
        no: 8,
        uhid: "HC574",
        patientName: "Jaya K Prashant",
        ageGender: "55Y 25D/ M",
        mobileNo: "+91 00000121212",
        involvedDr: "Dr. Manoj,Dr. ...",
        bloodGroup: "--",
        startTime: "10:00 AM",
        endTime: "02:00 PM",
        duration: "240 Minute(s)",
        otName: "--",
        operationName: "LCSC",
        operationNo: "OP008",
        operationDate: "30/01/2025",
        status: "cancel",
      },
      {
        key: "9",
        no: 9,
        uhid: "HC574",
        patientName: "Jaya K Prashant",
        ageGender: "55Y 25D/ M",
        mobileNo: "+91 00000121212",
        involvedDr: "Dr. Manoj,Dr. ...",
        bloodGroup: "--",
        startTime: "09:00 AM",
        endTime: "12:00 PM",
        duration: "180 Minute(s)",
        otName: "OT-1",
        operationName: "LASIK",
        operationNo: "OP009",
        operationDate: "31/01/2025",
        status: "pending",
      },
      {
        key: "10",
        no: 10,
        uhid: "250130",
        patientName: "Razeena",
        ageGender: "32Y 1M 1D/ F",
        mobileNo: "+91 0000000000",
        involvedDr: "Dr. Mukul Tamuli",
        bloodGroup: "--",
        startTime: "12:00 AM",
        endTime: "08:40 AM",
        duration: "520 Minute(s)",
        otName: "MAJOR OT ROOM",
        operationName: "Shoulder Surgery",
        operationNo: "OP010",
        operationDate: "31/01/2025",
        status: "pending",
      },
      {
        key: "11",
        no: 11,
        uhid: "HC580",
        patientName: "Mr. Skanda s g",
        ageGender: "34Y 24D/ M",
        mobileNo: "+91 7760782807",
        involvedDr: "Dr. Manoj",
        bloodGroup: "--",
        startTime: "12:00 AM",
        endTime: "08:40 AM",
        duration: "520 Minute(s)",
        otName: "EMERGENCY OPD",
        operationName: "Shoulder Surgery",
        operationNo: "OP011",
        operationDate: "01/02/2025",
        status: "pending",
      },
      {
        key: "12",
        no: 12,
        uhid: "HC560",
        patientName: "Minal A Patel",
        ageGender: "25Y 1M 2D/ F",
        mobileNo: "+91 3698521479",
        involvedDr: "Dr. Manoj",
        bloodGroup: "--",
        startTime: "12:00 PM",
        endTime: "12:01 PM",
        duration: "1 Minute(s)",
        otName: "EMERGENCY OPD",
        operationName: "HAND",
        operationNo: "OP012",
        operationDate: "01/02/2025",
        status: "done",
      },
      {
        key: "13",
        no: 13,
        uhid: "HC561",
        patientName: "Bhavesh H Patel",
        ageGender: "26Y 1M 2D/ M",
        mobileNo: "+91 7069920171",
        involvedDr: "Dr. Chetan",
        bloodGroup: "--",
        startTime: "12:00 AM",
        endTime: "08:40 AM",
        duration: "520 Minute(s)",
        otName: "OT-1",
        operationName: "Shoulder Surgery",
        operationNo: "OP013",
        operationDate: "02/02/2025",
        status: "pending",
      },
    ];
    return data;
  }

  const handleAction = (action, record) => {
    if (action === "edit") {
      setSelectedRecord(record);
      navigate("register",{state :record})
    }
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // Define fixed columns
  const fixedColumns = [
    {
      title: "No.",
      dataIndex: "no",
      key: "no",
      width: 70,
      fixed: "left",
      sorter: (a, b) => a.no - b.no,
    },
    {
      title: "UHID",
      dataIndex: "uhid",
      key: "uhid",
      width: 100,
      fixed: "left",
      sorter: (a, b) => a.uhid.localeCompare(b.uhid),
    },
    {
      title: "Patient Name",
      dataIndex: "patientName",
      key: "patientName",
      width: 150,
      fixed: "left",
      sorter: (a, b) => a.patientName.localeCompare(b.patientName),
    },
  ];

  // Define scrollable columns
  const scrollableColumns = [
    {
      title: "Age/Gender",
      dataIndex: "ageGender",
      key: "ageGender",
      width: 150,
      sorter: (a, b) => a.ageGender.localeCompare(b.ageGender),
    },
    {
      title: "Mobile No.",
      dataIndex: "mobileNo",
      key: "mobileNo",
      width: 150,
      sorter: (a, b) => a.mobileNo.localeCompare(b.mobileNo),
    },
    {
      title: "Involved Dr.",
      dataIndex: "involvedDr",
      key: "involvedDr",
      width: 150,
      sorter: (a, b) => a.involvedDr.localeCompare(b.involvedDr),
    },
    {
      title: "Blood Group",
      dataIndex: "bloodGroup",
      key: "bloodGroup",
      width: 140,
      sorter: (a, b) => a.bloodGroup.localeCompare(b.bloodGroup),
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
      width: 120,
      sorter: (a, b) => a.startTime.localeCompare(b.startTime),
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
      width: 120,
      sorter: (a, b) => a.endTime.localeCompare(b.endTime),
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      width: 130,
      sorter: (a, b) => a.duration.localeCompare(b.duration),
    },
    {
      title: "OT Name",
      dataIndex: "otName",
      key: "otName",
      width: 180,
      sorter: (a, b) => a.otName.localeCompare(b.otName),
    },
    {
      title: "Operation Name",
      dataIndex: "operationName",
      key: "operationName",
      width: 180,
      sorter: (a, b) => a.operationName.localeCompare(b.operationName),
    },
    {
      title: "Operation No.",
      dataIndex: "operationNo",
      key: "operationNo",
      width: 150,
      sorter: (a, b) => a.operationNo.localeCompare(b.operationNo),
    },
    {
      title: "Operation Date",
      dataIndex: "operationDate",
      key: "operationDate",
      width: 160,
      sorter: (a, b) => a.operationDate.localeCompare(b.operationDate),
    },
    {
      title: "Actions",
      key: "actions",
      width: 400,
      render: (_, record) => (
        <div className="actions">
          <button
            className="btn btn-sm btn-primary me-1"
            onClick={() => navigate("ot-edit", { state: record })}
          >
            OT Note
          </button>
          <button
            className="btn btn-sm btn-secondary me-1"
            onClick={() => handleAction("edit", record)}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-success me-1"
            onClick={() => triggerConfirmationModal("done")}
          >
            Done
          </button>
          <button
            className="btn btn-sm btn-danger me-1"
            onClick={() => triggerConfirmationModal("cancel")}
          >
            Cancel
          </button>
          <button
            className="btn btn-sm btn-info"
            onClick={() => triggerConfirmationModal("send order")}
          >
            Send Order
          </button>
        </div>
      ),
    },
  ];

  const columns = [...fixedColumns, ...scrollableColumns];

  return (
    <>
      <Header />
      <Sidebar
        id="menu-item"
        id1="menu-items"
        activeClassName="operative-info"
      />
      <>
        <div className="page-wrapper">
          <div className="content">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">Dashboard </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                    </li>
                    <li className="breadcrumb-item active">
                      Operative Information
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="card-box">
                  <div className="card-block">
                    {/* Filter tabs and controls */}
                    <div className="row mb-3">
                      <div className="col-md-12">
                        <div className="d-flex flex-wrap align-items-center">
                          {/* Status tabs */}
                          <div className="me-4 mb-2">
                            <button
                              className={`btn ${
                                activeTab === "all"
                                  ? "btn-primary"
                                  : "btn-outline-primary"
                              } me-2`}
                              onClick={() => setActiveTab("all")}
                            >
                              All ({data.length})
                            </button>
                            <button
                              className={`btn ${
                                activeTab === "pending"
                                  ? "btn-primary"
                                  : "btn-outline-primary"
                              } me-2`}
                              onClick={() => setActiveTab("pending")}
                            >
                              Pending (
                              {
                                data.filter((item) => item.status === "pending")
                                  .length
                              }
                              )
                            </button>
                            <button
                              className={`btn ${
                                activeTab === "done"
                                  ? "btn-primary"
                                  : "btn-outline-primary"
                              } me-2`}
                              onClick={() => setActiveTab("done")}
                            >
                              Done (
                              {
                                data.filter((item) => item.status === "done")
                                  .length
                              }
                              )
                            </button>
                            <button
                              className={`btn ${
                                activeTab === "cancel"
                                  ? "btn-primary"
                                  : "btn-outline-primary"
                              } me-2`}
                              onClick={() => setActiveTab("cancel")}
                            >
                              Cancel (
                              {
                                data.filter((item) => item.status === "cancel")
                                  .length
                              }
                              )
                            </button>
                          </div>

                          {/* Operation filter */}
                          <div className="me-3 mb-2">
                            <select
                              className="form-select"
                              value={operationFilter}
                              onChange={(e) =>
                                setOperationFilter(e.target.value)
                              }
                            >
                              {operationTypes.map((op) => (
                                <option key={op} value={op}>
                                  {op}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Doctor filter */}
                          <div className="me-3 mb-2">
                            <select
                              className="form-select"
                              value={doctorFilter}
                              onChange={(e) => setDoctorFilter(e.target.value)}
                            >
                              {doctorList.map((doc) => (
                                <option key={doc} value={doc}>
                                  {doc}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Date filters */}
                          <div className="me-3 mb-2">
                            <input
                              type="date"
                              className="form-control"
                              placeholder="Start Date"
                              value={startDate}
                              onChange={(e) => setStartDate(e.target.value)}
                            />
                          </div>
                          <div className="me-3 mb-2">
                            <input
                              type="date"
                              className="form-control"
                              placeholder="End Date"
                              value={endDate}
                              onChange={(e) => setEndDate(e.target.value)}
                            />
                          </div>

                          {/* Registration button */}
                          <div className="mb-2">
                            <button
                              className="btn btn-primary"
                              onClick={() => navigate("register")}
                            >
                              Operation Registration
                            </button>
                          </div>

                          <div className="mb-2 ms-2">
                            <button className="btn btn-primary">Pdf</button>
                          </div>
                          <div className="mb-2 ms-2">
                            <button className="btn btn-primary">Excel</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Table */}
                    <div className="table-responsive">
                      <Table
                        pagination={{
                          total: getFilteredData().length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                        columns={columns}
                        dataSource={getFilteredData()}
                        rowSelection={rowSelection}
                        rowKey={(record) => record.key}
                        scroll={{ x: 2000 }}
                        className="custom-table"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleClose}
        title={`Confirm ${currentAction}`}
        description={`Are you sure you want to ${currentAction}?`}
        actions={[
          {
            label: "Cancel",
            onClick: handleClose,
            variant: "outline-secondary",
          },
          {
            label: `Confirm ${currentAction}`,
            onClick: handleConfirm,
            variant: "primary",
          },
        ]}
      />
    </>
  );
};

export default OperativeInformation;
