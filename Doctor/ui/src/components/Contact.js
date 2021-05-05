import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import getCookie from "../utils/getCookie";

const Contact = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const csrftoken = getCookie("csrftoken");

    const request_options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify({
        firstname: firstname.trim(),
        lastname: lastname.trim(),
        phone: phone.trim(),
        email: email.trim(),
        message: message,
      }),
    };

    await fetch("/api/add-contact/", request_options).then((res) => {
      if (res.status === 400) {
        console.log("Error");
      } else {
        setFirstname("");
        setLastname("");
        setEmail("");
        setMessage("");
        setPhone("");
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
                <p>CONTACT US 2</p>
                <h3>
                  Lorem ipsum dolor sit ametco nse
                  <br /> ctetur adipisicing elitsed.
                </h3>
                <span>
                  <i>Home / Contact Us 2</i>
                </span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="sub-header_main">
                <h2>Contact Us 2</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//End Sub header */}
      {/*//End Header */}
      {/*==================== Contact Us ====================*/}
      <section class="space">
        <div class="container container-custom">
          <div class="row">
            <div class="col-md-5">
              <div class="contact-box">
                <p>
                  Lorem ipsum dolor sit amet consect etur adipi sicing elit, sed
                  do eiusm
                </p>
                <hr />
                <div class="contact-title">
                  <h4>Contact Information</h4>
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
                    <h6>info@example.com</h6>
                  </div>
                </div>
                <hr />
              </div>
              <div class="contact-box">
                <div class="contact-title">
                  <h4>Head Office</h4>
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="contact-title_icon">
                    <p>Location</p>
                    <h6>
                      2663 Lodgeville Road <br />
                      Milliapolis, Minnasotta <br />
                      55402, USA
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-7">
              <div class="get-in-touch get-in-touch-style2">
                <img
                  src="/static/images/contact-form-bg.png"
                  class="img-fluid get-in-bg"
                  alt="#"
                />
                <h3>Get in Touch with Us</h3>
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  id="form"
                >
                  {/* REQUIRED: Your Access key here. Don't worry this can be public */}
                  {/* Create your Access key here: https://web3forms.com/ */}
                  <input
                    type="hidden"
                    name="apikey"
                    value="YOUR_ACCESS_KEY_HERE"
                  />
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="first name"
                          value={firstname}
                          onChange={(e) => setFirstname(e.target.value)}
                          placeholder="First Name"
                          required
                        />
                        <i class="far fa-user"></i>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="last name"
                          value={lastname}
                          onChange={(e) => setLastname(e.target.value)}
                          placeholder="Last Name"
                          required
                        />
                        <i class="far fa-user"></i>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          name="email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your Email"
                          required
                        />
                        <i class="far fa-envelope"></i>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="number"
                          class="form-control"
                          name="phone number"
                          value={phone}
                          onChange={(e)=> setPhone(e.target.value)}
                          placeholder="Your Phone Number"
                          required
                        />
                        <i class="fas fa-phone"></i>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group textarea-icon">
                        <textarea
                          class="form-control"
                          name="message"
                          value={message}
                          onChange={(e)=> setMessage(e.target.value)}
                          required
                          placeholder="Your Message"
                          id=""
                          rows="3"
                        ></textarea>
                        <i class="far fa-envelope"></i>
                        <button onClick={handleSubmit} class="btn btn-success">
                          BOOK NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div id="result" class="text-white"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//End Contact Us */}
      {/*==================== Map ====================*/}
      <section class="map">
        <div class="container container-custom">
          <div class="row">
            <div class="col-md-12">
              <iframe
                width="100%"
                height="450"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/*//End Map */}
      {/*==================== Counter ====================*/}
      <Counter />
      <Footer />
    </div>
  );
};

export default Contact;
