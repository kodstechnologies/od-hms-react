import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Link } from "react-router-dom";

const CreateRadiologyReport = () => {
  return (
    <>
      <Header />
      <Sidebar
        id="laboratory-menu-item"
        id1="laboratory-menu-items"
        activeClassName="CreateRadiologyReport"
      />

      <div className="page-wrapper">
        <div className="content">
          <div className="col-sm-12 mb-2">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/laboratory/dashboard">Laboratory</Link>
              </li>
              <li className="breadcrumb-item">
                <FeatherIcon icon="chevron-right" />
              </li>
              <li className="breadcrumb-item active">
                <Link to="/laboratory/radiology-report">Radiology Reports</Link>
              </li>
              <li className="breadcrumb-item">
                <FeatherIcon icon="chevron-right" />
              </li>
              <li className="breadcrumb-item active">Create</li>
            </ul>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title">New Radiology Report</h4>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Patient ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Patient ID"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Scan Type</label>
                  <select className="form-select" required>
                    <option>X-Ray</option>
                    <option>MRI (Magnetic Resonance Imaging)</option>
                    <option>CT Scan (Computed Tomography)</option>
                    <option>Ultrasound</option>
                    <option>Mammography</option>
                    <option>Fluoroscopy</option>
                    <option>PET Scan (Positron Emission Tomography)</option>
                    <option>
                      SPECT Scan (Single Photon Emission Computed Tomography)
                    </option>
                    <option>DEXA Scan (Bone Density Scan)</option>
                    <option>Nuclear Medicine Scan</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Body Part</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Body Part"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Priority</label>
                  <select className="form-select" required>
                    <option>Routine</option>
                    <option>Urgent</option>
                    <option>Critical</option>
                  </select>
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label">Clinical Notes</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Enter Clinical Notes"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="button" className="btn btn-primary">
                    Generate Report
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

export default CreateRadiologyReport;
