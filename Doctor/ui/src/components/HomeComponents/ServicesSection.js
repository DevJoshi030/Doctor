import React from 'react'

const ServicesSection = () => {
    return (
        <>
             <section class="space light">
        <div class="container container-custom">
            <div class="row">
                <div class="col-md-12">
                    <div class="heading-style1">
                        <span>Our Services</span>
                        <h2>High Quality Services for You</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="service-slider">
                        <div class="service-block yellow">
                            <img src="/static/images/service-icon1.png" alt="#"/>
                            <h3>Dental Care</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore </p>
                            <a href="#" class="btn btn-dark">READ MORE</a>
                            <div class="service-bg-icon">
                                <img src="/static/images/services-bg1.png" class="img-fluid" alt="#"/>
                            </div>
                        </div>
                        <div class="service-block green">
                            <img src="/static/images/service-icon2.png" alt="#" />
                            <h3>Eye Care</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor
                                incididunt ut labore</p>
                            <a href="#" class="btn btn-dark">READ MORE</a>
                            <div class="service-bg-icon">
                                <img src="/static/images/services-bg2.png" class="img-fluid" alt="#"/>
                            </div>
                        </div>
                        <div class="service-block blue">
                            <img src="/static/images/service-icon3.png" alt="#" />
                            <h3>Allergic Issue</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor
                                incididunt ut labore
                            </p>
                            <a href="#" class="btn btn-dark">READ MORE</a>
                            <div class="service-bg-icon">
                                <img src="/static/images/services-bg3.png" class="img-fluid" alt="#"/>
                            </div>
                        </div>
                        <div class="service-block green">
                            <img src="/static/images/service-icon3.png" alt="#" />
                            <h3>Allergic Issue</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor
                                incididunt ut labore
                            </p>
                            <a href="#" class="btn btn-dark">READ MORE</a>
                            <div class="service-bg-icon">
                                <img src="/static/images/services-bg4.png" class="img-fluid" alt="#"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p class="text-center service-help_link">
                        Contact us for better help and services.
                        <a href="#">Let’s get started</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default ServicesSection

