import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Link } from "react-router-dom";

const CreateReport = () => {
  return (
    <>
      <Header />
      <Sidebar
        id="laboratory-menu-item"
        id1="laboratory-menu-items"
        activeClassName="CreateReport"
      />

      <div className="page-wrapper">
        <div className="content">
          <div className="col-sm-12 mb-2">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/laboratory/dashboard">Laboratory </Link>
              </li>
              <li className="breadcrumb-item">
                <FeatherIcon icon="chevron-right" />
              </li>
              <li className="breadcrumb-item active">
                <Link to="/laboratory/reporting">
                Reports 
                </Link>
              </li>
              <li className="breadcrumb-item">
                <FeatherIcon icon="chevron-right" />
              </li>
              <li className="breadcrumb-item active">Create</li>
            </ul>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title">New Report Entry</h4>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Sample ID</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Report Type</label>
                  <select className="form-select" required>
                    <option>General Laboratory</option>
                    <option>Pathology</option>
                    <option>Radiology</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Template</label>
                  <select className="form-select" required>
                    <option>Standard Template</option>
                    <option>Detailed Template</option>
                    <option>Summary Template</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Priority</label>
                  <select className="form-select" required>
                    <option>Normal</option>
                    <option>Urgent</option>
                    <option>Critical</option>
                  </select>
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label">Additional Notes</label>
                  <textarea className="form-control" rows="3"></textarea>
                </div>
                <div className="col-12">
                  <button type="button" className="btn btn-primary">
                    Create Report Entry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateReport;
