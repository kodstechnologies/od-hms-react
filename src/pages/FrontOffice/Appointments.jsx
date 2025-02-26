import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const Appointments = () => {
  return (
    <>
      <Header />
      <Sidebar
        id="frontoffice"
        id1="frontoffices"
        activeClassName="appointments"
      />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Appointments </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <div className="dash-content dash-count flex-grow-1">
                  <h4>Today's Appointments</h4>
                  <h2>
                    {" "}
                    <CountUp delay={0.4} end={24} duration={0.6} />
                  </h2>
                  <p>
                    <span className="passive-view">
                      <i className="feather-arrow-up-right me-1">
                        <FeatherIcon icon="arrow-up-right" />
                      </i>
                      8 Completed
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <div className="dash-content dash-count flex-grow-1">
                  <h4>Upcoming</h4>
                  <h2>
                    {" "}
                    <CountUp delay={0.4} end={45} duration={0.6} />
                  </h2>
                  <p>
                    <span className="passive-view">
                      <i className="feather-arrow-up-right me-1">
                        <FeatherIcon icon="arrow-up-right" />
                      </i>
                      This Week
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <div className="dash-content dash-count flex-grow-1">
                  <h4>Cancellations</h4>
                  <h2>
                    {" "}
                    <CountUp delay={0.4} end={3} duration={0.6} />
                  </h2>
                  <p>
                    <span style={{ color: "red" }}>
                      Today
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <div className="dash-content dash-count flex-grow-1">
                  <h4>Available Slots</h4>
                  <h2>
                    {" "}
                    <CountUp delay={0.4} end={12} duration={0.6} />
                  </h2>
                  <p>
                    <span className="passive-view">Today</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;
