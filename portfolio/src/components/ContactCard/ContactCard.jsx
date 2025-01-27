/** @format */

import React from "react";
import "./ContactCard.css";

const ContactCard = ({ handleClick }) => {
  return (
    <div className="contactCardContainer">
      <div className="titleee">
        <h1>Contact Info</h1>
      </div>
      <div className="line-mff"></div>
      <div className="contactcontents">
        <ul className="contact-lisst">
          <li>
            <span className="icon fas fa-map-marker-alt"></span>
            <span>Location:</span> Udaipur, Rajasthan
          </li>
          <li>
            <span className="icon fas fa-phone-alt"></span>
            <span>Contact Number:</span> +91 8824635374
          </li>
          <li>
            <span className="icon fas fa-envelope"></span>
            <span>Email:</span> ddhruv8824@gmail.com
          </li>
          <li>
            <span className="icon fas fa-graduation-cap"></span>
            <span>Higher Education:</span> Bachelor's of Computer Application -
            MohanLal Sukhadia University
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactCard;
