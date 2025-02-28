import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Link } from "react-router-dom";

const CreateLabCollection = () => {
  return (
    <>
      <Header />
      <Sidebar
        id="laboratory-menu-item"
        id1="laboratory-menu-items"
        activeClassName="CreateLabCollection"
      />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="container-fluid p-4">
              <div className="col-sm-12  mb-4">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/laboratory">Laboratory </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <FeatherIcon icon="chevron-right" />
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/laboratory/collection">
                    Lab Collection
                    </Link>
                    </li>
                  <li className="breadcrumb-item">
                    <FeatherIcon icon="chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">Create</li>
                </ul>
              </div>
              {/* Header Section */}
              <div className="mb-4">
                <h2 className="fw-bold">Create Collection</h2>
                <p className="text-muted">
                  Manage and track sample collection processes
                </p>
              </div>

              {/* Collection Details Form */}
              <div className="card border shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title mb-4">Collection Details</h5>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="patientId" className="form-label">
                        Patient ID
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="patientId"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="patientName" className="form-label">
                        Patient Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="patientName"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Assign Phlebotomist</label>
                      <select className="form-select" required>
                        <option value="">Select phlebotomist</option>
                        <option>Dr. Sarah</option>
                        <option>Dr. Michael</option>
                        <option>Dr. Lisa</option>
                      </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="scanType" className="form-label">
                        Scan Type
                      </label>
                      <select className="form-select" id="scanType">
                        <option>X-Ray</option>
                        <option>MRI</option>
                        <option>CT Scan</option>
                        <option>Ultrasound</option>
                        <option>PET Scan</option>
                        <option>Mammography</option>
                        <option>DEXA Scan (Bone Density Test)</option>
                        <option>Fluoroscopy</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="collectionDateTime"
                        className="form-label"
                      >
                        Collection Date & Time
                      </label>
                      <input
                        type="datetime-local"
                        className="form-control"
                        id="collectionDateTime"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="collectorName" className="form-label">
                        Collector Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="collectorName"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="priorityType" className="form-label">
                        Priority Type
                      </label>
                      <select className="form-select" id="priorityType">
                        <option>Routine</option>
                        <option>Urgent</option>
                        <option>Stat</option>
                      </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="testName" className="form-label">
                        Test Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="testName"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="patientAge" className="form-label">
                        Age
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="patientAge"
                        min="0"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="patientGender" className="form-label">
                        Gender
                      </label>
                      <select className="form-select" id="patientGender">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="specialInstructions" className="form-label">
                      Special Instructions
                    </label>
                    <textarea
                      className="form-control"
                      id="specialInstructions"
                      rows="3"
                    ></textarea>
                  </div>

                  {/* Submit Buttons */}
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Submit
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
      </div>
    </>
  );
};

export default CreateLabCollection;
