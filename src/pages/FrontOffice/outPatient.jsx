import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Link } from "react-router-dom";
import { profiles03 } from "../../components/imagepath";

const Outpatient = () => {
  const [weekendsVisible, setweekendsVisible] = useState(true);
  const defaultEvents = [
    {
      title: "Event Name 4",
      start: Date.now() + 148000000,
      className: "bg-purple",
    },
    {
      title: "Test Event 1",
      start: Date.now(),
      end: Date.now(),
      className: "bg-success",
    },
    {
      title: "Test Event 2",
      start: Date.now() + 168000000,
      className: "bg-info",
    },
    {
      title: "Test Event 3",
      start: Date.now() + 338000000,
      className: "bg-primary",
    },
  ];
  const handleDateSelect = (selectInfo) => {
    setisnewevent(true);
    setaddneweventobj(selectInfo);
  };

  return (
    <>
      <Header />
      <Sidebar
        id="frontoffice"
        id1="frontoffices"
        activeClassName="outpatient"
      />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <div className="card">
                <div className="card-body">
                  <div id="calendar">
                    <FullCalendar
                      plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                      ]}
                      headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                      }}
                      initialView="dayGridMonth"
                      editable={true}
                      selectable={true}
                      selectMirror={true}
                      dayMaxEvents={true}
                      weekends={weekendsVisible}
                      initialEvents={defaultEvents} // alternatively, use the `events` setting to fetch from a feed
                      select={handleDateSelect}
                      eventClick={(clickInfo) => handleEventClick(clickInfo)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="float-end mb-2">
                <div className="add-more">
                  <Link to="add-opd" className="btn btn-primary">
                    <i className="fa fa-plus" /> Add OPD
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        to="#bottom-justified-tab1"
                        data-bs-toggle="tab"
                      >
                        Appointment
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="#bottom-justified-tab2"
                        data-bs-toggle="tab"
                      >
                        Follow Up
                      </Link>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane show active"
                      id="bottom-justified-tab1"
                    >
                      <div className="card">
                        <ul
                          className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified"
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly", // Correct camelCase syntax
                            flexWrap: "nowrap", // Correct camelCase syntax
                          }}
                        >
                          <li className="nav-item">
                            <Link
                              className="nav-link active"
                              to="#solid-rounded-justified-tab1"
                              data-bs-toggle="tab"
                            >
                              Today
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              to="#solid-rounded-justified-tab2"
                              data-bs-toggle="tab"
                            >
                              Waiting
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              to="#solid-rounded-justified-tab3"
                              data-bs-toggle="tab"
                            >
                              Engaged
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              to="#solid-rounded-justified-tab4"
                              data-bs-toggle="tab"
                            >
                              Done
                            </Link>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div
                            className="tab-pane show active"
                            id="solid-rounded-justified-tab1"
                          >
                            <div className="widget author-widget border">
                              <div className="authr-blog-group text-center">
                                <h2>(250112)Siva M Demo</h2>
                                <span>Waiting</span>
                                <p style={{ color: "black" }}>
                                  Appointment No. | 3340 Dr. Yogesh Balar WS: 4
                                  H 29 M
                                </p>
                                <b>Time: 12:15 PM</b>
                                <ul className="nav social-blk">
                                  <li>
                                    <Link
                                      to="#"
                                      className="btn btn-outline-primary"
                                    >
                                      Printing
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane"
                            id="solid-rounded-justified-tab2"
                          >
                            <div className="widget author-widget border">
                              <div className="authr-blog-group text-center">
                                <h2>(250112)Siva M Demo</h2>
                                <span>Waiting</span>
                                <p style={{ color: "black" }}>
                                  Appointment No. | 3340 Dr. Yogesh Balar WS: 4
                                  H 29 M
                                </p>
                                <b>Time: 12:15 PM</b>
                                <ul className="nav social-blk">
                                  <li>
                                    <Link
                                      to="#"
                                      className="btn btn-outline-primary"
                                    >
                                      Vital
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="btn btn-outline-primary"
                                    >
                                      Billing
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="btn btn-outline-primary"
                                    >
                                      Printing
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane"
                            id="solid-rounded-justified-tab3"
                          >
                            No appointment available
                          </div>
                          <div
                            className="tab-pane"
                            id="solid-rounded-justified-tab4"
                          >
                            <div className="widget author-widget border">
                              <div className="authr-blog-group text-center">
                                <h2>(HC721)Jamila Khatoon</h2>
                                <span>Completed</span>
                                <p style={{ color: "black" }}>
                                  Appointment No. | 3328 Dr. Yogesh Balar
                                </p>
                                <ul className="nav social-blk">
                                  <li>
                                    <Link
                                      to="#"
                                      className="btn btn-outline-primary"
                                    >
                                      Billing
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="btn btn-outline-primary"
                                    >
                                      Printing
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="bottom-justified-tab2">
                      <div className="widget author-widget border">
                        <div className="authr-blog-group text-center">
                          <h2>(250112)Siva M Demo</h2>
                          <span>Waiting</span>
                          <p>
                            Appointment No. | 3340 Dr. Yogesh Balar WS: 4 H 29 M
                          </p>
                          <ul className="nav social-blk">
                            <li>
                              <Link to="#" className="btn btn-outline-primary">
                                Create
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="btn btn-outline-primary">
                                Edit
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="btn btn-outline-primary">
                                Cancel
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
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

export default Outpatient;
