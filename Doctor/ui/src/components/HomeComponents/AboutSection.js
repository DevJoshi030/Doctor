import React from 'react'

const AboutSection = () => {
    return (
        <div>
              <section class="about-section">
        <div class="container container-custom">
            <div class="row">
                <div class="col-md-12">
                    {/*- booking form */}
                    <ul class="booking-form">
                        <li><input type="text" class="form-control" placeholder="Enter Your Name" /><i
                                class="fas fa-user"></i></li>
                        <li><input type="text" class="form-control" placeholder="Select Your Location" /><i
                                class="fas fa-map-marker-alt"></i></li>
                        <li>
                            <select class="custom-select form-control">
                                <option selected>Select a Service</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </li>
                        <li class="form-btn">
                            <a href="#" class="btn btn-success">BOOK NOW</a>
                        </li>
                    </ul>
                    {/*-//End booking form */}
                </div>
            </div>
            <div class="row space">
                {/*- Service Icon */}
                <div class="col-md-4">
                    <div class="service-thumbnail d-flex flex-fill">
                        <img src="/static/images/service-thumbnail01.png" class="img-fluid" alt="#" />
                        <div class="service-thumbnail_text">
                            <h4>Specialised Service</h4>
                            <p>Lorem ipsum dolor sit</p>
                        </div>
                    </div>
                </div>
                {/*- Service Icon 02 */}
                <div class="col-md-4">
                    <div class="service-thumbnail d-flex flex-fill">
                        <img src="/static/images/service-thumbnail02.png" class="img-fluid" alt="#" />
                        <div class="service-thumbnail_text">
                            <h4>24/7 Advanced Care</h4>
                            <p>Lorem ipsum dolor sit</p>
                        </div>
                    </div>
                </div>
                {/*- Service Icon 03 */}
                <div class="col-md-4">
                    <div class="service-thumbnail border-0 d-flex flex-fill">
                        <img src="/static/images/service-thumbnail03.png" class="img-fluid" alt="#" />
                        <div class="service-thumbnail_text">
                            <h4>Get Result Online</h4>
                            <p>Lorem ipsum dolor sit</p>
                        </div>
                    </div>
                </div>
                {/*-//End Service Icon */}
            </div>
            <div class="row">
                <div class="col-md-12">
                    {/*- About */}
                    <div class="about-video_block">
                        <div class="row">
                            <div class="col-md-12 col-lg-6">
                                <a href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                                    class="video-play-img popup-youtube">
                                    <img src="/static/images/about-img.jpg" class="img-fluid w-100" alt="#" />
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
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation.
                                    </p>
                                    <p>
                                        Sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostru
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
                    {/*-//End About */}
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default AboutSection
