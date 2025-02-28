import React from "react";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { blogimg8 } from "../../../components/imagepath";

const DoctorVisit = () => {
  return (
    <>
      <Header />
      <Sidebar
        id="frontoffice"
        id1="frontoffices"
        activeClassName="inpatient"
      />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/inpatient">Inpatient</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Doctor Visit</li>
                </ul>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 ">
                <Link to={"create-new-visit"} className="btn btn-primary float-end">
                  Create New Visit
                </Link>
              </div>
            </div>
            <div className="row d-flex justify-content-around ">
              <div className="treat-box mb-2 col-md-4">
                <div className="user-imgs-blk">
                  <img src={blogimg8} alt="#" />
                  <div className="active-user-detail flex-grow-1">
                    <h4>General Health Check up </h4>
                    <p>Dr. Dianne Philips at 10:00-11:00 AM</p>
                  </div>
                </div>
                <Link to="#" className="custom-badge status-green">
                  Pending
                </Link>
              </div>

              <div className="treat-box mb-2 col-md-4">
                <div className="user-imgs-blk">
                  <img src={blogimg8} alt="#" />
                  <div className="active-user-detail flex-grow-1">
                    <h4>General Health Check up </h4>
                    <p>Dr. Dianne Philips at 10:00-11:00 AM</p>
                  </div>
                </div>
                <Link to="#" className="custom-badge status-green">
                  Pending
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorVisit;
