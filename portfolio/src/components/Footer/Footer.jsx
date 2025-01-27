/** @format */
import React from "react";
import "./Footer.css";

const Footer = () => {
  const handleClick = () => {
    window.location.href =
      "https://api.whatsapp.com/send?phone=8387083815&text=Hii";
  };
  return (
    <>
      <div className="FooterContainer">
        <div className="contactSection">
          <div className="contactCard">
            {/* Left Card (Get in Touch) */}
            <div className="leftcard">
              <div className="lefttitle">
                <h1>Get in Touch</h1>
                <div className="line-mf"></div>
              </div>
              <div className="contact-info">
                <ul className="contact-list">
                  <li>
                    <span className="icon fas fa-map-marker-alt"></span> Udaipur
                    , Rajasthan
                  </li>
                  <li>
                    <span className="icon fas fa-phone-alt"></span> +91
                    8824635374
                  </li>
                  <li>
                    <span className="icon fas fa-envelope"></span>{" "}
                    ddhruv8824@gmail.com
                  </li>
                </ul>
              </div>
              {/* Social Icons Section */}
              <div className="social-icons">
                <a
                  href="https://github.com/harpreet-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/harpreet-singh-77015a258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>

            {/* Right Card (Send Message) */}
            <div className="rightcard">
              <div className="rigthtitle">
                <h1>Send Message</h1>
                <div className="line-mf"></div>
              </div>
              <div className="message-card" onClick={handleClick}>
                <p className="lead">
                  Have queries? Feel free to reach out to me.
                </p>
                <a
                  className="social-link whatsapp-link"
                  href="https://api.whatsapp.com/send?phone=8387083815&text=Hii"
                >
                  <i className="fab fa-whatsapp"></i>{" "}
                  {/* Using FontAwesome icon */}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Reserved Section */}
        <div className="Reserved">
          <p>&copy; 2025 Dhruv Suthar. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
