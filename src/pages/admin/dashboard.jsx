import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Sidebar
        id="menu-item"
        id1="menu-items"
        activeClassName="dashboard"
      />

    </>

  );
};

export default Dashboard;
