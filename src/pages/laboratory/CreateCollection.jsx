import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";

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
                      <label htmlFor="sampleType" className="form-label">
                        Sample Type
                      </label>
                      <select className="form-select" id="sampleType">
                        <option>Blood Sample</option>
                        <option>Urine Sample</option>
                        <option>Tissue Sample</option>
                        <option>Swab Sample</option>
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
