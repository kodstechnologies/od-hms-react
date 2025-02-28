"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import { Button } from "react-bootstrap";
import NurseNotificationModal from "./NurseNotficationModal";

const BedAvailability = () => {
  const [activeTab, setActiveTab] = useState("allocated");
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // Updated sample data for allocated beds
  const allocatedBeds = [
    {
      floorName: "Floor 1",
      wards: [
        {
          wardName: "General Ward",
          count: 3,
          beds: [
            {
              bedId: "IPD-101 / GW / 101",
              patientName: "Rajesh Kumar",
              age: "45",
              gender: "Y/M",
              mobileNo: "+91 9876543210",
              refBy: "SELF",
              uhid: "HC101",
              doctor: "Dr. Priya Sharma",
              admissionDate: "24/02/2025",
              stayDuration: "4 D",
              payer: "CASH (SELF)",
              paymentStatus: "PAID",
              dischargeStatus: "READY FOR DISCHARGE",
              avatar: "R",
            },
            {
              bedId: "IPD-102 / GW / 102",
              patientName: "Anita Desai",
              age: "32",
              gender: "Y/F",
              mobileNo: "+91 8765432109",
              refBy: "Dr. Amit Patel",
              uhid: "HC102",
              doctor: "Dr. Amit Patel",
              admissionDate: "25/02/2025",
              stayDuration: "3 D",
              payer: "ICICI HEALTH INSURANCE",
              paymentStatus: "DUE",
              avatar: "A",
            },
          ],
        },
        {
          wardName: "ICU",
          count: 2,
          beds: [
            {
              bedId: "IPD-103 / ICU / 101",
              patientName: "Suresh Reddy",
              age: "58",
              gender: "Y/M",
              mobileNo: "+91 7654321098",
              refBy: "Dr. Neha Gupta",
              uhid: "HC103",
              doctor: "Dr. Neha Gupta",
              admissionDate: "23/02/2025",
              stayDuration: "5 D",
              payer: "LIC HEALTH INSURANCE",
              paymentStatus: "PAID",
              dischargeStatus: "READY FOR DISCHARGE",
              avatar: "S",
            },
          ],
        },
      ],
    },
    {
      floorName: "Floor 2",
      wards: [
        {
          wardName: "General Ward",
          count: 2,
          beds: [
            {
              bedId: "IPD-201 / GW / 201",
              patientName: "Meera Kapoor",
              age: "28",
              gender: "Y/F",
              mobileNo: "+91 6543210987",
              refBy: "SELF",
              uhid: "HC201",
              doctor: "Dr. Rahul Verma",
              admissionDate: "26/02/2025",
              stayDuration: "2 D",
              payer: "CASH (SELF)",
              paymentStatus: "DUE",
              avatar: "M",
            },
          ],
        },
        {
          wardName: "ICU",
          count: 1,
          beds: [
            {
              bedId: "IPD-202 / ICU / 201",
              patientName: "Vikram Singh",
              age: "50",
              gender: "Y/M",
              mobileNo: "+91 5432109876",
              refBy: "Dr. Sanjay Mehta",
              uhid: "HC202",
              doctor: "Dr. Sanjay Mehta",
              admissionDate: "22/02/2025",
              stayDuration: "6 D",
              payer: "STAR HEALTH INSURANCE",
              paymentStatus: "PAID",
              avatar: "V",
              vip: true,
            },
          ],
        },
      ],
    },
    {
      floorName: "Floor 3",
      wards: [
        {
          wardName: "General Ward",
          count: 1,
          beds: [
            {
              bedId: "IPD-301 / GW / 301",
              patientName: "Priya Malhotra",
              age: "35",
              gender: "Y/F",
              mobileNo: "+91 4321098765",
              refBy: "Dr. Anjali Deshmukh",
              uhid: "HC301",
              doctor: "Dr. Anjali Deshmukh",
              admissionDate: "27/02/2025",
              stayDuration: "1 D",
              payer: "HDFC ERGO HEALTH INSURANCE",
              paymentStatus: "DUE",
              avatar: "P",
            },
          ],
        },
      ],
    },
  ];

  // Updated sample data for available beds
  const availableBeds = [
    {
      floorName: "Floor 1",
      wards: [
        {
          wardName: "General Ward",
          count: 2,
          beds: [
            {
              bedId: "IPD-104 / GW / 103",
              status: "VACANT",
              lastCleaned: "27/02/2025 09:15 AM",
            },
            {
              bedId: "IPD-105 / GW / 104",
              status: "UNDER CLEANING",
              cleaningStarted: "28/02/2025 10:30 AM",
            },
          ],
        },
        {
          wardName: "ICU",
          count: 1,
          beds: [
            {
              bedId: "IPD-106 / ICU / 102",
              status: "VACANT",
              lastCleaned: "27/02/2025 08:45 AM",
            },
          ],
        },
      ],
    },
    {
      floorName: "Floor 2",
      wards: [
        {
          wardName: "General Ward",
          count: 1,
          beds: [
            {
              bedId: "IPD-203 / GW / 202",
              status: "UNDER MAINTENANCE",
              maintenanceInfo: "Oxygen supply system check",
              expectedCompletion: "01/03/2025",
            },
          ],
        },
        {
          wardName: "ICU",
          count: 1,
          beds: [
            {
              bedId: "IPD-204 / ICU / 202",
              status: "VACANT",
              lastCleaned: "27/02/2025 11:00 AM",
            },
          ],
        },
      ],
    },
    {
      floorName: "Floor 3",
      wards: [
        {
          wardName: "General Ward",
          count: 2,
          beds: [
            {
              bedId: "IPD-302 / GW / 302",
              status: "VACANT",
              lastCleaned: "27/02/2025 10:15 AM",
            },
            {
              bedId: "IPD-303 / GW / 303",
              status: "UNDER CLEANING",
              cleaningStarted: "28/02/2025 09:45 AM",
            },
          ],
        },
        {
          wardName: "ICU",
          count: 1,
          beds: [
            {
              bedId: "IPD-304 / ICU / 301",
              status: "VACANT",
              lastCleaned: "27/02/2025 11:30 AM",
            },
          ],
        },
      ],
    },
  ];

  // Function to get status badge class
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "PAID":
        return "bg-success";
      case "DUE":
        return "bg-danger";
      case "VACANT":
        return "bg-success";
      case "UNDER CLEANING":
        return "bg-warning text-dark";
      case "UNDER MAINTENANCE":
        return "bg-secondary";
      default:
        return "bg-primary";
    }
  };

  // Function to get avatar background class
  const getAvatarBgClass = (letter) => {
    const colors = [
      "bg-primary",
      "bg-success",
      "bg-info",
      "bg-warning text-dark",
      "bg-danger",
      "bg-secondary",
    ];
    return colors[letter.charCodeAt(0) % colors.length];
  };

  return (
    <>
      <Header />
      <Sidebar
        id="frontoffice"
        id1="frontoffices"
        activeClassName="BedAvailability"
      />
      <div className="page-wrapper">
        <div className="content">
          <div className="col-sm-12 mb-2">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link>Front Office </Link>
              </li>
              <li className="breadcrumb-item">
                <FeatherIcon icon="chevron-right" />
              </li>
              <li className="breadcrumb-item active">Bed Availability</li>
            </ul>
          </div>

          {/* Status Filter */}
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body p-0">
                  <div className="bed-status-tabs">
                    <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeTab === "allocated" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("allocated")}
                          href="#"
                        >
                          ALLOCATED (6)
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeTab === "available" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("available")}
                          href="#"
                        >
                          AVAILABLE (9)
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Options */}
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <div className="dropdown">
                    <button
                      className="btn btn-outline-secondary dropdown-toggle"
                      type="button"
                      id="paymentTypeDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Payment Type
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="paymentTypeDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          All
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Cash
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Insurance
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Corporate
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-primary">
                    <FeatherIcon icon="filter" size={14} className="me-1" />{" "}
                    Filter
                  </button>
                  <button className="btn btn-outline-secondary">
                    <FeatherIcon icon="refresh-cw" size={14} className="me-1" />{" "}
                    Refresh
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bed Availability Content */}
          {activeTab === "allocated" && (
            <div className="allocated-beds">
              {allocatedBeds.map((floor, floorIndex) => (
                <div key={`floor-${floorIndex}`} className="mb-4">
                  <div className="bg-light p-2 mb-3">
                    <h5 className="mb-0 fw-bold">{floor.floorName}</h5>
                  </div>

                  {floor.wards.map((ward, wardIndex) => (
                    <div
                      key={`ward-${floorIndex}-${wardIndex}`}
                      className="mb-4"
                    >
                      <div className="bg-light p-2 mb-3">
                        <h6 className="mb-0">
                          WARD NAME: {ward.wardName} ({ward.count})
                        </h6>
                      </div>

                      <div className="row">
                        {ward.beds.map((bed, bedIndex) => (
                          <div
                            key={`bed-${floorIndex}-${wardIndex}-${bedIndex}`}
                            className="col-md-3 mb-3"
                          >
                            <div className="card border h-100">
                              <div
                                className={`card-header ${
                                  bed.dischargeStatus === "READY FOR DISCHARGE"
                                    ? "bg-success"
                                    : "bg-primary"
                                } text-white py-2`}
                              >
                                {bed.bedId}
                              </div>
                              <div className="card-body p-2">
                                <div className="d-flex justify-content-between mb-2">
                                  <div>
                                    <h6 className="mb-0">
                                      {bed.patientName}-{bed.age} {bed.gender}
                                    </h6>
                                  </div>
                                  <div
                                    className={`avatar ${getAvatarBgClass(
                                      bed.avatar
                                    )} text-white rounded-circle d-flex align-items-center justify-content-center`}
                                    style={{ width: "32px", height: "32px" }}
                                  >
                                    {bed.avatar}
                                  </div>
                                </div>
                                <div className="small mb-1">
                                  <strong>MO:</strong> {bed.mobileNo}
                                </div>
                                <div className="small mb-1">
                                  <strong>REF BY:</strong> {bed.refBy}
                                </div>
                                <div className="small mb-1">
                                  <strong>UHID:</strong> {bed.uhid}
                                </div>
                                <div className="small mb-1">
                                  <strong>DR:</strong> {bed.doctor}
                                </div>
                                <div className="small mb-1">
                                  <strong>DOA:</strong> {bed.admissionDate} -{" "}
                                  {bed.stayDuration}
                                </div>
                                <div className="small mb-1">
                                  <strong>PAYER:</strong> {bed.payer}
                                </div>
                                <div className="mt-2">
                                  <span
                                    className={`badge ${getStatusBadgeClass(
                                      bed.paymentStatus
                                    )}`}
                                  >
                                    {bed.paymentStatus}
                                  </span>
                                  {bed.dischargeStatus && (
                                    <span className="badge bg-danger ms-1">
                                      {bed.dischargeStatus}
                                    </span>
                                  )}
                                  {bed.vip && (
                                    <span className="badge bg-warning text-dark ms-1">
                                      VIP
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="card-footer p-1 bg-light">
                                <div className="d-flex justify-content-between">
                                  <button
                                    className="btn btn-sm btn-link p-0"
                                    onClick={() =>
                                      navigate("/reception/billing")
                                    }
                                  >
                                    <FeatherIcon icon="file-text" size={16} />
                                  </button>
                                  <button
                                    className="btn btn-sm btn-link p-0"
                                    onClick={() => setShowModal(true)}
                                  >
                                    <FeatherIcon icon="bell" size={16} />
                                  </button>
                                  <button
                                    className="btn btn-sm btn-link p-0"
                                    onClick={() =>
                                      navigate("/reception/discharge")
                                    }
                                  >
                                    <FeatherIcon
                                      icon="check-circle"
                                      size={16}
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {activeTab === "available" && (
            <div className="available-beds">
              {availableBeds.map((floor, floorIndex) => (
                <div key={`floor-${floorIndex}`} className="mb-4">
                  <div className="bg-light p-2 mb-3">
                    <h5 className="mb-0 fw-bold">{floor.floorName}</h5>
                  </div>

                  {floor.wards.map((ward, wardIndex) => (
                    <div
                      key={`ward-${floorIndex}-${wardIndex}`}
                      className="mb-4"
                    >
                      <div className="bg-light p-2 mb-3">
                        <h6 className="mb-0">
                          WARD NAME: {ward.wardName} ({ward.count})
                        </h6>
                      </div>

                      <div className="row">
                        {ward.beds.map((bed, bedIndex) => (
                          <div
                            key={`bed-${floorIndex}-${wardIndex}-${bedIndex}`}
                            className="col-md-3 mb-3"
                          >
                            <div className="card border h-100">
                              <div className="card-header bg-primary text-white py-2">
                                {bed.bedId}
                              </div>
                              <div className="card-body p-3">
                                <div className="d-flex flex-column align-items-center justify-content-center h-100">
                                  <span
                                    className={`badge ${getStatusBadgeClass(
                                      bed.status
                                    )} mb-2 p-2`}
                                  >
                                    {bed.status}
                                  </span>

                                  {bed.status === "VACANT" && (
                                    <div className="text-center">
                                      <div className="text-success mb-2">
                                        <FeatherIcon
                                          icon="check-circle"
                                          size={40}
                                        />
                                      </div>
                                      <p className="small mb-1">
                                        Last Cleaned:
                                      </p>
                                      <p className="small">{bed.lastCleaned}</p>
                                      <button className="btn btn-sm btn-primary mt-2">
                                        Allocate Bed
                                      </button>
                                    </div>
                                  )}

                                  {bed.status === "UNDER CLEANING" && (
                                    <div className="text-center">
                                      <div className="text-warning mb-2">
                                        <FeatherIcon
                                          icon="refresh-cw"
                                          size={40}
                                        />
                                      </div>
                                      <p className="small mb-1">
                                        Cleaning Started:
                                      </p>
                                      <p className="small">
                                        {bed.cleaningStarted}
                                      </p>
                                      <button className="btn btn-sm btn-outline-success mt-2">
                                        Mark as Clean
                                      </button>
                                    </div>
                                  )}

                                  {bed.status === "UNDER MAINTENANCE" && (
                                    <div className="text-center">
                                      <div className="text-secondary mb-2">
                                        <FeatherIcon icon="tool" size={40} />
                                      </div>
                                      <p className="small mb-1">
                                        {bed.maintenanceInfo}
                                      </p>
                                      <p className="small">
                                        Expected completion:{" "}
                                        {bed.expectedCompletion}
                                      </p>
                                      <button className="btn btn-sm btn-outline-success mt-2">
                                        Mark as Available
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
        <NurseNotificationModal
          show={showModal}
          handleClose={() => setShowModal(false)}
        />
      </div>
    </>
  );
};

export default BedAvailability;
