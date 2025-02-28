import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";

const CreateDoorStepSampleCollection = () => {
  return (
    <>
      <Header />
      <Sidebar
        id="laboratory-menu-item"
        id1="laboratory-menu-items"
        activeClassName="CreateDoorStepSampleCollection"
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
                <Link to="/laboratory/doorstepsamplecollection">
                  Home Sample Collection
                </Link>
              </li>
              <li className="breadcrumb-item">
                <FeatherIcon icon="chevron-right" />
              </li>
              <li className="breadcrumb-item active">New Appointment</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-body">
              <h4 className="card-title mb-4">Schedule Home Collection</h4>
              <form>
                <div className="row">
                  {/* Patient Information */}
                  <div className="col-md-12 mb-4">
                    <h5 className="text-muted mb-3">Patient Information</h5>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Patient Name</label>
                        <input type="text" className="form-control" required />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Contact Number</label>
                        <input type="tel" className="form-control" required />
                      </div>
                      <div className="col-md-12 mb-3">
                        <label className="form-label">Collection Address</label>
                        <textarea
                          className="form-control"
                          rows="2"
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="col-md-12 mb-4">
                    <h5 className="text-muted mb-3">Appointment Details</h5>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Preferred Date</label>
                        <input type="date" className="form-control" required />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Preferred Time</label>
                        <select className="form-select" required>
                          <option value="">Select time slot</option>
                          <option>08:00 AM - 10:00 AM</option>
                          <option>10:00 AM - 12:00 PM</option>
                          <option>02:00 PM - 04:00 PM</option>
                          <option>04:00 PM - 06:00 PM</option>
                        </select>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">
                          Assign Phlebotomist
                        </label>
                        <select className="form-select" required>
                          <option value="">Select phlebotomist</option>
                          <option>Dr. Sarah</option>
                          <option>Dr. Michael</option>
                          <option>Dr. Lisa</option>
                        </select>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Collection Type</label>
                        <select className="form-select" required>
                          <option value="">Select type</option>
                          <option>Blood Collection</option>
                          <option>Urine Collection</option>
                          <option>Swab Collection</option>
                          <option>Special Tests</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="col-md-12 mb-4">
                    <h5 className="text-muted mb-3">Additional Information</h5>
                    <div className="row">
                      <div className="col-md-12 mb-3">
                        <label className="form-label">
                          Special Instructions
                        </label>
                        <textarea className="form-control" rows="2"></textarea>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Priority</label>
                        <select className="form-select">
                          <option>Normal</option>
                          <option>Urgent</option>
                          <option>Emergency</option>
                        </select>
                      </div>
                      <div className="col-12 mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="fasting"
                          />
                          <label className="form-check-label" htmlFor="fasting">
                            Fasting Required
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Buttons */}
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Schedule Appointment
                    </button>
                    <button type="button" className="btn btn-light ms-2">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateDoorStepSampleCollection;
