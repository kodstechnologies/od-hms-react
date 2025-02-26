/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { blog, dashboard, doctor, doctorschedule, logout, menuicon04, menuicon06, menuicon08, menuicon09, menuicon10, menuicon11, menuicon12, menuicon14, menuicon15, menuicon16, patients, sidemenu } from '../../components/imagepath';
import Scrollbars from "react-custom-scrollbars-2";


const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState("");
  const handleClick = (e, item, item1, item3) => {
    const div = document.querySelector(`#${item}`);
    const ulDiv = document.querySelector(`.${item1}`);
    e?.target?.className ? ulDiv.style.display = 'none' : ulDiv.style.display = 'block'
    e?.target?.className ? div.classList.remove('subdrop') : div.classList.add('subdrop');
  }

  useEffect(() => {
    if (props?.id && props?.id1) {
      const ele = document.getElementById(`${props?.id}`);
      handleClick(ele, props?.id, props?.id1);
    }
  }, [])


  const expandMenu = () => {
    document.body.classList.remove("expand-menu");
  };
  const expandMenuOpen = () => {
    document.body.classList.add("expand-menu");
  };
  return (
    <>
      <div className="sidebar" id="sidebar">
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax="95vh"
          thumbMinSize={30}
          universal={false}
          hideTracksWhenNotNeeded={true}
        >
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu"
              onMouseLeave={expandMenu}
              onMouseOver={expandMenuOpen}
            >
              <ul>
                <li className="menu-title">Main</li>
                <li className="submenu" >
                  <Link to="#" id="menu-item" onClick={(e) => {
                    handleClick(e, "menu-item", "menu-items")
                  }}>
                    <span className="menu-side">
                      <img src={dashboard} alt="" />
                    </span>{" "}
                    <span> Admin </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: sidebar === 'Dashboard' ? 'block' : "none" }} className='menu-items'>
                    <li>
                      <Link className={props?.activeClassName === 'dashboard' ? 'active' : ''} to="/admin/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'outpatient' ? 'active' : ''} to="/admin/outpatient">Outpatient</Link>
                    </li>
                  </ul>
                </li>
                <li className='submenu'>
                  <Link to="#" id="doctor-dropmenu" onClick={(e) => {
                    handleClick(e, "doctor-dropmenu", "doctor-items")
                  }}>
                    <span className="menu-side">
                      <img src={dashboard} alt="" />
                    </span>{" "}
                    <span> Doctor </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: sidebar === 'Schedule' ? 'block' : "none" }} className='doctor-items'>
                    <li>
                      <Link className={props?.activeClassName === 'schedule' ? 'active' : ''} to="/doctor/schedule">Schedule</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'consultation' ? 'active' : ''} to="/doctor/consultation">Consultation</Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="logout-btn">
                <Link to="/login">
                  <span className="menu-side">
                    <img src={logout} alt="" />
                  </span>{" "}
                  <span>Logout</span>
                </Link>
              </div>
            </div>
          </div>
        </Scrollbars>
      </div>
    </>
  )
}
export default Sidebar
