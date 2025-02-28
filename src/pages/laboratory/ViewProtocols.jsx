import { useLocation } from "react-router-dom";
import Header from "../layouts/header";
import Sidebar from "../../components/Sidebar";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Link } from "react-router-dom";

const ViewProtocol = () => {
  const location = useLocation();
  const protocol = location.state?.protocol; // Retrieve data

  if (!protocol) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <p className="text-danger fw-bold">No protocol found</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Sidebar
        id="laboratory-menu-item"
        id1="laboratory-menu-items"
        activeClassName="ViewProtocol"
      />

      <div className="page-wrapper">
        <div className="content py-4">
          <div className="col-sm-12 mb-2">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/laboratory/dashboard">Laboratory </Link>
              </li>
              <li className="breadcrumb-item">
                <FeatherIcon icon="chevron-right" />
              </li>
              <li className="breadcrumb-item active">Processing</li>
              <li className="breadcrumb-item">
                <FeatherIcon icon="chevron-right" />
              </li>
              <li className="breadcrumb-item active">Protocols</li>
            </ul>
          </div>

          <div className="card shadow-sm border-0">
            <div className="card-body px-4 py-4">
              <h4 className="card-title text-center text-uppercase fw-bold mb-4">
                Protocol Details
              </h4>
              <hr />

              <div className="mb-3">
                <p className="mb-1 text-muted">Protocol Title</p>
                <h6 className="fw-semibold">{protocol.title}</h6>
              </div>

              <div className="mb-3">
                <p className="mb-1 text-muted">Description</p>
                <p className="fw-normal">{protocol.description}</p>
              </div>

              <hr className="mt-4" />

              <div className="d-flex justify-content-center">
                <button className="btn btn-outline-primary me-2">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProtocol;
