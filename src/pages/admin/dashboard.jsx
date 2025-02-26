import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Sidebar id="menu-item" id1="menu-items" activeClassName="dashboard" />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Blog </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">View Blog</li>
                </ul>
              </div>
            </div>
          </div>
          <div>hi</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
