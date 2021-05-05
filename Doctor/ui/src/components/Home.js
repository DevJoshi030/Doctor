import React, { useEffect } from "react";
import AboutSection from "./HomeComponents/AboutSection";
import ServicesSection from "./HomeComponents/ServicesSection";
import WhyChooseSection from "./HomeComponents/WhyChooseSection";
import NewsSection from "./HomeComponents/NewsSection";
import OurTeamSection from "./HomeComponents/OurTeamSection";
import ConsultantSection from "./HomeComponents/ConsultantSection";
import TestimonialSection from "./HomeComponents/TestimonialSection";
import BlogSection from "./HomeComponents/BlogSection";
import Footer from "./Footer";
import Header from "./Header";

import addScripts from "../utils/addScripts";
import removeScripts from "../utils/removeScripts";

const Home = () => {
  useEffect(() => {
    removeScripts();
    addScripts();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      /*
      
      Script  : Main JS
      Version : 1.0
      Author  : Surjith S M
      URI     : http://themeforest.net/user/surjithctly
      
      Copyright © All rights Reserved
      Surjith S M / @surjithctly
      
      */

      console.log("Hello");

      $(function () {
        "use strict";
        /* ================================================
              Back to top
              ================================================ */
        $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
            $("#scroll").fadeIn();
          } else {
            $("#scroll").fadeOut();
          }
        });
        $("#scroll").on("click", function (e) {
          $("html, body").animate({ scrollTop: 0 }, 600);
          return false;
        });

        /* ================================================
              Video popup
              ================================================ */

        var $magnificPopup = $(".popup-youtube");

        if ($magnificPopup.length && $.fn.magnificPopup) {
          $magnificPopup.magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
          });
        }

        /* ================================================
              Video play button effect
              ================================================ */
        $("#play-video").on("click", function (e) {
          e.preventDefault();
          $("#video-overlay").addClass("open");
          $("#video-overlay").append(
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>'
          );
        });

        $(".video-overlay, .video-overlay-close").on("click", function (e) {
          e.preventDefault();
          close_video();
        });

        $(document).keyup(function (e) {
          if (e.keyCode === 27) {
            close_video();
          }
        });

        function close_video() {
          $(".video-overlay.open").removeClass("open").find("iframe").remove();
        }

        /* ================================================
              Banner Slider
              ================================================ */

        var $bannerSlider = $(".banner-slider");

        if ($bannerSlider.length && $.fn.slick) {
          $bannerSlider.slick({
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            vertical: true,
            verticalSwiping: true,
            autoplay: true,
            infinite: false,
            autoplaySpeed: 5000,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  vertical: false,
                  verticalSwiping: false,
                },
              },
            ],
          });
        }

        /* ================================================
              Main Slider
              ================================================ */

        var $mainSlider = $(".main-slider");

        if ($mainSlider.length && $.fn.slick) {
          $mainSlider.slick({
            dots: false,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            autoplay: false,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  arrows: false,
                  dots: false,
                },
              },
              {
                breakpoint: 992,
                settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 576,
                settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ],
          });
        }
        /* ================================================
              Service Slider
              ================================================ */
        var $serviceSlider = $(".service-slider");

        if ($serviceSlider.length && $.fn.slick) {
          $serviceSlider.slick({
            dots: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                  dots: true,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 576,
                settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ],
          });
        }

        /* ================================================
              Doctors Slider
              ================================================ */
        var $doctorSlider = $(".doctors-slider");

        if ($doctorSlider.length && $.fn.slick) {
          $doctorSlider.slick({
            dots: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                  dots: true,
                },
              },
              {
                breakpoint: 992,
                settings: {
                  arrows: false,
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 576,
                settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ],
          });
        }

        /* ================================================
              Testi Slider
              ================================================ */
        var $testiSlider = $(".testi-slider");

        if ($testiSlider.length && $.fn.slick) {
          $testiSlider.slick({
            dots: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                  dots: true,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 576,
                settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ],
          });
        }

        /* ================================================
              Our team
              ================================================ */
        var $ourteamSlider = $(".our-team-slider");

        if ($ourteamSlider.length && $.fn.slick) {
          $ourteamSlider.slick({
            dots: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                  dots: true,
                },
              },
              {
                breakpoint: 992,
                settings: {
                  arrows: false,
                  slidesToShow: 3,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 576,
                settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ],
          });
        }

        /* ================================================
             Testimonial Style 2
              ================================================ */
        var $testiSlider2 = $(".testi-slider-style2");

        if ($testiSlider2.length && $.fn.slick) {
          $testiSlider2.slick({
            infinite: true,
            slidesToShow: 1,
            speed: 300,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            // asNavFor: ".testi-slider-style2-nav",
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                },
              },
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ],
          });
        }

        var $testiSliderstyle2nav = $(".testi-slider-style2-nav");

        if ($testiSliderstyle2nav.length && $.fn.slick) {
          $testiSliderstyle2nav.slick({
            slidesToShow: 5,
            slidesToScroll: 0,
            asNavFor: ".testi-slider-style2",
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 576,
                settings: {
                  arrows: false,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ],
          });
        }

        /* ================================================
            Dropdown Menu
            ================================================ */

        if ($(".dropdown-menu a.dropdown-toggle").length) {
          $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
            if (!$(this).closest(".dropdown").hasClass("show")) {
              $(this)
                .closest(".dropdown")
                .first()
                .find(".show")
                .removeClass("show");
            }
            var $subMenu = $(this).closest(".dropdown");
            $subMenu.toggleClass("show");

            $(this)
              .parents("li.nav-item.dropdown.show")
              .on("hidden.bs.dropdown", function (e) {
                $(".dropdown-submenu .show").removeClass("show");
              });

            return false;
          });
        }
        /* ================================================
            Before After Slider
            ================================================ */
        if ($.fn.twentytwenty) {
          $(
            ".twentytwenty-container[data-orientation!='vertical']"
          ).twentytwenty({
            default_offset_pct: 0.7,
          });
          $(
            ".twentytwenty-container[data-orientation='vertical']"
          ).twentytwenty({
            default_offset_pct: 0.3,
            orientation: "vertical",
          });
        }
      });

      /* ================================================
            Contact Forms Powered by Web3forms.com
            ================================================ */

      const form = document.getElementById("form");
      const result = document.getElementById("result");

      form &&
        form.addEventListener("submit", function (e) {
          const formData = new FormData(form);
          e.preventDefault();
          var object = {};
          formData.forEach((value, key) => {
            object[key] = value;
          });
          var json = JSON.stringify(object);
          result.innerHTML = "Please wait...";

          fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: json,
          })
            .then(async (response) => {
              if (response.status == 200) {
                let json = await response.json();
                result.innerHTML = json.body.message;
              } else {
                console.log(response);
                result.innerHTML = "Something went wrong!";
              }
            })
            .catch((error) => {
              console.log(error);
              result.innerHTML = "Something went wrong!";
            })
            .then(function () {
              form.reset();
              setTimeout(() => {
                result.style.display = "none";
              }, 5000);
            });
        });
    }, 10);
  }, []);

  return (
    <div>
      <Header />

      <div class="container">
        <div class="banner-slider">
          <div class="banner">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                {/* Slider Title */}
                <div class="main-title">
                  <span>We are here for you</span>
                  <h1>What Makes Us Better, Makes You Better.</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus eu lacus ex. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos ipsum dolor sit
                    amet.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Make Appointment
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                    class="play-btn popup-youtube"
                  >
                    <i class="fas fa-play"></i>
                  </a>
                </div>
                {/*//End Slider Title */}
              </div>
              <div class="col-12 col-md-6 col-lg-7 d-flex align-items-end">
                <div class="anim-container flex-fill">
                  <svg
                    class="circle-svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 754 733"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="big-circle"
                      opacity="0.071"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M377 29C563.12 29 714 179.879 714 366C714 552.119 563.12 702.999 377 702.999C190.88 702.999 40 552.119 40 366C40 179.879 190.88 29 377 29Z"
                      fill="#4D72D0"
                    />
                    <path
                      class="small-circle"
                      opacity="0.051"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M376.471 120.995C512.043 120.995 621.947 230.898 621.947 366.471C621.947 502.043 512.043 611.946 376.471 611.946C240.898 611.946 130.995 502.043 130.995 366.471C130.995 230.898 240.898 120.995 376.471 120.995Z"
                      fill="#4D72D0"
                    />
                  </svg>

                  <img
                    src="/static/images/hero-doctor-1.png"
                    class="img-fluid animated-hero"
                    alt="hero"
                  />

                  <ul class="main-slider-social">
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
              </div>
            </div>
          </div>

          <div class="banner">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                {/* Slider Title */}
                <div class="main-title">
                  <span>We are here for you</span>
                  <h1>What Makes Us Better, Makes You Better.</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus eu lacus ex. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos ipsum dolor sit
                    amet.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Make Appointment
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                    class="play-btn popup-youtube"
                  >
                    <i class="fas fa-play"></i>
                  </a>
                </div>
                {/*//End Slider Title */}
              </div>
              <div class="col-12 col-md-6 col-lg-7 d-flex align-items-end">
                <div class="anim-container flex-fill">
                  <svg
                    class="circle-svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 754 733"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="big-circle"
                      opacity="0.071"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M377 29C563.12 29 714 179.879 714 366C714 552.119 563.12 702.999 377 702.999C190.88 702.999 40 552.119 40 366C40 179.879 190.88 29 377 29Z"
                      fill="#4D72D0"
                    />
                    <path
                      class="small-circle"
                      opacity="0.051"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M376.471 120.995C512.043 120.995 621.947 230.898 621.947 366.471C621.947 502.043 512.043 611.946 376.471 611.946C240.898 611.946 130.995 502.043 130.995 366.471C130.995 230.898 240.898 120.995 376.471 120.995Z"
                      fill="#4D72D0"
                    />
                  </svg>

                  <img
                    src="/static/images/hero-doctor-1.png"
                    class="img-fluid animated-hero"
                    alt="hero"
                  />

                  <ul class="main-slider-social">
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
              </div>
            </div>
          </div>

          <div class="banner">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                {/* Slider Title */}
                <div class="main-title">
                  <span>We are here for you</span>
                  <h1>What Makes Us Better, Makes You Better.</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus eu lacus ex. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos ipsum dolor sit
                    amet.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Make Appointment
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                    class="play-btn popup-youtube"
                  >
                    <i class="fas fa-play"></i>
                  </a>
                </div>
                {/*//End Slider Title */}
              </div>
              <div class="col-12 col-md-6 col-lg-7 d-flex align-items-end">
                <div class="anim-container flex-fill">
                  <svg
                    class="circle-svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 754 733"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="big-circle"
                      opacity="0.071"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M377 29C563.12 29 714 179.879 714 366C714 552.119 563.12 702.999 377 702.999C190.88 702.999 40 552.119 40 366C40 179.879 190.88 29 377 29Z"
                      fill="#4D72D0"
                    />
                    <path
                      class="small-circle"
                      opacity="0.051"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M376.471 120.995C512.043 120.995 621.947 230.898 621.947 366.471C621.947 502.043 512.043 611.946 376.471 611.946C240.898 611.946 130.995 502.043 130.995 366.471C130.995 230.898 240.898 120.995 376.471 120.995Z"
                      fill="#4D72D0"
                    />
                  </svg>

                  <img
                    src="/static/images/hero-doctor-1.png"
                    class="img-fluid animated-hero"
                    alt="hero"
                  />

                  <ul class="main-slider-social">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <NewsSection />
      <OurTeamSection />
      <ConsultantSection />
      <TestimonialSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Home;
