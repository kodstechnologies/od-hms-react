import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";

const CreateNewOutSource = () => {
  return (
    <>
      <Header />
      <Sidebar
        id="laboratory-menu-item"
        id1="laboratory-menu-items"
        activeClassName="CreateNewOutSource"
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
              <li className="breadcrumb-item">
                <Link to="/laboratory/outsource">
                  Outsource
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
              <h4 className="card-title mb-4">New Outsource Request</h4>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Sample ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="OS-YYYY-XXX"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Sample Type</label>
                  <select className="form-select" required>
                    <option>Blood</option>
                    <option>Tissue</option>
                    <option>Urine</option>
                    <option>CSF</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Partner Lab</label>
                  <select className="form-select" required>
                    <option>Central Labs</option>
                    <option>Advanced Diagnostics</option>
                    <option>PathLab Plus</option>
                    <option>Molecular Solutions</option>
                    <option>Genetic Testing Inc.</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Test Type</label>
                  <select className="form-select" required>
                    <option>Genetic Testing</option>
                    <option>Molecular Testing</option>
                    <option>Special Chemistry</option>
                    <option>Immunology</option>
                    <option>Microbiology</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Expected TAT (Days)</label>
                  <input
                    type="number"
                    className="form-control"
                    min="1"
                    defaultValue="3"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Priority</label>
                  <select className="form-select" required>
                    <option>Normal</option>
                    <option>Urgent</option>
                    <option>STAT</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Collection Date</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="YYYY-MM-DD"
                      required
                    />
                    <span className="input-group-text">
                      <FeatherIcon icon="calendar" size={16} />
                    </span>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Transport Method</label>
                  <select className="form-select" required>
                    <option>Standard Courier</option>
                    <option>Express Delivery</option>
                    <option>Temperature Controlled</option>
                    <option>Hand Delivery</option>
                  </select>
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label">Special Instructions</label>
                  <textarea className="form-control" rows="3"></textarea>
                </div>
                <div className="col-12 mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="confirmCheck"
                    />
                    <label className="form-check-label" htmlFor="confirmCheck">
                      I confirm that the sample is properly labeled and packaged
                      according to transport guidelines
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="button" className="btn btn-primary">
                    Submit Request
                  </button>
                  <button type="button" className="btn btn-light ms-2">
                    Cancel
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

export default CreateNewOutSource;
