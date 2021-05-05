import React from 'react'

const NewsSection = () => {
    return (
        <div>
             <section class="space">
        <div class="container container-custom">
            <div class="row">
                <div class="col-md-12 col-lg-6">
                    <div class="news-img-block">
                        <img src="/static/images/play-img.png" class="img-fluid w-100" alt="#" />
                        <a class="video-play-button popup-youtube" href="https://www.youtube.com/watch?v=pBFQdxA-apI">
                            <span></span>
                        </a>
                        <div id="video-overlay" class="video-overlay">
                            <a class="video-overlay-close">&times;</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-6">
                    <div class="video-play-text">
                        <span>Who we are -----</span>
                        <h2>We Have Advanced Technologies</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                        <hr />
                        <div class="newsletter-subscribe">
                            <h4>Subscribe to our Newsletter</h4>
                            <div class="newsletter-subscribe_form">
                                <input type="text" class="form-control" placeholder="Enter Your Email" />
                                <a href="#"><i class="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default NewsSection
