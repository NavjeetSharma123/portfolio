import React, { useInsertionEffect, useRef } from "react";
import "./contact.css";
import FacebookIcon from "../../assets/facebook-icon.png";
import InstagramIcon from "../../assets/instagram.png";
import LinkdinIcon from "../../assets/linkdin.png";
import YoutubeIcon from "../../assets/youtube.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t1a1a6o",
        "template_hv5c17z",
        form.current,
        "ElJaXvGJhKZKqS4Ey"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email has been sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        {" "}
        <h1 className="contactPageTitle">Certifications </h1>
        <p className="clientDesc">
          • Google Cloud Certified: Associate Cloud Engineer
          <br /> • Microsoft Certified: Power BI Data Analyst
          <br /> • Microsoft Certified: Azure AI Engineer Associate
          <br /> • Microsoft Certified: Azure Data Scientist Associate
          <br /> • Microsoft 365 Certified: Fundamentals
          <br /> • Microsoft Certified: Azure Data Fundamentals
          <br /> • Microsoft Certified: Azure AI Fundamentals
          <br />• Microsoft Certified: Azure Fundamentals
        </p>
      </div>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          {" "}
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="your_name"
          ></input>
          <input
            type="email"
            className="email"
            placeholder="Your email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your message"
          />
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a
              href="https://www.facebook.com/navm.sharma.5?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookIcon} alt="Facebook" className="link" />
            </a>
            <a
              href="https://www.instagram.com/navmsharma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} alt="Instagram" className="link" />
            </a>
            <a
              href="https://www.linkedin.com/in/navjeetsharma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkdinIcon} alt="Linkdin" className="link" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCWV0ZOSywzwaeOMBx7HmF_A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={YoutubeIcon} alt="Youtube" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
