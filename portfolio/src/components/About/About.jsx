/** @format */

import React from "react";
import styles from "./About.module.css"; // Correct import
import ContactCard from "../ContactCard/ContactCard";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className="Title">
        <h1 id={styles.AboutTitle}>About Me</h1>
      </div>
      <div className={styles.para}>
        <p>
          Hi, I'm Dhruv Suthar, a passionate full-stack developer with expertise
          in building user-friendly and responsive web applications. I work with
          technologies like HTML, CSS, JavaScript, React.js, Redux, Node.js,
          Express, MongoDB, and Tailwind CSS to deliver innovative and efficient
          solutions for complex web development challenges. With a strong focus
          on clean, maintainable code and seamless user experiences, I thrive in
          crafting both robust backends and visually stunning frontends.
          Bringing ideas to life through technology is what drives me, and I’m
          committed to making an impact by delivering scalable and high-quality
          solutions.
        </p>
      </div>
      <div className={styles.contactcard}>
      <ContactCard/>
      </div>
    </div>
  );
};

export default About;
