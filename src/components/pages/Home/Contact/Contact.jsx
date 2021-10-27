import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" style={{ height: "600px" }}>
      <div className="text-center py-5">
        <small style={{ color: "#14d1ca" }} className="fw-bolder">
          CONTACT US
        </small>
        <h2 className="text-white mt-4">Always Connect with us</h2>
      </div>
      <form className="text-center mt-4" action="">
        <input type="email" placeholder="Email Address*" name="email" id="" />
        <br />
        <input type="text" placeholder="Subject*" name="subject" id="" />
        <br />
        <textarea
          placeholder="Your Message..."
          name="message"
          id=""
          cols="60"
          rows="5"
        ></textarea>
        <br />
        <button className="btn main-button text-white px-5">SUBMIT</button>
      </form>
    </section>
  );
};

export default Contact;
