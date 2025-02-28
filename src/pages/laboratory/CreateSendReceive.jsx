import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Link } from "react-router-dom";

const CreateSendReceive = () => {
  return (
    <>
      <Header />
      <Sidebar
        id="laboratory-menu-item"
        id1="laboratory-menu-items"
        activeClassName="CreateSendReceive"
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
                <Link to="/laboratory/send-receive">Transfers </Link>
              </li>
              <li className="breadcrumb-item">
                <FeatherIcon icon="chevron-right" />
              </li>
              <li className="breadcrumb-item active">Create</li>
            </ul>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title">New Transfer Request</h4>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Sample ID</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Transfer Type</label>
                  <select className="form-select">
                    <option>Internal Transfer</option>
                    <option>External Transfer</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">From Department</label>
                  <select className="form-select">
                    <option>Collection Center</option>
                    <option>Laboratory</option>
                    <option>Pathology</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">To Department</label>
                  <select className="form-select">
                    <option>Laboratory</option>
                    <option>Collection Center</option>
                    <option>Pathology</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Priority</label>
                  <select className="form-select">
                    <option>Normal</option>
                    <option>Urgent</option>
                    <option>High</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Temperature Requirements</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. 2-8°C"
                  />
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label">
                    Special Handling Instructions
                  </label>
                  <textarea className="form-control" rows="3"></textarea>
                </div>
                <div className="col-12">
                  <button type="button" className="btn btn-primary">
                    Create Transfer Request
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

export default CreateSendReceive;
