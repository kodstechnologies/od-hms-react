import { useLocation } from "react-router-dom";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";

const ViewRecords = () => {
  const location = useLocation();
  const record = location.state?.record; // Retrieve data

  if (!record) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <p className="text-danger fw-bold">No record found</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Sidebar
        id="laboratory-menu-item"
        id1="laboratory-menu-items"
        activeClassName="ViewRecords"
      />

      <div className="page-wrapper">
        <div className="content py-4">
          <div className="card shadow-sm border-0">
            <div className="card-body px-4 py-4">
              <h4 className="card-title text-center text-uppercase fw-bold mb-4">
                Report Details
              </h4>
              <hr />

              <div className="row">
                <div className="col-md-6 mb-3">
                  <p className="mb-1 text-muted">Report ID</p>
                  <h6 className="fw-semibold">{record.id}</h6>
                </div>

                <div className="col-md-6 mb-3">
                  <p className="mb-1 text-muted">Generated On</p>
                  <h6 className="fw-semibold">{record.generatedOn}</h6>
                </div>

                <div className="col-md-6 mb-3">
                  <p className="mb-1 text-muted">Patient Name</p>
                  <h6 className="fw-semibold">{record.patient.name}</h6>
                </div>

                <div className="col-md-6 mb-3">
                  <p className="mb-1 text-muted">Patient ID</p>
                  <h6 className="fw-semibold">{record.patient.id}</h6>
                </div>

                <div className="col-md-6 mb-3">
                  <p className="mb-1 text-muted">Report Type</p>
                  <h6 className="fw-semibold">{record.type}</h6>
                </div>

                <div className="col-md-6 mb-3">
                  <p className="mb-1 text-muted">Status</p>
                  <span
                    className={`badge ${
                      record.status === "Completed"
                        ? "bg-success"
                        : record.status === "Pending"
                        ? "bg-warning text-dark"
                        : "bg-danger"
                    }`}
                  >
                    {record.status}
                  </span>
                </div>
              </div>

              <hr className="mt-4" />

              <div className="d-flex justify-content-center">
                <button className="btn btn-outline-primary me-2">Print</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewRecords;
