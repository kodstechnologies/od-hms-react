import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";

const CreateSampleLogistics = () => {
  return (
    <>
      <Header />
      <Sidebar
        id="laboratory-menu-item"
        id1="laboratory-menu-items"
        activeClassName="CreateSampleLogistics"
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
                <Link to="/laboratory/sample-logistics">Sample Logistics</Link>
              </li>
              <li className="breadcrumb-item">
                <FeatherIcon icon="chevron-right" />
              </li>
              <li className="breadcrumb-item active">Create Shipment</li>
            </ul>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title">New Shipment Entry</h4>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Tracking ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Auto-generated"
                    disabled
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Sample Type</label>
                  <select className="form-select" required>
                    <option value="">Select Sample Type</option>
                    <option>Blood</option>
                    <option>Tissue</option>
                    <option>Urine</option>
                    <option>Swab</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Origin</label>
                  <select className="form-select" required>
                    <option value="">Select Origin</option>
                    <option>Lab A</option>
                    <option>Lab B</option>
                    <option>Lab C</option>
                    <option>Home Collection</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Destination</label>
                  <select className="form-select" required>
                    <option value="">Select Destination</option>
                    <option>Central Lab</option>
                    <option>Reference Lab</option>
                    <option>Lab A</option>
                    <option>Lab B</option>
                    <option>Lab C</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Pickup Date</label>
                  <input type="date" className="form-control" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Pickup Time</label>
                  <input type="time" className="form-control" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Temperature Requirements</label>
                  <select className="form-select" required>
                    <option value="">Select Temperature Range</option>
                    <option>Room Temperature (15-25°C)</option>
                    <option>Cold Chain (2-8°C)</option>
                    <option>Frozen (-20°C)</option>
                    <option>Ultra-Low (-80°C)</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Priority</label>
                  <select className="form-select" required>
                    <option value="">Select Priority</option>
                    <option>Normal</option>
                    <option>Urgent</option>
                    <option>Critical</option>
                  </select>
                </div>
                <div className="col-md-12 mb-3">
                  <label className="form-label">
                    Special Handling Instructions
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Enter any special handling instructions..."
                  ></textarea>
                </div>
                <div className="col-12">
                  <div className="d-flex gap-2">
                    <button type="button" className="btn btn-primary">
                      Create Shipment
                    </button>
                    <Link
                      to="/laboratory/sample-logistics"
                      className="btn btn-outline-secondary"
                    >
                      Cancel
                    </Link>
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

export default CreateSampleLogistics;
