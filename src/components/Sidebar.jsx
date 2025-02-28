/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  blog,
  dashboard,
  doctor,
  doctorschedule,
  logout,
  menuicon04,
  menuicon06,
  menuicon08,
  menuicon09,
  menuicon10,
  menuicon11,
  menuicon12,
  menuicon14,
  menuicon15,
  menuicon16,
  patients,
  sidemenu,
} from "./imagepath";
import Scrollbars from "react-custom-scrollbars-2";

const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState("");
  const handleClick = (e, item, item1, item3) => {
    const div = document.querySelector(`#${item}`);
    const ulDiv = document.querySelector(`.${item1}`);
    e?.target?.className
      ? (ulDiv.style.display = "none")
      : (ulDiv.style.display = "block");
    e?.target?.className
      ? div.classList.remove("subdrop")
      : div.classList.add("subdrop");
  };

  useEffect(() => {
    if (props?.id && props?.id1) {
      const ele = document.getElementById(`${props?.id}`);
      handleClick(ele, props?.id, props?.id1);
    }
  }, []);

  const expandMenu = () => {
    document.body.classList.remove("expand-menu");
  };
  const expandMenuOpen = () => {
    document.body.classList.add("expand-menu");
  };
  return (
    <>
      <div className="sidebar" id="sidebar">
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax="95vh"
          thumbMinSize={30}
          universal={false}
          hideTracksWhenNotNeeded={true}
        >
          <div className="sidebar-inner slimscroll">
            <div
              id="sidebar-menu"
              className="sidebar-menu"
              onMouseLeave={expandMenu}
              onMouseOver={expandMenuOpen}
            >
              <ul>
                <li className="menu-title">Pages</li>
                {/* admin */}
                <li className="submenu">
                  <Link
                    to="#"
                    id="menu-item"
                    onClick={(e) => {
                      handleClick(e, "menu-item", "menu-items");
                    }}
                  >
                    <span className="menu-side">
                      <img src={dashboard} alt="" />
                    </span>{" "}
                    <span> Admin </span> <span className="menu-arrow" />
                  </Link>
                  <ul
                    style={{
                      display: sidebar === "Dashboard" ? "block" : "none",
                    }}
                    className="menu-items"
                  >
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "dashboard" ? "active" : ""
                        }
                        to="/admin/dashboard"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "DietPlan" ? "active" : ""
                        }
                        to="/admin/diet-plan"
                      >Dietplan
                        
                      </Link>
                      
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "operative-info"
                            ? "active"
                            : ""
                        }
                        to="/admin/operative-info"
                      >
                        Operative-info
                          
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* FRONT OFFICE */}
                <li className="submenu">
                  <Link
                    to="#"
                    id="frontoffice"
                    onClick={(e) => {
                      // setSidebar('FrontOffice')
                      handleClick(e, "frontoffice", "frontoffices");
                    }}
                  >
                    <span className="menu-side">
                      <img src={doctor} alt="" />
                    </span>{" "}
                    <span> Front Office </span> <span className="menu-arrow" />
                  </Link>
                  <ul
                    style={{
                      display: sidebar === "FrontOffice" ? "block" : "none",
                    }}
                    className="frontoffices"
                  >
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "outpatient"
                            ? "active"
                            : ""
                        }
                        to="/outpatient"
                      >
                        Outpatient
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "inpatient" ? "active" : ""
                        }
                        to="/inpatient"
                      >
                        Inpatient
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "patients" ? "active" : ""
                        }
                        to="/patients"
                      >
                        Patients
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "appointments"
                            ? "active"
                            : ""
                        }
                        to="/appointments"
                      >
                        Appointments
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "emergency" ? "active" : ""
                        }
                        to="/emergency"
                      >
                        Emergency
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "queue-management"
                            ? "active"
                            : ""
                        }
                        to="/queue-management"
                      >
                        Queue Management
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={
                          props?.activeClassName === "Tokenboard"
                            ? "active"
                            : ""
                        }
                        to="/token-board"
                      >
                        Token Board
                      </Link>
                      <li>
                        <Link
                          className={
                            props?.activeClassName === "" ? "active" : ""
                          }
                          to="/bed-availability"
                        >
                          Bed Availability
                        </Link>
                      </li>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "Appointment"
                            ? "active"
                            : ""
                        }
                        to="/appointment"
                      >
                      Appointment(Health Checkup)
                      </Link>
                    </li>



                  </ul>
                </li>

                {/* recption */}
                <li className="submenu">
                  {/* <Link to="#" id="reception-dropmenu" onClick={(e) => handleClick(e, "reception-dropmenu", "reception-items")}></Link> */}
                  <Link
                    to="#"
                    id="reception-dropmenu"
                    onClick={(e) =>
                      handleClick(e, "reception-dropmenu", "reception-items")
                    }
                  ></Link>
                  <Link
                    to="#"
                    id="reception-dropmenu"
                    onClick={(e) => handleClick(e, "reception-dropmenu", "reception-items")}
                  >
                    <span className="menu-side">
                      <img src={patients} alt="" />
                    </span>{" "}
                    <span>Reception </span> <span className="menu-arrow" />
                  </Link>
                  <ul
                    style={{
                      display: sidebar === "Reception" ? "block" : "none",
                    }}
                    className="reception-items"
                  >
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "billing" ? "active" : ""
                        }
                        to="/reception/billing"
                      >
                        Billing And Cashiering
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "discharge" ? "active" : ""
                        }
                        to="/reception/discharge"
                      >
                        Discharge Summary
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "medicaladminstration"
                            ? "active"
                            : ""
                        }
                        to="/reception/medicaladminstration"
                      >
                        Medical Adminstartion(MAR)
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "equipment"
                            ? "active"
                            : ""
                        }
                        to="/reception/equipment"
                      >
                        Equipment
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* pharmacy */}
                <li className="submenu">
                  <Link
                    to="#"
                    id="pharmacy-menu-item"
                    onClick={(e) => {
                      handleClick(
                        e,
                        "pharmacy-menu-item",
                        "pharmacy-menu-items"
                      );
                    }}
                  >
                    <span className="menu-side">
                      <img src={dashboard} alt="" />
                    </span>{" "}
                    <span> Pharmacy </span> <span className="menu-arrow" />
                  </Link>
                  <ul
                    style={{
                      display: sidebar === "Pharmacy" ? "block" : "none",
                    }}
                    className="pharmacy-menu-items"
                  >
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "inventory" ? "active" : ""
                        }
                        to="/pharmacy/inventory"
                      >
                        Inventory
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "prescriptions"
                            ? "active"
                            : ""
                        }
                        to="/pharmacy/prescriptions"
                      >
                        Prescriptions(RX)
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* doctor */}
                <li className="submenu">
                  <Link
                    to="#"
                    id="doctor-dropmenu"
                    onClick={(e) => {
                      handleClick(e, "doctor-dropmenu", "doctor-items");
                    }}
                  >
                    <span className="menu-side">
                      <img src={dashboard} alt="" />
                    </span>{" "}
                    <span> Doctor </span> <span className="menu-arrow" />
                  </Link>
                  <ul
                    style={{
                      display: sidebar === "Schedule" ? "block" : "none",
                    }}
                    className="doctor-items"
                  >
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "schedule" ? "active" : ""
                        }
                        to="/doctor/schedule"
                      >
                        Schedule
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "consultation"
                            ? "active"
                            : ""
                        }
                        to="/doctor/consultation"
                      >
                        Consultation
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "DocterSchedule"
                            ? "active"
                            : ""
                        }
                        to="/doctor/doctor-schedule"
                      >
                        Docter Schedule
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* bloodbank */}
                <li className="submenu">
                  <Link
                    to="#"
                    id="blood-menu-item"
                    onClick={(e) => {
                      handleClick(e, "blood-menu-item", "blood-menu-items");
                    }}
                  >
                    <span className="menu-side">
                      <img src={dashboard} alt="" />
                    </span>{" "}
                    <span> Blood Bank </span> <span className="menu-arrow" />
                  </Link>
                  <ul
                    style={{
                      display: sidebar === "BloodBank" ? "block" : "none",
                    }}
                    className="blood-menu-items"
                  >
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "BloodGroup"
                            ? "active"
                            : ""
                        }
                        to="/blood/bloodGroup"
                      >
                        Blood Group
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "BloodDonor"
                            ? "active"
                            : ""
                        }
                        to="/blood/bloodDonor"
                      >
                        Blood Donor Details
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={
                          props?.activeClassName === "BloodIssue"
                            ? "active"
                            : ""
                        }
                        to="/blood/bloodIssue"
                      >
                        Blood Issue Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "ComponentIssue"
                            ? "active"
                            : ""
                        }
                        to="/blood/componentIssue"
                      >
                        Component Issue Details
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Laboratory */}
                <li className="submenu">
                  <Link
                    to="#"
                    id="laboratory-menu-item"
                    onClick={(e) => {
                      handleClick(
                        e,
                        "laboratory-menu-item",
                        "laboratory-menu-items"
                      );
                    }}
                  >
                    <span className="menu-side">
                      <img src={dashboard} alt="" />
                    </span>{" "}
                    <span> Laboratory </span> <span className="menu-arrow" />
                  </Link>
                  <ul
                    style={{
                      display: sidebar === "laboratory" ? "block" : "none",
                    }}
                    className="laboratory-menu-items"
                  >
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "LabDashboard"
                            ? "active"
                            : ""
                        }
                        to="/laboratory/dashboard"
                      >
                        Sample Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "LabCollection"
                            ? "active"
                            : ""
                        }
                        to="/laboratory/collection"
                      >
                        Sample Collection
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={
                          props?.activeClassName === "LabSendReceive"
                            ? "active"
                            : ""
                        }
                        to="/laboratory/send-receive"
                      >
                        Sample Send/Receive
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "LabProcessing"
                            ? "active"
                            : ""
                        }
                        to="/laboratory/processing"
                      >
                        Sample Processing
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "LabReporting"
                            ? "active"
                            : ""
                        }
                        to="/laboratory/reporting"
                      >
                        Sample Reporting
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "LabRadiologyReporting"
                            ? "active"
                            : ""
                        }
                        to="/laboratory/radiology-report"
                      >
                        Sample Radiology Reporting
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "LabHistopathology"
                            ? "active"
                            : ""
                        }
                        to="/laboratory/histopathology"
                      >
                        Histopathology Workflows
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "LabOutsource"
                            ? "active"
                            : ""
                        }
                        to="/laboratory/outsource"
                      >
                        Sample Outsource
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "DoorStepSampleCollection"
                            ? "active"
                            : ""
                        }
                        to="/laboratory/doorstepsamplecollection"
                      >
                        Door-step Sample Collection
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "SampleLogistics"
                            ? "active"
                            : ""
                        }
                        to="/laboratory/sample-logistics"
                      >
                        Sample Logistics
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="submenu">
                  <Link
                    to="#"
                    id="ambulance-menu-item"
                    onClick={(e) => {
                      handleClick(
                        e,
                        "ambulance-menu-item",
                        "ambulance-menu-items"
                      );
                    }}
                  >
                    <span className="menu-side">
                      <img src={dashboard} alt="" />
                    </span>{" "}
                    <span> Ambulance </span> <span className="menu-arrow" />
                  </Link>
                  <ul
                    style={{
                      display: sidebar === "Ambulance" ? "block" : "none",
                    }}
                    className="ambulance-menu-items"
                  >
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "AmbulanceDetails"
                            ? "active"
                            : ""
                        }
                        to="/Ambulance/AmbulanceDetails"
                      >
                        Ambulance Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "AmbulanceCall"
                            ? "active"
                            : ""
                        }
                        to="/Ambulance/AmbulanceCall"
                      >
                        {" "}
                        Ambulance Call
                      </Link>
                    </li>
                  </ul>
                </li>

                 
                 {/* HR */}
                 <li className="submenu">
                  <Link
                    to="#"
                    id="hr-menu-item"
                    onClick={(e) => {
                      handleClick(
                        e,
                        "hr-menu-item",
                        "hr-menu-items"
                      );
                    }}
                  >
                    <span className="menu-side">
                      <img src={dashboard} alt="" />
                    </span>{" "}
                    <span> HRMS </span> <span className="menu-arrow" />
                  </Link>
                  <ul
                    style={{
                      display: sidebar === "HRMS" ? "block" : "none",
                    }}
                    className="hr-menu-items"
                  >
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "staff-list" ? "active" : ""
                        }
                        to="/hr/staff-list"
                      >
                        Staff List
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "leaves" ? "active" : ""
                        }
                        to="/hr/leaves"
                      >
                        Leaves
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "holidays" ? "active" : ""
                        }
                        to="/hr/holidays"
                      >
                        Holidays
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          props?.activeClassName === "attendance" ? "active" : ""
                        }
                        to="/hr/attendance"
                      >
                        Attendence
                      </Link>
                    </li>
                  </ul>
                </li>

              </ul>

              <div className="logout-btn">
                <Link to="/login">
                  <span className="menu-side">
                    <img src={logout} alt="" />
                  </span>{" "}
                  <span>Logout</span>
                </Link>
              </div>
            </div>
          </div>
        </Scrollbars>
      </div>
    </>
  );
};
export default Sidebar;
