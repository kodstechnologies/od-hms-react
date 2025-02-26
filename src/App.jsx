import React from "react";
// eslint-disable-next-line no-unused-vars

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/login";
import ForgotPassword from "./components/pages/login/ForgotPassword";
import Signup from "./components/pages/login/Signup";
import Register from "./components/pages/login/Register";
import LockScreen from "./components/pages/login/LockScreen";
import ChangePassword from "./components/pages/login/ChangePassword";
import Error from "./components/pages/login/Error";
import ServerError from "./components/pages/login/ServerError";
import Profile from "./components/pages/login/Profile";
import EditProfile from "./components/pages/login/EditProfile";
import BlankPage from "./components/pages/login/BlankPage";
import GalleryImage from "./components/pages/Gallery/Gallery";
import Dashboard from "./pages/admin/dashboard";
import Outpatient from "./pages/admin/outPatient";
import Inventory from "./pages/pharmacy/inventory";
import AddInventory from "./pages/pharmacy/addInventory";
import FullLayout from "./pages/layouts/FullLayout";
import Consultation from "./pages/doctor/Consultation";
import Schedule from "./pages/doctor/Schedule";
import BillingAndcashiering from "./pages/reception/billingAndcashiering";
import DischargeSummary from "./pages/reception/dischargeSummary";
import AddStock from "./pages/pharmacy/addStock";
import StockHistory from "./pages/pharmacy/stockHistory";
import Prescriptions from "./pages/pharmacy/prescriptions";
import CreateInvoice from "./pages/pharmacy/createInvoice";
import InvoiceDetails from "./pages/pharmacy/invoiceDetails";
import Outpatient from "./pages/FrontOffice/outPatient";
import InPatient from "./pages/FrontOffice/inPatient";
import Patients from "./pages/FrontOffice/Patients";
import Appointments from "./pages/FrontOffice/Appointments";
import Emergency from "./pages/FrontOffice/Emergency";
import Query from "./pages/FrontOffice/Query";
import AddPatient from "./components/FrontOffice/Patients/Add";
import AddOPD from "./components/FrontOffice/Outpatient/Add";
import BloodGroup from "./pages/bloodBank/BloodGroup";
import BloodDonor from "./pages/bloodBank/BloodDonor";
import AddBloodDonar from "./pages/bloodBank/AddBloodDonor";
import BloodIssue from "./pages/bloodBank/BloodIssue";
import AddBloodIssue from "./pages/bloodBank/AddBloodIssue";
import ComponentIssue from "./pages/bloodBank/ComponentIssue";
import AddComponentIssue from "./pages/bloodBank/AddComponentIssue";

function Approuter() {
  return (

    <>
      <BrowserRouter basename="/">
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lockscreen" element={<LockScreen />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/error" element={<Error />} />
          <Route path="/server-error" element={<ServerError />} />
          <Route path="/blankpage" element={<BlankPage />} />
          <Route path="/gallery" element={<GalleryImage />} />


          {/* admin */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/outpatient" element={<Outpatient />} />


          {/* pharmacy */}
          <Route path="/pharmacy/inventory" element={<Inventory />} />
          <Route path="/pharmacy/inventory/add" element={<AddInventory />} />
          <Route path="/pharmacy/inventory/add-stock" element={<AddStock />} />
          <Route path="/pharmacy/inventory/stock-history" element={<StockHistory />} />
          <Route path="/pharmacy/prescriptions" element={<Prescriptions />} />
          <Route path="/pharmacy/prescriptions/create" element={<CreateInvoice />} />
          <Route path="/pharmacy/prescriptions/view" element={<InvoiceDetails />} />



          {/* doctor */}
          <Route path="/doctor/schedule" element={<Schedule />}></Route>
          <Route path="/doctor/consultation" element={<Consultation />}></Route>

          {/* reception */}
          <Route path="/reception/billing" element={<BillingAndcashiering />} />
          <Route path="/reception/discharge" element={<DischargeSummary />} />

          {/* Blood Bank */}
          <Route path="/blood/bloodGroup" element={<BloodGroup />} />
          <Route path="/blood/bloodDonor" element={<BloodDonor/>} />
          <Route path="/blood/bloodDonor/add" element={<AddBloodDonar/>} />
          <Route path="/blood/bloodIssue" element={<BloodIssue/>} />
          <Route path="/blood/bloodIssue/add" element={<AddBloodIssue/>} />
          <Route path="/blood/componentIssue" element={<ComponentIssue/>}   />
          <Route path="/blood/componentIssue/add" element={<AddComponentIssue/>} />









          {/* front office */}
          <Route path="/outpatient" element={<Outpatient />} />
          <Route path="/outpatient/add-opd" element={<AddOPD />} />
          <Route path="/inpatient" element={<InPatient />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/add-patient" element={<AddPatient />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/queue-management" element={<Query />} />
        </Routes>
      </BrowserRouter>
      <div className="sidebar-overlay"></div>
    </>
  );
}

export default Approuter;
