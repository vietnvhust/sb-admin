import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  const handleToggleSidebar = () => {
    setSidebarToggle(!sidebarToggle)
    document.body.classList.toggle("sidebar-toggled")
  }
  return (
    <ul
      className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${sidebarToggle ? " toggled" : ""}`}
      id="accordionSidebar"
    >
      <Link
        to=""
        className="sidebar-brand d-flex align-items-center justify-content-center"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </Link>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item">
        <Link to="" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />
      <li className="nav-item">
        <Link to="/users"
          className="nav-link"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <span>Users</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="" className="nav-link">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="" className="nav-link">
          <i className="fas fa-fw fa-table"></i>
          <span>Tables</span>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" onClick={handleToggleSidebar} id="sidebarToggle"></button>
      </div>
    </ul>
  );
}

export default Sidebar;
