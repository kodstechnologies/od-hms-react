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
import Inventory from "./pages/pharmacy/inventory";
import AddInventory from "./pages/pharmacy/addInventory";
import FullLayout from "./pages/layouts/FullLayout";
import Consultation from "./pages/doctor/Consultation";
import Schedule from "./pages/doctor/Schedule";
import BillingAndcashiering from "./pages/reception/billingAndcashiering";
import DischargeSummary from "./pages/reception/dischargeSummary";
import MedicationAdministration from "./pages/reception/medicationAdministration";
import AddPatientInfo from "./pages/reception/addPatientInfo";
import Equipment from "./pages/reception/equipment";
import AddEquipment from "./pages/reception/addEquipment";
import AddStock from "./pages/pharmacy/addStock";
import StockHistory from "./pages/pharmacy/stockHistory";
import Prescriptions from "./pages/pharmacy/prescriptions";
import CreateInvoice from "./pages/pharmacy/createInvoice";
import InvoiceDetails from "./pages/pharmacy/invoiceDetails";
import Outpatient from "./pages/FrontOffice/outPatient";
import InPatient from "./pages/FrontOffice/InPatient";
import Patients from "./pages/FrontOffice/Patients";
import Appointments from "./pages/FrontOffice/Appointments";
import Emergency from "./pages/FrontOffice/Emergency";
import AddPatient from "./components/FrontOffice/Patients/Add";
import AddOPD from "./components/FrontOffice/Outpatient/Add";
import BloodGroup from "./pages/bloodBank/BloodGroup";
import BloodDonor from "./pages/bloodBank/BloodDonor";
import AddBloodDonar from "./pages/bloodBank/AddBloodDonor";
import BloodIssue from "./pages/bloodBank/BloodIssue";
import AddBloodIssue from "./pages/bloodBank/AddBloodIssue";
import ComponentIssue from "./pages/bloodBank/ComponentIssue";
import AddComponentIssue from "./pages/bloodBank/AddComponentIssue";
import AmbulanceDetails from "./pages/Ambulance/AmbulanceDetails";
import AddAmbulanceDetails from "./pages/Ambulance/AddAmbulanceDetails";
import AddAmbulanceCall from "./pages/Ambulance/AddAmbulanceCall";
import AmbulanceCall from "./pages/Ambulance/AmbulanceCall";
import TokenBoard from "./pages/FrontOffice/TokenBoard";
import AddToken from "./pages/FrontOffice/AddToken";
import DietPlan from "./pages/admin/DietPlan";
import AddDietPlan from "./pages/admin/AddDietPlan";
import AddInpatient from "./components/FrontOffice/Inpatient/Add";
import DoctorVisit from "./components/FrontOffice/Inpatient/DoctorVisit";
import QueueManagement from "./pages/FrontOffice/QueueManagement";
import Vitals from "./pages/FrontOffice/Vitals";
import OperativeInformation from "./pages/admin/OperativeInfo";
import OTEditor from "./pages/admin/OtEdit";
import OperationRegistration from "./pages/admin/operationRegistration";
import LabDashboard from "./pages/laboratory/LabDashboard";
import LabCollection from "./pages/laboratory/LabCollection";
import CreateLabCollection from "./pages/laboratory/CreateCollection";
import CreateBill from "./pages/reception/createBill";
import StaffList from "./pages/hr/staffList";
import AddStaff from "./pages/hr/addStaff";
import StaffProfile from "./pages/hr/viewStaff";
import Leave from "./pages/hr/leaves";
import Holiday from "./pages/hr/holidays";
import Attendence from "./pages/hr/Attendence";
import CreateNewVisit from "./components/FrontOffice/Inpatient/CreateNewVisit";
import PatientBillAccount from "./components/FrontOffice/Inpatient/PatientBillAccount";
import DischargeForm from "./pages/FrontOffice/DischargeForm";
import SendOrder from "./pages/FrontOffice/SendOrder";
import VitalManagement from "./pages/FrontOffice/VitalManagement";
import LabSendReceive from "./pages/laboratory/LabSendReceive";
import CreateSendReceive from "./pages/laboratory/CreateSendReceive";
import LabProcessing from "./pages/laboratory/LabProcessing";
import CreateProcessing from "./pages/laboratory/CreateProcessing";
import ViewProcessing from "./pages/laboratory/ViewProcessing";
import ViewProtocol from "./pages/laboratory/ViewProtocols";
import LabReport from "./pages/laboratory/LabReport";
import CreateReport from "./pages/laboratory/CreateReport";
import ViewRecords from "./pages/laboratory/ViewRecords";
import LabRadiologyReport from "./pages/laboratory/LabRadiologyReport";
import CreateRadiologyReport from "./pages/laboratory/CreateRadiologyReport";
import HistopathologyWorkflows from "./pages/laboratory/LabHistopathologyWf";
import CreateH_workflow from "./pages/laboratory/CreateHistopathologyWf";
import LabOutsource from "./pages/laboratory/LabOutsource";
import CreateNewOutSource from "./pages/laboratory/CreateNewOutsource";
import LabDoorStepSampleCollection from "./pages/laboratory/LabDoorStepSampleCollection";
import CreateDoorStepSampleCollection from "./pages/laboratory/CreateDoorStepSampleCollection";
import SampleLogistics from "./pages/laboratory/LabSampleLogistics";
import CreateSampleLogistics from "./pages/laboratory/CreateSampleLogistics";
import BedAvailability from "./pages/FrontOffice/BedAvailability";
import DoctorSchedule from "./pages/docterSchedule/DoctorSchedule";
import AddDoctorSchedule from "./pages/docterSchedule/AddDoctorSchedule";
import EditDoctorSchedule from "./pages/docterSchedule/EditDoctorSchedule";
import Appointment from "./pages/Appointment/Appointment";
import AddAppointments from "./pages/Appointment/AddAppointments";
import Nursing from "./pages/admin/Nursing";
import AddNursingCare from "./pages/admin/AddNursingCare";

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
          <Route path="/admin/diet-plan" element={<DietPlan />} />
          <Route path="/admin/diet-plan/add" element={<AddDietPlan />} />
          <Route path="/admin/nursing" element={<Nursing />} />
          <Route path="/admin/nursing-add" element={<AddNursingCare />} />



          <Route path="/admin/outpatient" element={<Outpatient />} />
          <Route path="/admin/outpatient" element={<Outpatient />} />
          <Route
            path="/admin/operative-info"
            element={<OperativeInformation />}
          />
          <Route path="/admin/operative-info/ot-edit" element={<OTEditor />} />
          <Route
            path="/admin/operative-info/register"
            element={<OperationRegistration />}
          />

          {/* pharmacy */}
          <Route path="/pharmacy/inventory" element={<Inventory />} />
          <Route path="/pharmacy/inventory/add" element={<AddInventory />} />
          <Route path="/pharmacy/inventory/add-stock" element={<AddStock />} />
          <Route
            path="/pharmacy/inventory/stock-history"
            element={<StockHistory />}
          />
          <Route path="/pharmacy/prescriptions" element={<Prescriptions />} />
          <Route
            path="/pharmacy/prescriptions/create"
            element={<CreateInvoice />}
          />
          <Route
            path="/pharmacy/prescriptions/view"
            element={<InvoiceDetails />}
          />

          {/* doctor */}
          <Route path="/doctor/schedule" element={<Schedule />}></Route>
          <Route path="/doctor/consultation" element={<Consultation />}></Route>
          <Route path="/doctor/doctor-schedule" element={<DoctorSchedule/>}></Route>
          <Route path="/doctor/doctor-schedule-add" element={<AddDoctorSchedule/>}></Route>
          <Route path="/doctor/doctor-schedule-edit" element={<EditDoctorSchedule/>}></Route>



          {/* reception */}
          <Route path="/reception/billing" element={<BillingAndcashiering />} />
          <Route path="/reception/billing/create" element={<CreateBill />} />
          <Route path="/reception/discharge" element={<DischargeSummary />} />
          <Route
            path="/reception/medicaladminstration"
            element={<MedicationAdministration />}
          />
          <Route
            path="/reception/medicaladminstration/add-mar"
            element={<AddPatientInfo />}
          />
          <Route path="/reception/equipment" element={<Equipment />} />
          <Route
            path="/reception/equipment/add-equipment"
            element={<AddEquipment />}
          />

          {/* Blood Bank */}
          <Route path="/blood/bloodGroup" element={<BloodGroup />} />
          <Route path="/blood/bloodDonor" element={<BloodDonor />} />
          <Route path="/blood/bloodDonor/add" element={<AddBloodDonar />} />
          <Route path="/blood/bloodIssue" element={<BloodIssue />} />
          <Route path="/blood/bloodIssue/add" element={<AddBloodIssue />} />
          <Route path="/blood/componentIssue" element={<ComponentIssue />} />
          <Route
            path="/blood/componentIssue/add"
            element={<AddComponentIssue />}
          />

          {/* Ambulance */}

          <Route
            path="/Ambulance/AmbulanceDetails"
            element={<AmbulanceDetails />}
          />
          <Route
            path="/Ambulance/AmbulanceDetails/add"
            element={<AddAmbulanceDetails />}
          />
          <Route path="/Ambulance/AmbulanceCall" element={<AmbulanceCall />} />

          <Route
            path="/Ambulance/AmbulanceCall/add"
            element={<AddAmbulanceCall />}
          />

          {/* laboratory */}
          <Route path="/laboratory/dashboard" element={<LabDashboard />} />
          <Route path="/laboratory/collection" element={<LabCollection />} />
          <Route
            path="/laboratory/collection/create"
            element={<CreateLabCollection />}
          />
          <Route path="/laboratory/send-receive" element={<LabSendReceive />} />
          <Route
            path="/laboratory/send-receive/create"
            element={<CreateSendReceive />}
          />
          <Route path="/laboratory/processing" element={<LabProcessing />} />
          <Route
            path="/laboratory/processing/:id"
            element={<ViewProcessing />}
          />
          <Route
            path="/laboratory/processing/protocol"
            element={<ViewProtocol />}
          />
          <Route
            path="/laboratory/processing/create"
            element={<CreateProcessing />}
          />
          <Route path="/laboratory/reporting" element={<LabReport />} />
          <Route
            path="/laboratory/reporting/record"
            element={<ViewRecords />}
          />
          <Route
            path="/laboratory/reporting/create"
            element={<CreateReport />}
          />
          <Route
            path="/laboratory/radiology-report"
            element={<LabRadiologyReport />}
          />
          <Route
            path="/laboratory/radiology-report/create"
            element={<CreateRadiologyReport />}
          />
          <Route
            path="/laboratory/histopathology"
            element={<HistopathologyWorkflows />}
          />
          <Route
            path="/laboratory/histopathology/create"
            element={<CreateH_workflow />}
          />
          <Route path="/laboratory/outsource" element={<LabOutsource />} />
          <Route
            path="/laboratory/outsource/create"
            element={<CreateNewOutSource />}
          />
          <Route
            path="/laboratory/doorstepsamplecollection"
            element={<LabDoorStepSampleCollection />}
          />
          <Route
            path="/laboratory/doorstepsamplecollection/create"
            element={<CreateDoorStepSampleCollection />}
          />
          <Route
            path="/laboratory/sample-logistics"
            element={<SampleLogistics />}
          />
          <Route
            path="/laboratory/sample-logistics/create"
            element={<CreateSampleLogistics />}
          />

          {/* front office */}
          <Route path="/outpatient" element={<Outpatient />} />
          <Route path="/outpatient/add-opd" element={<AddOPD />} />
          <Route path="/inpatient" element={<InPatient />} />
          <Route path="/inpatient/add" element={<AddInpatient />} />
          <Route path="/inpatient/doctor-visit" element={<DoctorVisit />} />
          <Route
            path="/inpatient/doctor-visit/create-new-visit"
            element={<CreateNewVisit />}
          />
          <Route
            path="/inpatient/patient-bill-account"
            element={<PatientBillAccount />}
          />
          <Route path="/inpatient/discharge-form" element={<DischargeForm />} />
          <Route path="/inpatient/send-order" element={<SendOrder />} />
          <Route path="/inpatient/vital-details" element={<VitalManagement />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/add-patient" element={<AddPatient />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/token-board" element={<TokenBoard />} />
          <Route path="/token-board/add" element={<AddToken />} />
          <Route path="/bed-availability" element={<BedAvailability />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/appointment-add" element={<AddAppointments />} />



          <Route path="/queue-management" element={<QueueManagement />} />
          <Route path="/vitals/:uhid" element={<Vitals />} />


          {/* hr */}
          <Route path="/hr/staff-list" element={<StaffList />} />
          <Route path="/hr/staff-list/add" element={<AddStaff />} />
          <Route path="/hr/staff-list/view" element={<StaffProfile />} />
          <Route path="/hr/leaves" element={<Leave />} />
          <Route path="/hr/holidays" element={<Holiday />} />
          <Route path="/hr/attendance" element={<Attendence />} />
        </Routes>
      </BrowserRouter>
      <div className="sidebar-overlay"></div>
    </>
  );
}

export default Approuter;
