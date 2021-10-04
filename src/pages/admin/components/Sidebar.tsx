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

      <div className="sidebar-heading">Interface</div>

      <li className="nav-item">
        <Link to=""
          className="nav-link collapsed"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Components</span>
        </Link>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <Link to="" className="collapse-item">
              Buttons
            </Link>
            <Link to="" className="collapse-item">
              Cards
            </Link>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <Link to=""
          className="nav-link collapsed"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i className="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
        </Link>
        <div
          id="collapseUtilities"
          className="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Utilities:</h6>
            <Link to="" className="collapse-item">
              Colors
            </Link>
            <Link to="" className="collapse-item">
              Borders
            </Link>
            <Link to="" className="collapse-item">
              Animations
            </Link>
            <Link to="" className="collapse-item">
              Other
            </Link>
          </div>
        </div>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Addons</div>

      <li className="nav-item active">
        <Link to="/users"
          className="nav-link"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <i className="fas fa-fw fa-folder"></i>
          <span>Users</span>
        </Link>
        <div
          id="collapsePages"
          className="collapse show"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <Link to="" className="collapse-item">
              Login
            </Link>
            <Link to="" className="collapse-item">
              Register
            </Link>
            <Link to="" className="collapse-item">
              Forgot Password
            </Link>
            <div className="collapse-divider"></div>
            <h6 className="collapse-header">Other Pages:</h6>
            <Link to="" className="collapse-item">
              404 Page
            </Link>
            <Link to="" className="collapse-item active">
              Blank Page
            </Link>
          </div>
        </div>
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
