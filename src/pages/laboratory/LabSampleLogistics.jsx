import { useState } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";

const SampleLogistics = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // Sample data for active shipments
  const activeShipments = [
    {
      id: "TRK-2023-001",
      origin: "Lab A",
      destination: "Central Lab",
      status: "In Transit",
      temperature: "4.2°C",
    },
    {
      id: "TRK-2023-002",
      origin: "Home Collection",
      destination: "Lab B",
      status: "Pending Pickup",
      temperature: "--",
    },
    {
      id: "TRK-2023-003",
      origin: "Lab C",
      destination: "Reference Lab",
      status: "Delivered",
      temperature: "3.8°C",
    },
  ];

  return (
    <>
      <Header />
      <Sidebar
        id="laboratory-menu-item"
        id1="laboratory-menu-items"
        activeClassName="SampleLogistics"
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
              <li className="breadcrumb-item active">Sample Logistics</li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-2xl font-bold">Sample Logistics Tracking</h2>
            <p className="text-muted">
              Real-time tracking and management of sample transportation
            </p>
          </div>

          {/* Status Cards */}
          <div className="row mb-4">
            <div className="col-md-3">
              <div className="card border rounded-lg h-100">
                <div className="card-body">
                  <p className="text-muted mb-1">Active Shipments</p>
                  <h2 className="text-3xl font-bold mb-1">42</h2>
                  <p className="text-success mb-0">↑ 12 in transit</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border rounded-lg h-100">
                <div className="card-body">
                  <p className="text-muted mb-1">Pending Pickups</p>
                  <h2 className="text-3xl font-bold mb-1">15</h2>
                  <p className="text-warning mb-0">Next hour: 5</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border rounded-lg h-100">
                <div className="card-body">
                  <p className="text-muted mb-1">Delivered Today</p>
                  <h2 className="text-3xl font-bold mb-1">78</h2>
                  <p className="text-primary mb-0">On schedule</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border rounded-lg h-100">
                <div className="card-body">
                  <p className="text-muted mb-1">Temperature Alerts</p>
                  <h2 className="text-3xl font-bold mb-1">2</h2>
                  <p className="text-danger mb-0">Requires attention</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              {/* Active Shipments Table */}
              <div className="card mb-4">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="card-title mb-0">Active Shipments</h4>
                    <div className="d-flex gap-2">
                      <Link
                        to="/laboratory/sample-logistics/create"
                        className="btn btn-primary"
                      >
                        <span>New Shipment</span>
                      </Link>
                      <button className="btn btn-outline-secondary">
                        <span>Filter</span>
                      </button>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Tracking ID</th>
                          <th>Origin</th>
                          <th>Destination</th>
                          <th>Status</th>
                          <th>Temperature</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activeShipments.map((shipment) => (
                          <tr key={shipment.id}>
                            <td>{shipment.id}</td>
                            <td>{shipment.origin}</td>
                            <td>{shipment.destination}</td>
                            <td>
                              <span
                                className={`badge ${
                                  shipment.status === "In Transit"
                                    ? "bg-info text-white"
                                    : shipment.status === "Pending Pickup"
                                    ? "bg-warning text-dark"
                                    : "bg-success text-white"
                                } rounded-pill`}
                              >
                                {shipment.status}
                              </span>
                            </td>
                            <td>{shipment.temperature}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">

              {/* Temperature Monitoring */}
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-3">Temperature Monitoring</h4>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span>Cold Chain</span>
                      <span className="text-primary">2°C - 8°C</span>
                    </div>
                    <div className="progress" style={{ height: "8px" }}>
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
                      <span>Frozen</span>
                      <span className="text-info">-20°C</span>
                    </div>
                    <div className="progress" style={{ height: "8px" }}>
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between mb-1">
                      <span>Room Temp</span>
                      <span className="text-warning">22°C</span>
                    </div>
                    <div className="progress" style={{ height: "8px" }}>
                      <div
                        className="progress-bar bg-success"
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
    </>
  );
};

export default SampleLogistics;
