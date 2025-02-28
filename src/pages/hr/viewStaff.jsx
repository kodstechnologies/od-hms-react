import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import {
  cameraicon,
  doctor,
  imagesend,
  medalicon,
  medalicon02,
  medalicon03,
  menuicon16,
  profilebg,
  profileuser02,
} from "../../components/imagepath";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

const StaffProfile = () => {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <div>
      <Header />
      <Sidebar
        id="hr-menu-item"
        id1="hr-menu-items"
        activeClassName="staff-list"
      />
      <>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">HRMS </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                      <Link to="/hr/staff-list">Staff List</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                      Staff Profile
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="about-info">
                          <h4>
                            Staffs Profile{" "}
                            <span>
                              <Link to="#">
                                <i className="feather-more-vertical">
                                  <FeatherIcon icon="more-vertical" />
                                </i>
                              </Link>
                            </span>
                          </h4>
                        </div>
                        <div className="doctor-profile-head">
                          <div className="profile-bg-img">
                            <img src={profilebg} alt="Profile" />
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-md-4">
                              <div className="profile-user-box">
                                <div className="profile-user-img">
                                  <img src={profileuser02} alt="Profile" />
                                  <div className="form-group doctor-up-files profile-edit-icon mb-0">
                                    <div className="uplod d-flex">
                                      <label className="file-upload profile-upbtn mb-0">
                                        <img src={cameraicon} alt="Profile" />
                                        <input type="file" />
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="names-profiles">
                                  <h4>Neha Joshi</h4>
                                  <h5>Nurse</h5>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 d-flex align-items-center">
                              <div className="follow-group">
                                <div className="doctor-follows">
                                  <h5>Patients Attended</h5>
                                  <h4>850</h4>
                                </div>
                                <div className="doctor-follows">
                                  <h5>Surgeries Completed</h5>
                                  <h4>180</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="doctor-personals-grp">
                      <div className="card">
                        <div className="card-body">
                          <div className="heading-detail ">
                            <h4 className="mb-3">About me</h4>
                            <p>
                              Hello I am Neha Joshi a Gynaecologist in Sanjivni
                              Hospital Surat. I love to work with all my
                              hospital staff and seniour doctors.
                            </p>
                          </div>
                          <div className="about-me-list">
                            <ul className="list-space">
                              <li>
                                <h4>Gender</h4>
                                <span>Female</span>
                              </li>
                              <li>
                                <h4>Operation Done</h4>
                                <span>30+</span>
                              </li>
                              <li>
                                <h4>Designation</h4>
                                <span>Nurse</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="doctor-personals-grp">
                      <div className="card">
                        <div className="card-body">
                          <div className="heading-detail">
                            <h4>Speciality</h4>
                          </div>
                          <div className="personal-activity">
                            <div className="personal-icons status-grey">
                              <img src={medalicon} alt="" />
                            </div>
                            <div className="views-personal">
                              <h4>Proffesionals</h4>
                              <h5>Certified Skin Treatment</h5>
                            </div>
                          </div>
                          <div className="personal-activity">
                            <div className="personal-icons status-green">
                              <img src={medalicon02} alt="" />
                            </div>
                            <div className="views-personal">
                              <h4>Certified</h4>
                              <h5>Cold Laser Operation</h5>
                            </div>
                          </div>
                          <div className="personal-activity mb-0">
                            <div className="personal-icons status-orange">
                              <img src={medalicon03} alt="" />
                            </div>
                            <div className="views-personal">
                              <h4>Medication Laser</h4>
                              <h5>Hair Lose Product</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="doctor-personals-grp">
                      <div className="card">
                        <div className="card-body">
                          <div className="tab-content-set">
                            <ul className="nav">
                              <li>
                                <Link
                                  to="#"
                                  className={
                                    activeTab === "about" ? "active" : ""
                                  }
                                  onClick={() => setActiveTab("about")}
                                >
                                  <span className="set-about-icon me-2">
                                    <img src={doctor} alt="" />
                                  </span>
                                  About me
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className={
                                    activeTab === "settings" ? "active" : ""
                                  }
                                  onClick={() => setActiveTab("settings")}
                                >
                                  <span className="set-about-icon me-2">
                                    <img src={menuicon16} alt="" />
                                  </span>
                                  Settings
                                </Link>
                              </li>
                            </ul>
                          </div>
                          {activeTab === "about" && (
                            <>
                              <div className="personal-list-out">
                                <div className="row">
                                  <div className="col-xl-3 col-md-6">
                                    <div className="detail-personal">
                                      <h2>Full Name</h2>
                                      <h3>Neha Joshi</h3>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-md-6">
                                    <div className="detail-personal">
                                      <h2>Mobile </h2>
                                      <h3>+1 23 456890</h3>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-md-6">
                                    <div className="detail-personal">
                                      <h2>Email</h2>
                                      <h3>Neha@email.com</h3>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-md-6">
                                    <div className="detail-personal">
                                      <h2>Location</h2>
                                      <h3>Bhubaneswar</h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hello-park">
                                <p>
                                  Completed my graduation in Gynaecologist
                                  Medicine from the well known and renowned
                                  institution of India – SARDAR PATEL MEDICAL
                                  COLLEGE, BARODA in 2000-01, which was
                                  affiliated to M.S. University. I ranker in
                                  University exams from the same university from
                                  1996-01.
                                </p>
                                <p>
                                  Worked as Professor and Head of the department
                                  ; Community medicine Department at Sterline
                                  Hospital, Rajkot, Gujarat from 2003-2015
                                </p>
                              </div>
                              <div className="hello-park mb-2">
                                <h5>Education</h5>
                                <div className="table-responsive">
                                  <table className="table mb-0 border-0 custom-table profile-table">
                                    <thead>
                                      <tr>
                                        <th>Year</th>
                                        <th>Degree</th>
                                        <th>Institute</th>
                                        <th>Result</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>2002-2005</td>
                                        <td>M.D. of Medicine</td>
                                        <td>University of Wyoming </td>
                                        <td>
                                          <button className="custom-badge status-green ">
                                            Distinction
                                          </button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2005-2014</td>
                                        <td>MBBS</td>
                                        <td>Netherland Medical College </td>
                                        <td>
                                          <button className="custom-badge status-green ">
                                            Distinction
                                          </button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="hello-park mb-2">
                                <h5>Experience</h5>
                                <div className="table-responsive">
                                  <table className="table mb-0 border-0 custom-table profile-table">
                                    <thead>
                                      <tr>
                                        <th>Year</th>
                                        <th>Position</th>
                                        <th>Hospital</th>
                                        <th>Feedback</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>2002-2005</td>
                                        <td>Senior doctor </td>
                                        <td>Midtown Medical Clinic </td>
                                        <td>
                                          <button className="custom-badge status-orange ">
                                            Good
                                          </button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2005-2014</td>
                                        <td>Associate Prof. </td>
                                        <td>Netherland Medical College </td>
                                        <td>
                                          <button className="custom-badge status-green ">
                                            Excellence
                                          </button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="hello-park">
                                <h5>
                                  Conferences, Cources &amp; Workshop Attended
                                </h5>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </p>
                                <p>
                                  Excepteur sint occaecat cupidatat non
                                  proident, sunt in culpa qui officia deserunt
                                  mollit anim id est laborum.
                                </p>
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam
                                </p>
                                <p className="mb-0">
                                  Ut enim ad minima veniam, quis nostrum
                                  exercitationem ullam corporis suscipit
                                  laboriosam, nisi ut aliquid ex ea commodi
                                  consequatur? Quis autem vel eum iure
                                  reprehenderit qui in ea voluptate velit esse
                                  quam nihil molestiae consequatur
                                </p>
                              </div>
                            </>
                          )}
                          {activeTab === "settings" && (
                            <div className="setting-form-blk">
                              <form>
                                <div className="row">
                                  <div className="col-12">
                                    <div className="form-heading">
                                      <h4>Account Setting</h4>
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-12">
                                    <div className="form-group local-forms">
                                      <label>Username </label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        defaultValue="neha@29"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-12">
                                    <div className="form-group local-forms">
                                      <label>Mobile </label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        defaultValue="+1 23 456890"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-12">
                                    <div className="form-group local-forms">
                                      <label>Email </label>
                                      <input
                                        className="form-control"
                                        type="email"
                                        defaultValue="neha@info.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-12">
                                    <div className="form-group local-forms">
                                      <label>
                                        Address{" "}
                                        <span className="login-danger">*</span>
                                      </label>
                                      <textarea
                                        className="form-control"
                                        rows={3}
                                        cols={30}
                                        defaultValue={
                                          "101, Elanxa Apartments, 340 N Madison Avenue"
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="form-heading">
                                    <h4>Security Setting</h4>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12">
                                  <div className="form-group local-forms">
                                    <label>Current Password </label>
                                    <input
                                      className="form-control"
                                      type="password"
                                      defaultValue={12345}
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12">
                                  <div className="form-group local-forms">
                                    <label>New Password </label>
                                    <input
                                      className="form-control"
                                      type="password"
                                      placeholder
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12">
                                  <div className="form-group local-forms">
                                    <label>Confirm Password </label>
                                    <input
                                      className="form-control"
                                      type="password"
                                      placeholder
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12">
                                  <div className="profile-check-blk form-group">
                                    <div className="remember-me">
                                      <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                                        {" "}
                                        Profile Visibility For Everyone
                                        <input
                                          type="checkbox"
                                          name="radio"
                                          defaultChecked
                                        />
                                        <span className="checkmark" />
                                      </label>
                                    </div>
                                    <div className="remember-me">
                                      <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                                        {" "}
                                        New task notifications
                                        <input
                                          type="checkbox"
                                          name="radio"
                                          defaultChecked
                                        />
                                        <span className="checkmark" />
                                      </label>
                                    </div>
                                    <div className="remember-me">
                                      <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                                        {" "}
                                        New friend request notifications
                                        <input type="checkbox" name="radio" />
                                        <span className="checkmark" />
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="doctor-submit">
                                    <button
                                      type="submit"
                                      className="btn btn-primary submit-form me-2"
                                    >
                                      Submit
                                    </button>
                                    <button
                                      type="submit"
                                      className="btn btn-primary cancel-form"
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="notification-box">
            <div className="msg-sidebar notifications msg-noti">
              <div className="topnav-dropdown-header">
                <span>Messages</span>
              </div>
              <div className="drop-scroll msg-list-scroll" id="msg_list">
                <ul className="list-box">
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">R</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Richard Miles </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item new-message">
                        <div className="list-left">
                          <span className="avatar">J</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">John Doe</span>
                          <span className="message-time">1 Aug</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">T</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Tarah Shropshire{" "}
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">M</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Mike Litorus</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">C</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Catherine Manseau{" "}
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">D</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Domenic Houston{" "}
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">B</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Buster Wigton{" "}
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">R</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Rolland Webber{" "}
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">C</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Claire Mapes </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">M</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Melita Faucher</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">J</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Jeffery Lalor</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">L</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Loren Gatlin</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">T</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            Tarah Shropshire
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <Link to="#">See all messages</Link>
              </div>
            </div>
          </div>
        </div>
        <div
          id="delete_patient"
          className="modal fade delete-modal"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src={imagesend} alt="" width={50} height={46} />
                <h3>Are you sure want to delete this ?</h3>
                <div className="m-t-20">
                  {" "}
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
    </div>
  );
};

export default StaffProfile;
