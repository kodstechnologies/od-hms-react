import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

const CreateDonor = () => {
  return (
    <>
      <Header />
      <Sidebar
        id="reception-dropmenu"
        id1="reception-items"
        activeClassName="CreateDonor"
      />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="container-fluid p-4">
              <div className="col-sm-12  mb-4">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    Reception
                  </li>
                  <li className="breadcrumb-item">
                    <FeatherIcon icon="chevron-right" />
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/reception/donor">Organ Donation</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <FeatherIcon icon="chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">Create Donor</li>
                </ul>
              </div>
              {/* Header Section */}
              <div className="mb-4">
                <h2 className="fw-bold">New Organ Donor</h2>
                <p className="text-muted">
                  Register a new organ donor in the system.
                </p>
              </div>

              {/* Donor Details Form */}
              <div className="card border shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title mb-4">Donor Details</h5>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="donorId" className="form-label">
                        Donor ID
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="donorId"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="donorName" className="form-label">
                        Donor Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="donorName"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="age" className="form-label">
                        Age
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="age"
                        min="0"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="gender" className="form-label">
                        Gender
                      </label>
                      <select className="form-select" id="gender">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="bloodType" className="form-label">
                        Blood Type
                      </label>
                      <select className="form-select" id="bloodType">
                        <option value="">Select Blood Type</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="organsAvailable" className="form-label">
                        Organs Available
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="organsAvailable"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="registrationDate" className="form-label">
                        Registration Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="registrationDate"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="donorStatus" className="form-label">
                        Donor Status
                      </label>
                      <select className="form-select" id="donorStatus">
                        <option value="living">Living</option>
                        <option value="deceased">Deceased</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="medicalHistory" className="form-label">
                      Medical History
                    </label>
                    <textarea
                      className="form-control"
                      id="medicalHistory"
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

export default CreateDonor;
