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
import BillingAndcashiering from "./pages/reception/billingAndcashiering";
import DischargeSummary from "./pages/reception/dischargeSummary";

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

          {/* reception */}
          <Route path="/reception/billing" element={<BillingAndcashiering/>}/>
          <Route path="/reception/discharge" element={<DischargeSummary/>}/>

        </Routes>
      </BrowserRouter>
      <div className="sidebar-overlay"></div>
    </>
  )
}

export default Approuter
