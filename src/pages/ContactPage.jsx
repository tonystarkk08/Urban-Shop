import React from "react";
import { Footer, Navbar } from "../components";
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        {/*   */}
        <h2 className="comman-heading">contact page</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14414.128318752539!2d78.59629023145612!3d25
.42046902142655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3977777747cef93b%3A0xdb98224d8306db90!
            2sBhatta%20Gaon%2C%20Jhansi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1707327354818!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>

        <hr />
        <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/mdoqeybb" method="POST" className="contact-inputs">
          <input type="text"
            placeholder="username"
            name="username"
            required
            autoComplete="off"
            
          />
              {/* <div class="form my-3">
                <label for="Name">Name</label>
                <input
                  // type="email"
                  class="form-control"
                  id="Name"
                  placeholder="Enter your name"
                />
              </div> */}
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Message</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"

                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
