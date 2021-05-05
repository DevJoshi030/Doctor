import React from "react";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";

const ServicesDetail = () => {
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
      {/*//End Sub header */}
      {/*//End Header */}
      {/*==================== Service Detail ====================*/}
      <section class="light">
        <div class="container container-custom">
          <div class="row">
            <div class="col-md-12 col-lg-4">
              <div class="sidebar-category">
                <ul>
                  <li>
                    <a href="#">
                      <img src="images/service-icon1.png" alt="#" />
                      <span>Dental Care</span>
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/service-icon2.png" alt="#" />
                      <span>Eye/Nose Care</span>
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/service-icon3.png" alt="#" />
                      <span>Allergic Issue</span>
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/service-icon4.png" alt="#" />
                      <span>Cardiology Service</span>
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/service-icon5.png" alt="#" />
                      <span>Neurology Sargery</span>
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/service-icon6.png" alt="#" />
                      <span>Orthology</span>
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/service-icon4.png" alt="#" />
                      <span>Lab Services</span>
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="contact-box mb-4">
                <h4>Contact Us</h4>
                <hr />
                <div class="contact-title">
                  <i class="fas fa-phone-volume"></i>
                  <div class="contact-title_icon">
                    <p>Phone</p>
                    <h6>+123 456 7890</h6>
                  </div>
                </div>
                <div class="contact-title">
                  <i class="fas fa-envelope"></i>
                  <div class="contact-title_icon">
                    <p>Email</p>
                    <h6>info@exaple.com</h6>
                  </div>
                </div>
                <div class="contact-title">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="contact-title_icon">
                    <p>Location</p>
                    <h6>
                      2663 Lodgeville Road
                      <br /> Minneapolis, Minnesota
                      <br /> 55402, USA
                    </h6>
                  </div>
                </div>
              </div>
              <div class="contact-box mb-4">
                <h4>Downloads</h4>
                <hr />
                <div class="contact-title">
                  <div class="alert alert-success" role="alert">
                    <img src="images/002-pdf.svg" class="img-fluid" alt="#" />
                    <p>Our Brouchure</p>
                    <span>50kb</span>
                  </div>
                  <div class="alert alert-warning" role="alert">
                    <img src="images/003-doc.svg" class="img-fluid" alt="#" />
                    <p>Information Sheet</p>
                    <span>120kb</span>
                  </div>
                </div>
              </div>
              <div class="contact-box mb-4">
                <h4>Latest News</h4>
                <hr />
                <div class="blog-sidebar_content">
                  <a href="#" class="thumbnail-wrap">
                    <img src="images/thambnail-1.jpg" alt="#" />
                    <div class="thumbnail-hover">
                      <i class="fas fa-external-link-alt"></i>
                    </div>
                  </a>
                  <div class="thumbnail-text_wrap">
                    <p>
                      Lorem ipsum dolor sit amet,
                      <br /> consectetur..
                    </p>
                    <span>June 25, 2019</span>
                  </div>
                </div>
                <div class="blog-sidebar_content">
                  <a href="#" class="thumbnail-wrap">
                    <img src="images/thambnail-2.jpg" alt="#" />
                    <div class="thumbnail-hover">
                      <i class="fas fa-external-link-alt"></i>
                    </div>
                  </a>
                  <div class="thumbnail-text_wrap">
                    <p>
                      Lorem ipsum dolor sit amet,
                      <br /> consectetur..
                    </p>
                    <span>June 25, 2019</span>
                  </div>
                </div>
                <div class="blog-sidebar_content">
                  <a href="#" class="thumbnail-wrap">
                    <img src="images/thambnail-3.jpg" alt="#" />
                    <div class="thumbnail-hover">
                      <i class="fas fa-external-link-alt"></i>
                    </div>
                  </a>
                  <div class="thumbnail-text_wrap">
                    <p>
                      Lorem ipsum dolor sit amet,
                      <br /> consectetur..
                    </p>
                    <span>June 25, 2019</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-8">
              <div class="service-detail_wrap">
                <div class="service-detail_img">
                  <img src="images/blog-img.jpg" class="img-fluid" alt="#" />
                  <h2>Professional Dental Care Services</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                  </p>
                  <p>
                    Voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione volupt atem sequi
                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                    dolor sit amet, consectetur, adipisci velit, sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>
                  <hr />
                </div>
                <div class="our-dental-service">
                  <div class="row">
                    <div class="col-md-12">
                      <h3 class="mb-4">Our Dental Services Included</h3>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="whychoose-wrap p-0">
                        <img src="images/008-implant.svg" alt="#" />
                        <div class="whychoose-text_block">
                          <h4>Implant Dentistry</h4>
                          <p>Excepteur sint occaecat cupidatat</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="whychoose-wrap p-0">
                        <img src="images/009-teeth.svg" alt="#" />
                        <div class="whychoose-text_block">
                          <h4>Cosmetic Dentistry</h4>
                          <p>Ut enim ad minim veniam, quis </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="whychoose-wrap p-0">
                        <img src="images/tooth.svg" alt="#" />
                        <div class="whychoose-text_block">
                          <h4>Root Canals</h4>
                          <p>Duis aute irure dolor in repr eh</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="whychoose-wrap p-0">
                        <img src="images/gums.svg" alt="#" />
                        <div class="whychoose-text_block">
                          <h4>Dental Cleaning</h4>
                          <p>Excepteur sint occaecat cupidatat</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="whychoose-wrap p-0">
                        <img src="images/dental.svg" alt="#" />
                        <div class="whychoose-text_block">
                          <h4>Teeth Whitening</h4>
                          <p>Duis aute irure dolor in repr eh</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="whychoose-wrap p-0">
                        <img src="images/009-teeth.svg" alt="#" />
                        <div class="whychoose-text_block">
                          <h4>Teeth Fillings</h4>
                          <p>Excepteur sint occaecat cupidatat</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="dental-features">
                  <h3>Medenin Dental Features</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi{" "}
                  </p>
                  <div class="row">
                    <div class="col-md-6">
                      <ul class="dental-features_list">
                        <li>
                          <i class="fas fa-check"></i>
                          <h6>Suspendisse facilisis sollicitudin sapien</h6>
                        </li>
                        <li>
                          <i class="fas fa-check"></i>
                          <h6>Praesent metus risus, tristique at </h6>
                        </li>
                        <li>
                          <i class="fas fa-check"></i>
                          <h6>Sed commodo placerat eros id luctus</h6>
                        </li>
                        <li>
                          <i class="fas fa-check"></i>
                          <h6>Suspendisse eget tortor eget</h6>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul class="dental-features_list">
                        <li>
                          <i class="fas fa-check"></i>
                          <h6>Nemo enim ipsam voluptatem voluptas.</h6>
                        </li>
                        <li>
                          <i class="fas fa-check"></i>
                          <h6>Mauris bibendum felis id nisl facilisis</h6>
                        </li>
                        <li>
                          <i class="fas fa-check"></i>
                          <h6>Donec condimentum rutrum auctor</h6>
                        </li>
                        <li>
                          <i class="fas fa-check"></i>
                          <h6>Cras a justo et dolor luctus rhoncus eu</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                  <h3>Our Dental Doctors</h3>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="doctors-box3 doctors-box3-service">
                        <img
                          src="images/doctors-img1.jpg"
                          class="img-fluid"
                          alt="#"
                        />
                        <div class="doctors-plus-icon">
                          <i class="fas fa-plus"></i>
                        </div>
                        <h4>Dr. Mary Joe</h4>
                        <p>SURGEON</p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="doctors-box3 doctors-box3-service">
                        <img
                          src="images/doctors-img2.jpg"
                          class="img-fluid"
                          alt="#"
                        />
                        <div class="doctors-plus-icon">
                          <i class="fas fa-plus"></i>
                        </div>
                        <h4>Dr. Mary Joe</h4>
                        <p>SURGEON</p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="doctors-box3 doctors-box3-service">
                        <img
                          src="images/doctors-img3.jpg"
                          class="img-fluid"
                          alt="#"
                        />
                        <div class="doctors-plus-icon">
                          <i class="fas fa-plus"></i>
                        </div>
                        <h4>Dr. Mary Joe</h4>
                        <p>SURGEON</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//End Service Detail */}
      {/*==================== Counter ====================*/}
      <Counter />
      <Footer />
    </div>
  );
};

export default ServicesDetail;
