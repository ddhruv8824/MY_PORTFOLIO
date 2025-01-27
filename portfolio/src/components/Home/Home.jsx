/** @format */

import React, { useState, useEffect } from "react";
import styles from "./home.module.css"
import img from "../../assets/profile.png";
import img2 from "../../assets/hero-devices.svg";
const TypewriterEffect = () => {
  const sentences = [
    "I am a MERN Stack Developer.",
    "I love coding in JavaScript.",
    "I like designing Websites.",
    "Welcome to my portfolio!",
  ];

  const [text, setText] = useState(sentences[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sentences.length); // Update index
    }, 4000); // Change sentence every 4 seconds

    return () => clearInterval(interval);
  }, [sentences.length]);

  useEffect(() => {
    setText(sentences[index]); // Update text when index changes
  }, [index, sentences]);

  return <div className={styles.animatedtext}>{text}</div>;
};

const Home = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.title}>
          <h1 id={styles.homeName}>Hello, My Name is Dhruv Suthar</h1>
          <TypewriterEffect />
          <div className={styles.profilepiccontainer}>
            <img
              src={img} // Replace with your actual image URL
              alt="Dhruv Suthar"
              className={styles.profilepic}
            />
          </div>
        </div>
        <img className={styles.image2} src={img2} alt="" />
      </div>
    </>
  );
};

export default Home;
