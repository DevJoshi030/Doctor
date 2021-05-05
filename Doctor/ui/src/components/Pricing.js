import React from "react";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";

const Pricing = () => {
  return (
    <div>
      <Header />
      <section class="space sub-header">
        <div class="container container-custom">
          <div class="row">
            <div class="col-md-6">
              <div class="sub-header_content">
                <p>PRICING</p>
                <h3>
                  Lorem ipsum dolor sit ametco nse
                  <br /> ctetur adipisicing elitsed.
                </h3>
                <span>
                  <i>Home / Pricing</i>
                </span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="sub-header_main">
                <h2>Pricing</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//End Sub header */}
      {/*//End Header */}
      {/*==================== Pricing ====================*/}
      <section class="space">
        <div class="container container-custom">
          <div class="row">
            <div class="col-md-6">
              <div class="heading-style1">
                <span>Our Services</span>
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
                        src="images/pricing-icon1.png"
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
                        src="images/pricing-icon1.png"
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
                        <img src="images/pricing-badge.png" alt="#" />
                      </div>
                    </li>
                    <li>
                      <img
                        src="images/pricing-icon1.png"
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
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <ul class="pricing">
                    <li>
                      <img
                        src="images/pricing-icon1.png"
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
                        src="images/pricing-icon1.png"
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
                        <img src="images/pricing-badge.png" alt="#" />
                      </div>
                    </li>
                    <li>
                      <img
                        src="images/pricing-icon1.png"
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
      {/*//End Pricing */}
      {/*==================== Pricing bg ====================*/}
      <section class="pricing-bg space">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-md-6">
              <div class="twentytwenty-wrapper twentytwenty-horizontal">
                <div
                  class="twentytwenty-container pricing-img-wrap"
                  style="height: 322.828px;"
                >
                  <img
                    src="images/pricing-img1.jpg"
                    class="img-fluid w-100 twentytwenty-before"
                    alt="#"
                    style="clip: rect(0px, 339.5px, 322.828px, 0px);"
                  />
                  <img
                    src="images/pricing-img.jpg"
                    class="img-fluid w-100 twentytwenty-after"
                    alt="#"
                    style="clip: rect(0px, 485px, 322.828px, 339.5px);"
                  />
                  <div class="twentytwenty-overlay">
                    <div
                      class="twentytwenty-before-label"
                      data-content="Before"
                    ></div>
                    <div
                      class="twentytwenty-after-label"
                      data-content="After"
                    ></div>
                  </div>
                  <div class="twentytwenty-handle" style="left: 339.5px;">
                    <span class="twentytwenty-left-arrow"></span>
                    <span class="twentytwenty-right-arrow"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="pricing-text-wrap">
                <div class="stylish-heading">
                  <h2>100% Satisfaction Guaranteed...</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eius mod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation.
                </p>
                <div class="pricing-view_block">
                  <div class="pricing-view">
                    <h4>1000+</h4>
                    <p>Happy Patients</p>
                  </div>
                  <div class="pricing-view">
                    <h4>215+</h4>
                    <p>Completed Projects</p>
                  </div>
                </div>
                <a href="#" class="btn btn-success">
                  View Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//End Pricing bg */}
      {/*==================== Testimonial Style 2 ====================*/}
      <div>
        <div class="container container-custom">
          <div class="row">
            <div class="col-md-12">
              <div class="testi-slider-style2">
                <div class="testimonial-style2">
                  <img src="images/doctors-img1.jpg" alt="#" />
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
                  <img src="images/doctors-img1.jpg" alt="#" />
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
                  <img src="images/doctors-img1.jpg" alt="#" />
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
                  <img src="images/doctors-img1.jpg" alt="#" />
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
                  <img src="images/doctors-img1.jpg" alt="#" />
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
                    src="images/client-logo1.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
                <div>
                  <img
                    src="images/client-logo2.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
                <div>
                  <img
                    src="images/client-logo1.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
                <div>
                  <img
                    src="images/client-logo4.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
                <div>
                  <img
                    src="images/client-logo5.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*//End Testimonial Style 2 */}
      {/*==================== Counter ====================*/}
      <Counter />
      <Footer />
    </div>
  );
};

export default Pricing;
