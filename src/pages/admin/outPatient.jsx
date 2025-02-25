import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const Outpatient = () => {
  return (
    <>
      <Header />
      <Sidebar
        id="menu-item"
        id1="menu-items"
        activeClassName="outpatient"
      />

    </>

  );
};

export default Outpatient;
