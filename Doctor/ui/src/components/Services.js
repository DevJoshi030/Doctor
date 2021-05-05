import React from "react";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";

const Services = () => {
  return (
    <div>
      <Header />
      <section class="space sub-header">
        <div class="container container-custom">
          <div class="row">
            <div class="col-md-6">
              <div class="sub-header_content">
                <p>OUR SERVICES</p>
                <h3>
                  Lorem ipsum dolor sit ametco nse
                  <br /> ctetur adipisicing elitsed.
                </h3>
                <span>
                  <i>Home / Services</i>
                </span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="sub-header_main">
                <h2>Services</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-//End Sub header*/}
      {/*-//End Header*/}
      {/*-==================== Pricing ====================*/}
      <section class="space light">
        <div class="container container-custom">
          <div class="row">
            <div class="col-md-12">
              <div class="sub-title_center">
                <span>---- Our Services ----</span>
                <h2>High Quality Services for You</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="service-block yellow">
                <img src="/static/images/service-icon1.png" alt="#" />
                <h3>Dental Care</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eius mod tempor incididunt ut labore{" "}
                </p>
                <a href="#" class="btn btn-dark">
                  READ MORE
                </a>
                <div class="service-bg-icon">
                  <img
                    src="/static/images/services-bg1.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service-block green">
                <img src="/static/images/service-icon2.png" alt="#" />
                <h3>Eye Care</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eius mod tempor incididunt ut labore{" "}
                </p>
                <a href="#" class="btn btn-dark">
                  READ MORE
                </a>
                <div class="service-bg-icon">
                  <img
                    src="/static/images/services-bg2.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service-block blue">
                <img src="/static/images/service-icon3.png" alt="#" />
                <h3>Allergic Issue</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eius mod tempor incididunt ut labore{" "}
                </p>
                <a href="#" class="btn btn-dark">
                  READ MORE
                </a>
                <div class="service-bg-icon">
                  <img
                    src="/static/images/services-bg3.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="service-block blue">
                <img src="/static/images/service-icon4.png" alt="#" />
                <h3>Cardiology</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eius mod tempor incididunt ut labore{" "}
                </p>
                <a href="#" class="btn btn-dark">
                  READ MORE
                </a>
                <div class="service-bg-icon">
                  <img
                    src="/static/images/services-bg4.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service-block yellow">
                <img src="/static/images/service-icon5.png" alt="#" />
                <h3>Neurology Sargery</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eius mod tempor incididunt ut labore{" "}
                </p>
                <a href="#" class="btn btn-dark">
                  READ MORE
                </a>
                <div class="service-bg-icon">
                  <img
                    src="/static/images/services-bg5.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service-block green">
                <img src="/static/images/service-icon6.png" alt="#" />
                <h3>Allergic Issue</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eius mod tempor incididunt ut labore{" "}
                </p>
                <a href="#" class="btn btn-dark">
                  READ MORE
                </a>
                <div class="service-bg-icon">
                  <img
                    src="/static/images/services-bg6.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-//End Pricing*/}
      {/*-==================== Appointment ====================*/}
      <section class="space background-bg4">
        <div class="container container-custom">
          <div class="row">
            <div class="col-md-12 col-lg-6">
              <div class="appointment-form_wrap">
                <div class="heading-style1">
                  <span>Online Booking</span>
                  <h2>Make an Appointment</h2>
                </div>
                <form action="#">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group form-group-cutom">
                        <input
                          type="email"
                          class="form-control form-custom"
                          placeholder="Enter Your Name"
                        />
                        <i class="far fa-user"></i>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-group-cutom">
                        <input
                          type="number"
                          class="form-control form-custom"
                          placeholder="Date and time"
                        />
                        <i class="far fa-clock"></i>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group form-group-cutom">
                        <input
                          type="number"
                          class="form-control form-custom"
                          placeholder="Enter phone number"
                        />
                        <i class="fas fa-phone"></i>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-group-cutom">
                        <input
                          type="text"
                          class="form-control form-custom"
                          placeholder="Select location"
                        />
                        <i class="fas fa-map-marker-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group form-group-cutom">
                        <input
                          type="text"
                          class="form-control form-custom"
                          placeholder="Choose department"
                        />
                        <i class="far fa-circle"></i>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group form-group-cutom">
                        <input
                          type="text"
                          class="form-control form-custom"
                          placeholder="Select doctor"
                        />
                        <i class="far fa-user"></i>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group form-group-cutom">
                        <label for="exampleFormControlTextarea1">
                          Your Message
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <a href="#" class="btn btn-success">
                        BOOK NOW
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-12 col-lg-6">
              <div class="why-choose_block">
                <div class="heading-style1 mb-0">
                  <span>Why Us</span>
                  <h2>Why Choose Us</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing <br />{" "}
                    elit, sed do eius mod tempor inc ididuntut
                  </p>
                  <hr />
                </div>
                <div class="whychoose-wrap">
                  <img src="/static/images/icon1.png" alt="#" />
                  <div class="whychoose-text_block">
                    <h4>Fastest Growing Clinic</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, su</p>
                  </div>
                </div>
                <div class="whychoose-wrap">
                  <img src="/static/images/icon2.png" alt="#" />
                  <div class="whychoose-text_block">
                    <h4>Free Ambulance Servcice</h4>
                    <p>Ut enim ad minim veniam, quis nostrud exercitati</p>
                  </div>
                </div>
                <div class="whychoose-wrap">
                  <img src="/static/images/icon3.png" alt="#" />
                  <div class="whychoose-text_block">
                    <h4>24/7 Working Time</h4>
                    <p>Duis aute irure dolor in repr ehenderit in voluptate.</p>
                  </div>
                </div>
                <div class="whychoose-wrap mb-0">
                  <img src="/static/images/icon4.png" alt="#" />
                  <div class="whychoose-text_block">
                    <h4>5 Star Customer Rating </h4>
                    <p>Excepteur sint occaecat cupidatat non proident,</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-//End Appointment*/}
      {/*-==================== Pricing ====================*/}
      <section class="space">
        <div class="container container-custom">
          <div class="row">
            <div class="col-md-6">
              <div class="heading-style1">
                <span>Our Pricing ----</span>
                <h2>Pricing & Plans</h2>
              </div>
            </div>
            <div class="col-md-6">
              <div class="pricing-tab">
                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="pills-home-tab"
                      data-toggle="pill"
                      href="#pills-home"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Monthly
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="pills-profile-tab"
                      data-toggle="pill"
                      href="#pills-profile"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Yearly
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <ul class="pricing">
                    <li>
                      <img
                        src="/static/images/pricing-icon1.png"
                        class="img-fluid"
                        alt="#"
                      />
                      <h2>
                        <span>$</span>22
                      </h2>
                      <h3>Single Package</h3>
                      <p>
                        Lorem ipsum dolor sit amet, conse ctetur adipisicing
                        elit, sed do eius mod tempor incididunt ut
                      </p>
                      <a href="#" class="btn btn-primary">
                        Select Plan
                      </a>
                    </li>
                    <li class="pricing-middle">
                      <img
                        src="/static/images/pricing-icon2.png"
                        class="img-fluid"
                        alt="#"
                      />
                      <h2>
                        <span>$</span>27
                      </h2>
                      <h3>Couple Package</h3>
                      <p>
                        Lorem ipsum dolor sit amet, conse ctetur adipisicing
                        elit, sed do eius mod tempor incididunt ut
                      </p>
                      <a href="#" class="btn btn-success">
                        Select Plan
                      </a>
                      <div class="pricing-badge">
                        <img src="/static/images/pricing-badge.png" alt="#" />
                      </div>
                    </li>
                    <li>
                      <img
                        src="/static/images/pricing-icon3.png"
                        class="img-fluid"
                        alt="#"
                      />
                      <h2>
                        <span>$</span>33
                      </h2>
                      <h3>Family Package</h3>
                      <p>
                        Lorem ipsum dolor sit amet, conse ctetur adipisicing
                        elit, sed do eius mod tempor incididunt ut
                      </p>
                      <a href="#" class="btn btn-primary">
                        Select Plan
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <ul class="pricing">
                    <li>
                      <img
                        src="/static/images/pricing-icon1.png"
                        class="img-fluid"
                        alt="#"
                      />
                      <h2>
                        <span>$</span>22
                      </h2>
                      <h3>Single Package</h3>
                      <p>
                        Lorem ipsum dolor sit amet, conse ctetur adipisicing
                        elit, sed do eius mod tempor incididunt ut
                      </p>
                      <a href="#" class="btn btn-primary">
                        Select Plan
                      </a>
                    </li>
                    <li class="pricing-middle">
                      <img
                        src="/static/images/pricing-icon1.png"
                        class="img-fluid"
                        alt="#"
                      />
                      <h2>
                        <span>$</span>22
                      </h2>
                      <h3>Single Package</h3>
                      <p>
                        Lorem ipsum dolor sit amet, conse ctetur adipisicing
                        elit, sed do eius mod tempor incididunt ut
                      </p>
                      <a href="#" class="btn btn-success">
                        Select Plan
                      </a>
                      <div class="pricing-badge">
                        <img src="/static/images/pricing-badge.png" alt="#" />
                      </div>
                    </li>
                    <li>
                      <img
                        src="/static/images/pricing-icon1.png"
                        class="img-fluid"
                        alt="#"
                      />
                      <h2>
                        <span>$</span>22
                      </h2>
                      <h3>Single Package</h3>
                      <p>
                        Lorem ipsum dolor sit amet, conse ctetur adipisicing
                        elit, sed do eius mod tempor incididunt ut
                      </p>
                      <a href="#" class="btn btn-primary">
                        Select Plan
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-//End Pricing*/}
      {/*-==================== Testimonial Style 2 ====================*/}
      <div class="light">
        <div class="container container-custom">
          <div class="row">
            <div class="col-md-12">
              <div class="testi-slider-style2">
                <div class="testimonial-style2">
                  <img src="/static/images/doctors-img1.jpg" alt="#" />
                  <ul>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eius mod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitationLorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eius mod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation..
                  </p>
                  <span>Mary Jane (ceo)</span>
                </div>
                <div class="testimonial-style2">
                  <img src="/static/images/doctors-img1.jpg" alt="#" />
                  <ul>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eius mod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitationLorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eius mod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation..
                  </p>
                  <span>Mary Jane (ceo)</span>
                </div>
                <div class="testimonial-style2">
                  <img src="/static/images/doctors-img1.jpg" alt="#" />
                  <ul>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eius mod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitationLorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eius mod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation..
                  </p>
                  <span>Mary Jane (ceo)</span>
                </div>
                <div class="testimonial-style2">
                  <img src="/static/images/doctors-img1.jpg" alt="#" />
                  <ul>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eius mod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitationLorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eius mod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation..
                  </p>
                  <span>Mary Jane (ceo)</span>
                </div>
                <div class="testimonial-style2">
                  <img src="/static/images/doctors-img1.jpg" alt="#" />
                  <ul>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eius mod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitationLorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eius mod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation..
                  </p>
                  <span>Mary Jane (ceo)</span>
                </div>
              </div>
              <hr />
              <div class="testi-slider-style2-nav">
                <div>
                  <img
                    src="/static/images/client-logo1.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
                <div>
                  <img
                    src="/static/images/client-logo2.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
                <div>
                  <img
                    src="/static/images/client-logo1.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
                <div>
                  <img
                    src="/static/images/client-logo4.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
                <div>
                  <img
                    src="/static/images/client-logo5.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-//End Testimonial Style 2*/}
      {/*-==================== Counter ====================*/}
      <Counter />
      <Footer />
    </div>
  );
};

export default Services;
