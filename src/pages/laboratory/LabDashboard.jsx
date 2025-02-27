import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";

const LabDashboard = () => {
  return (
    <>
      <Header />
      <Sidebar
        id="laboratory-menu-item"
        id1="laboratory-menu-items"
        activeClassName="LabDashboard"
      />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="container-fluid p-4">
              {/* Status Cards */}
              <div className="row mb-4">
                <div className="col-md-3">
                  <div className="card border shadow-sm h-100">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="text-muted">Total Samples</h6>
                        <i
                          class="fa-solid fa-file"
                          style={{ color: "blue" }}
                        ></i>
                      </div>
                      <h2 className="fw-bold mb-1">2,451</h2>
                      <p className="text-success mb-0">
                        <small>+15.3% from last month</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card border shadow-sm h-100">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="text-muted">Processing</h6>
                        <i
                          class="fa-solid fa-bars-progress"
                          style={{ color: "gold" }}
                        ></i>
                      </div>
                      <h2 className="fw-bold mb-1">342</h2>
                      <p className="text-warning mb-0">
                        <small>Active samples</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card border shadow-sm h-100">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="text-muted">Completed</h6>
                        <i
                          class="fa-solid fa-circle-check"
                          style={{ color: "lime" }}
                        ></i>
                      </div>
                      <h2 className="fw-bold mb-1">1,823</h2>
                      <p className="text-success mb-0">
                        <small>+8.2% from last month</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card border shadow-sm h-100">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="text-muted">Pending</h6>
                        <i
                          class="fa-solid fa-circle-exclamation"
                          style={{ color: "red" }}
                        ></i>
                      </div>
                      <h2 className="fw-bold mb-1">286</h2>
                      <p className="text-danger mb-0">
                        <small>Needs attention</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Samples */}
              <div className="card border shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title mb-3">Recent Samples</h5>
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead className="table-light">
                        <tr>
                          <th>SAMPLE ID</th>
                          <th>PATIENT NAME</th>
                          <th>TYPE</th>
                          <th>STATUS</th>
                          <th>DATE</th>
                          <th>DEPARTMENT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#SAM-2023-001</td>
                          <td>John</td>
                          <td>Blood Sample</td>
                          <td>
                            <span className="badge bg-success rounded-pill">
                              Completed
                            </span>
                          </td>
                          <td>2023-10-25</td>
                          <td>Hematology</td>
                        </tr>
                        <tr>
                          <td>#SAM-2023-002</td>
                          <td>Chris</td>
                          <td>Urine Sample</td>
                          <td>
                            <span className="badge bg-warning text-dark rounded-pill">
                              Processing
                            </span>
                          </td>
                          <td>2023-10-25</td>
                          <td>Pathology</td>
                        </tr>
                        <tr>
                          <td>#SAM-2023-003</td>
                          <td>Shamrock</td>
                          <td>Tissue Sample</td>
                          <td>
                            <span className="badge bg-danger rounded-pill">
                              Pending
                            </span>
                          </td>
                          <td>2023-10-24</td>
                          <td>Histopathology</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="row">
                {/* Department Workload */}
                <div className="col-md-7">
                  <div className="card border shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title mb-4">Department Workload</h5>

                      <div className="mb-3">
                        <div className="d-flex justify-content-between mb-1">
                          <span>Pathology</span>
                          <span>75%</span>
                        </div>
                        <div className="progress" style={{ height: "10px" }}>
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="d-flex justify-content-between mb-1">
                          <span>Radiology</span>
                          <span>45%</span>
                        </div>
                        <div className="progress" style={{ height: "10px" }}>
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "45%" }}
                            aria-valuenow="45"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="d-flex justify-content-between mb-1">
                          <span>Microbiology</span>
                          <span>60%</span>
                        </div>
                        <div className="progress" style={{ height: "10px" }}>
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "60%" }}
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
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

export default LabDashboard;
