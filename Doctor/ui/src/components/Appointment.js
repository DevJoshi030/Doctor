import React from "react";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";

const Appointment = () => {
  return (
    <div>
      ]<Header />
      <section class="space sub-header">
        <div class="container container-custom">
          <div class="row">
            <div class="col-md-6">
              <div class="sub-header_content">
                <p>ABOUT US</p>
                <h3>
                  Lorem ipsum dolor sit ametco nse
                  <br /> ctetur adipisicing elitsed.
                </h3>
                <span>
                  <i>Home / About Us</i>
                </span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="sub-header_main">
                <h2>Appointment</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//End Sub header */}
      {/*//End Header */}
      {/*==================== News ====================*/}
      <section class="space">
        <div class="container container-custom">
          <div class="row">
            <div class="col-md-6">
              <div class="news-img-block">
                <img src="images/play-img.png" class="img-fluid" alt="#" />
                <a
                  class="video-play-button popup-youtube"
                  href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                >
                  <span></span>
                </a>
                <div id="video-overlay" class="video-overlay">
                  <a class="video-overlay-close">&times;</a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="video-play-text">
                <span>Who we are -----</span>
                <h2>We Have Advanced Technologies</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eius mod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eius mod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <hr />
                <div class="newsletter-subscribe">
                  <h4>Subscribe to our Newsletter</h4>
                  <div class="newsletter-subscribe_form">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Your Email"
                    />
                    <a href="#">
                      <i class="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//End News */}
      {/*==================== Appointment ====================*/}
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
                <div class="heading-style1">
                  <span>Why Us</span>
                  <h2>Why Choose Us</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing <br />{" "}
                    elit, sed do eius mod tempor inc ididuntut
                  </p>
                  <hr />
                </div>
                <div class="whychoose-wrap">
                  <img src="images/icon1.png" alt="#" />
                  <div class="whychoose-text_block">
                    <h4>Fastest Growing Clinic</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, su</p>
                  </div>
                </div>
                <div class="whychoose-wrap">
                  <img src="images/icon2.png" alt="#" />
                  <div class="whychoose-text_block">
                    <h4>Fastest Growing Clinic</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, su</p>
                  </div>
                </div>
                <div class="whychoose-wrap">
                  <img src="images/icon3.png" alt="#" />
                  <div class="whychoose-text_block">
                    <h4>Fastest Growing Clinic</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, su</p>
                  </div>
                </div>
                <div class="whychoose-wrap">
                  <img src="images/icon4.png" alt="#" />
                  <div class="whychoose-text_block">
                    <h4>Fastest Growing Clinic</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, su</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//End Appointment */}
      {/*==================== Testimonials ====================*/}
      <section class="space">
        <div class="container container-custom">
          <div class="col-md-12">
            <div class="heading-style1">
              <span>Testimonials</span>
              <h2>What Our Clients Say</h2>
            </div>
            <div class="testi-slider">
              <div class="testimonial-wrap">
                <img
                  src="images/testi-img1.jpg"
                  class="img-fluid testi-img-icon"
                  alt="#"
                />
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
                  <span>L</span>orem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eius mod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation.
                </p>
                <span class="testi-name">Mary Jane (ceo)</span>
                <div class="testi-styled-bg">
                  <img
                    src="images/testi-side-img_05.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
              </div>
              <div class="testimonial-wrap quaternary-br-color">
                <img
                  src="images/testi-img2.jpg"
                  class="img-fluid testi-img-icon"
                  alt="#"
                />
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
                  <span>L</span>orem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eius mod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation.
                </p>
                <span class="testi-name">Mary Jane (ceo)</span>
                <div class="testi-styled-bg">
                  <img
                    src="images/testi-side-img_05.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
              </div>
              <div class="testimonial-wrap">
                <img
                  src="images/testi-img1.jpg"
                  class="img-fluid testi-img-icon"
                  alt="#"
                />
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
                  <span>L</span>orem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eius mod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation.
                </p>
                <span class="testi-name">Mary Jane (ceo)</span>
                <div class="testi-styled-bg">
                  <img
                    src="images/testi-side-img_05.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
              </div>
              <div class="testimonial-wrap quaternary-br-color">
                <img
                  src="images/testi-img2.jpg"
                  class="img-fluid testi-img-icon"
                  alt="#"
                />
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
                  <span>L</span>orem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eius mod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation.
                </p>
                <span class="testi-name">Mary Jane (ceo)</span>
                <div class="testi-styled-bg">
                  <img
                    src="images/testi-side-img_05.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//End Testimonials */}
      {/*==================== Counter ====================*/}
    <Counter/> 
      <Footer />
    </div>
  );
};

export default Appointment;
