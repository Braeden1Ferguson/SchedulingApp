import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <Link className="navbar-brand" to="/">
          TODO 4 You
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Username
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item active">
                <Link className="nav-link navbar-dark bg-dark" style={{color: "white"}} to="/">
                  Home: Month View
                </Link>
              </li>
              <li className="nav-item navbar-light">
                <Link className="nav-link navbar-dark" style={{color: "white"}} to="/week-view">
                  Week View
                </Link>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li className="nav-item active ">
                    <Link className="nav-link" style={{color: "white"}} to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                  <Link className="nav-link" style={{color: "white"}} to="/signup">
                    Sign Up
                  </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
