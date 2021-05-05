import React, { useState } from "react";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import getCookie from "../utils/getCookie";


const About = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    const csrftoken = getCookie("csrftoken");

    const request_options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify({
        email: email.trim(),
      }),
    };

    await fetch("/api/subscribe/", request_options).then((res) => {
      if (res.status === 400) {
        console.log("Error");
      } else {
        setEmail("");
        console.log("Success");
      }
    });
  };

  return (
    <div>
      <Header />
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
                <h2>About us</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//End Sub header */}
      {/*//End Header */}
      {/*==================== About Section ====================*/}
      <section class="about-section space-mt">
        <div class="container container-custom">
          <div class="row">
            <div class="col-md-12">
              {/* About */}
              <div class="about-video_block">
                <div class="row">
                  <div class="col-md-12 col-lg-6">
                    <a
                      href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                      class="video-play-img popup-youtube"
                    >
                      <img
                        src="/static/images/about-img.jpg"
                        class="img-fluid w-100"
                        alt="#"
                      />
                      <div class="video-play-btn">
                        <div class="video-play-icon">
                          <i class="fas fa-play"></i>
                        </div>
                        <span>PLAY VIDEO</span>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-12 col-lg-6">
                    <div class="video-play-text">
                      <h2>Short Story About Mededin Clinic.</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eius mod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation.
                      </p>
                      <p>
                        Sed do eius mod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostru
                        <a href="#">Readmore</a>
                      </p>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="facilities blue">
                            <h3>1000+</h3>
                            <span>Happy Patients</span>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="facilities green">
                            <h3>215+</h3>
                            <span>Expert Doctors</span>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="facilities yellow">
                            <h3>315+</h3>
                            <span>Hospital Rooms</span>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="facilities gray">
                            <h3>106+</h3>
                            <span>Award Winner</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*//End About */}
            </div>
          </div>
        </div>
      </section>
      {/*//End About Section */}
      {/*==================== News ====================*/}
      <section class="space-mb">
        <div class="container container-custom">
          <div class="row">
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Your Email"
                    />
                  
                      <button onClick={handleSubmit}>
                        <i class="fas fa-chevron-right" ></i>
                      </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="news-img-block">
                <img
                  src="/static/images/play-img.png"
                  class="img-fluid"
                  alt="#"
                />
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
          </div>
        </div>
      </section>
      {/*//End News */}
      {/*==================== Our Mission ====================*/}
      <section class="space">
        <div class="container container-custom">
          <div class="row">
            <div class="col-md-4">
              <div class="mission-wrap">
                <h3>Our Mission</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed
                  do eius mod tempor incid idunt ut labore et dolore magna
                  aliqua.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mission-wrap">
                <h3>Our Vision</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed
                  do eius mod tempor incid idunt ut labore et dolore magna
                  aliqua.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mission-wrap">
                <h3>Our Values</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed
                  do eius mod tempor incid idunt ut labore et dolore magna
                  aliqua.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//End Our Mission */}
      {/*==================== Our Team ====================*/}
      <section class="our-team light space">
        <div class="container container-custom">
          <div class="row">
            <div class="col-md-12">
              <div class="sub-title_center">
                <span>---- Our Team ----</span>
                <h2>Our Dedicated Doctors</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="doctors-slider">
                <div class="team-img_block yellow">
                  <div class="team-img-socila-block">
                    <img
                      src="/static/images/team1.jpg"
                      class="img-fluid"
                      alt="#"
                    />
                    <ul class="social-icons">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-google-plus-g"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4>Dr. Mary Joe</h4>
                  <p>Cardiologist Specialist</p>
                </div>
                <div class="team-img_block green">
                  <div class="team-img-socila-block">
                    <img
                      src="/static/images/team2.jpg"
                      class="img-fluid"
                      alt="#"
                    />
                    <ul class="social-icons">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-google-plus-g"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4>Thomas Jack</h4>
                  <p>Neurology Specialist</p>
                </div>
                <div class="team-img_block blue">
                  <div class="team-img-socila-block">
                    <img
                      src="/static/images/team3.jpg"
                      class="img-fluid"
                      alt="#"
                    />
                    <ul class="social-icons">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-google-plus-g"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4>Dr. Mary Joe</h4>
                  <p>Cardiologist Specialist</p>
                </div>
                <div class="team-img_block yellow">
                  <div class="team-img-socila-block">
                    <img
                      src="/static/images/team4.jpg"
                      class="img-fluid"
                      alt="#"
                    />
                    <ul class="social-icons">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-google-plus-g"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4>Dr. Hessy Hanna</h4>
                  <p>Radiology Specialist</p>
                </div>
                <div class="team-img_block blue">
                  <div class="team-img-socila-block">
                    <img
                      src="/static/images/team5.jpg"
                      class="img-fluid"
                      alt="#"
                    />
                    <ul class="social-icons">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-google-plus-g"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4>Dr. Mary Joe</h4>
                  <p>Cardiologist Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//End Our Team */}
      {/*==================== Testimonials ====================*/}
      <section class="testimonial">
        <div class="container container-custom">
          <div class="col-md-12">
            <div class="heading-style1">
              <span>Testimonials</span>
              <h2>What Our Clients Say</h2>
            </div>
            <div class="testi-slider">
              <div class="testimonial-wrap">
                <img
                  src="/static/images/testi-img1.jpg"
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
                    src="/static/images/testi-side-img_05.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
              </div>
              <div class="testimonial-wrap quaternary-br-color">
                <img
                  src="/static/images/testi-img2.jpg"
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
                    src="/static/images/testi-side-img_05.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
              </div>
              <div class="testimonial-wrap">
                <img
                  src="/static/images/testi-img1.jpg"
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
                    src="/static/images/testi-side-img_05.png"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
              </div>
              <div class="testimonial-wrap quaternary-br-color">
                <img
                  src="/static/images/testi-img2.jpg"
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
                    src="/static/images/testi-side-img_05.png"
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
      <Counter />
      <Footer />
    </div>
  );
};

export default About;
