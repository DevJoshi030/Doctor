import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div class="banner--wrap">
        <nav>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                {/* Nav menu */}
                <nav class="navbar navbar-expand-lg navbar-light">
                  <Link class="navbar-brand" to="/">
                    <img src="/static/images/logo.png" alt="#" />
                  </Link>
                  <button
                    class="navbar-toggler nav-custome1"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle
                                    navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav ml-auto">
                      <li class="nav-item dropdown">
                        <Link
                          class="nav-link dropdown-toggle"
                          to="/"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          Home{" "}
                        </Link>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown1"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          Department <i class="fas fa-plus"></i>{" "}
                        </a>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a class="dropdown-item" href="services.html">
                            Dental Care
                          </a>
                          <a class="dropdown-item" href="services-2.html">
                            Cardiology
                          </a>
                          <a class="dropdown-item" href="services-3.html">
                            Neurology{" "}
                          </a>
                          <a class="dropdown-item" href="services-detail.html">
                            Eye Care
                          </a>
                        </div>
                      </li>
                      {/* Sub Menu */}
                      <li class="nav-item dropdown">
                        <Link
                          class="nav-link dropdown-toggle"
                          to="/services"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Services <i class="fas fa-plus"></i>
                        </Link>
                        <ul class="dropdown-menu">
                          <li class="nav-item">
                            <a class="dropdown-item" href="appointment.html">
                              Appointment
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="dropdown-item" href="pricing.html">
                              Pricing
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/*//End Sub Menu */}
                      <li class="nav-item dropdown">
                        <Link
                          class="nav-link dropdown-toggle"
                          to="/blogs/1"
                          id="navbarDropdown3"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          Blog{" "}
                        </Link>
                      </li>
                      <li class="nav-item dropdown">
                        <Link
                          class="nav-link dropdown-toggle"
                          to="/about"
                          id="navbarDropdown4"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          About
                        </Link>
                      </li>
                      <li class="nav-item dropdown">
                        <Link
                          class="nav-link dropdown-toggle"
                          to="/contact"
                          id="navbarDropdown4"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          Contact
                        </Link>
                      </li>

                      <li class="nav-item">
                        <a
                          class="nav-link btn btn-outline-primary appointment-btn-top"
                          href="appointment.html"
                        >
                          Appointment
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/*//End Nav menu */}
              </div>
            </div>
          </div>
        </nav>

        {/* // end .container */}
      </div>
    </header>
  );
};

export default Header;
