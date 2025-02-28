const OrganDonorPreview = () => {
  return (
    <div className="container py-5">
      <div className="card donor-info-card">
        <div className="card-body pb-0">
          <div className="donor-item donor-item-one">
            <div className="row">
              <div className="col-md-6">
                <div className="donor-info">
                  <h2 className="text-primary">Organ Donor Card</h2>
                  <p>Donor ID: DON983248782</p>
                </div>
              </div>
            </div>
          </div>

          <div className="donor-item donor-item-bg">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <h6>Personal Information</h6>
                <p>
                  Amit Sharma
                  <br />
                  DOB: 15 May 1985
                  <br />
                  Blood Type: O+
                  <br />
                  Gender: Male
                  <br />
                  Aadhaar Number: XXXX-XXXX-4288
                </p>
              </div>
              <div className="col-lg-4 col-md-12">
                <h6>Contact Information</h6>
                <p>
                  Phone: +91 98765 43210
                  <br />
                  Email: amit.sharma@example.com
                  <br />
                  456 MG Road, Mumbai, Maharashtra 400001
                </p>
              </div>
              <div className="col-lg-4 col-md-12">
                <h6>Registration Details</h6>
                <p>
                  Registration Date: 27 Jul 2022
                  <br />
                  Last Updated: 15 Jan 2023
                  <br />
                  Donor Status: Active
                  <br />
                  Registry: National Organ & Tissue Transplant Organization
                  (NOTTO)
                </p>
              </div>
            </div>
          </div>

          <div className="donor-item donor-table-wrap">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Organ/Tissue</th>
                  <th>Donation Status</th>
                  <th>Medical Clearance</th>
                  <th>Special Conditions</th>
                  <th>Last Evaluation</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Heart</td>
                  <td>Approved</td>
                  <td>Cleared</td>
                  <td>None</td>
                  <td>15 Jan 2023</td>
                  <td>Healthy condition</td>
                </tr>
                <tr>
                  <td>Kidneys</td>
                  <td>Approved</td>
                  <td>Cleared</td>
                  <td>None</td>
                  <td>15 Jan 2023</td>
                  <td>Both kidneys available</td>
                </tr>
                <tr>
                  <td>Liver</td>
                  <td>Approved</td>
                  <td>Cleared</td>
                  <td>None</td>
                  <td>15 Jan 2023</td>
                  <td>Healthy condition</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <h4>Emergency Contact</h4>
              <p>
                <strong>Name:</strong> Priya Sharma (Spouse)
                <br />
                <strong>Phone:</strong> +91 98765 56789
                <br />
                <strong>Email:</strong> priya.sharma@example.com
                <br />
                <strong>Address:</strong> Same as donor
              </p>
            </div>
            <div className="col-lg-6">
              <h4>Medical Information</h4>
              <p>
                <strong>Primary Physician:</strong> Dr. Ramesh Gupta
                <br />
                <strong>Hospital Affiliation:</strong> AIIMS Hospital, Delhi
                <br />
                <strong>Medical Conditions:</strong> None
                <br />
                <strong>Medications:</strong> None
              </p>
            </div>
          </div>

          <div className="donor-sign-box">
            <div className="row">
              <div className="col-lg-8">
                <h6>Consent Statement:</h6>
                <p>
                  I hereby give permission for all my organs and tissues to be
                  donated after my death for transplantation, medical research,
                  or education.
                </p>
                <h6>Legal Information:</h6>
                <p>
                  This document serves as evidence of my intention to donate
                  organs in accordance with the Transplantation of Human Organs
                  and Tissues Act (THOTA), 1994. This decision may be revoked at
                  any time.
                </p>
              </div>
              <div className="col-lg-4 text-end">
                <p>Amit Sharma</p>
                <p className="text-muted">Date: 27 Jul 2022</p>
                <p className="mt-2">Sign Amit Sharma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganDonorPreview;
