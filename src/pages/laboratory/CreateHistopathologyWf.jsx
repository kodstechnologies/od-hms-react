import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";

const CreateH_workflow = () => {
  return (
    <>
      <Header />
      <Sidebar
        id="laboratory-menu-item"
        id1="laboratory-menu-items"
        activeClassName="CreateH_workflow"
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
                <Link to="/laboratory/histopathology">
                  Histopathology
                </Link>
              </li>
              <li className="breadcrumb-item">
                <FeatherIcon icon="chevron-right" />
              </li>
              <li className="breadcrumb-item active">New Specimen Analysis</li>
            </ul>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title mb-4">New Specimen Analysis</h4>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Specimen ID</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Specimen Type</label>
                  <select className="form-select" required>
                    <option>Biopsy</option>
                    <option>Tissue Sample</option>
                    <option>Cytology</option>
                    <option>Surgical Specimen</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Collection Date</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="dd-mm-yyyy"
                      required
                    />
                    <span className="input-group-text">
                      <FeatherIcon icon="calendar" size={16} />
                    </span>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Processing Stage</label>
                  <select className="form-select" required>
                    <option>Fixation</option>
                    <option>Processing</option>
                    <option>Embedding</option>
                    <option>Sectioning</option>
                    <option>Staining</option>
                  </select>
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label">Clinical Notes</label>
                  <textarea className="form-control" rows="4"></textarea>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Priority Level</label>
                  <select className="form-select" required>
                    <option>Routine</option>
                    <option>Urgent</option>
                    <option>STAT</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Pathologist</label>
                  <select className="form-select" required>
                    <option>Dr. Raj Patel</option>
                    <option>Dr. Sarah Johnson</option>
                    <option>Dr. Michael Chen</option>
                    <option>Dr. Emily Rodriguez</option>
                  </select>
                </div>
                <div className="col-12 mt-3">
                  <button type="button" className="btn btn-primary">
                    Submit Analysis
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

export default CreateH_workflow;
