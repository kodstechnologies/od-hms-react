import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Link } from "react-router-dom";

const CreateProcessing = () => {
  return (
    <>
      <Header />
      <Sidebar
        id="laboratory-menu-item"
        id1="laboratory-menu-items"
        activeClassName="CreateProcessing"
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
                <Link to="/laboratory/processing">Processing </Link>
              </li>
              <li className="breadcrumb-item">
                <FeatherIcon icon="chevron-right" />
              </li>
              <li className="breadcrumb-item active">Create</li>
            </ul>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title">New Processing Entry</h4>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Sample ID</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Sample Type</label>
                  <select className="form-select" required>
                    <option>Blood Test</option>
                    <option>Urine Test</option>
                    <option>Radiology</option>
                    <option>MRI</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Processing Stage</label>
                  <select className="form-select" required>
                    <option>Initial Processing</option>
                    <option>Analysis</option>
                    <option>Reviewing</option>
                    <option>Completed</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Time Elapsed</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. 15 mins"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Status</label>
                  <select className="form-select" required>
                    <option>In Progress</option>
                    <option>Critical</option>
                    <option>Completed</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Assigned Technician</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label">Additional Notes</label>
                  <textarea className="form-control" rows="3"></textarea>
                </div>
                <div className="col-12">
                  <button type="button" className="btn btn-primary">
                    Create Processing Entry
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

export default CreateProcessing;
