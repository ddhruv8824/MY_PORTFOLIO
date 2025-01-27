/** @format */

import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeAction = () => {
    const resumeUrl =
      "https://raw.githubusercontent.com/ddhruv8824/MY_PORTFOLIO/main/portfolio/public/DhruvSuthar-FullStackWebDeveloper-1cdy.pdf"; // Raw URL
    const openurl =
      "https://drive.google.com/file/d/1ikvKE9n0appUHxm0vJHeGFK331A9Wa7e/view?usp=sharing";
    setTimeout(() => {
      window.open(openurl, "_blank");
    }, 100); // Small delay to ensure the tab opens smoothly

    // Trigger the download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "DhruvSuthar-FullStackWebDeveloper.pdf"; // Set the file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.container}>
      <div id={styles.left}>
        <h1 id={styles.name}>DHRUV SUTHAR</h1>
      </div>
      <div id={styles.right}>
        <div onClick={() => handleScroll("home")} className={styles.navItem}>
          Home
        </div>
        <div onClick={() => handleScroll("about")} className={styles.navItem}>
          About
        </div>
        <div onClick={() => handleScroll("skills")} className={styles.navItem}>
          My Skills
        </div>
        <div
          onClick={() => handleScroll("projects")}
          className={styles.navItem}
        >
          Projects
        </div>
        <div
          onClick={() => handleScroll("statistics")}
          className={styles.navItem}
        >
          Statistics
        </div>
        <div onClick={() => handleScroll("footer")} className={styles.navItem}>
          Contact
        </div>
        <button className={styles.resumeButton} onClick={handleResumeAction}>
          Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
