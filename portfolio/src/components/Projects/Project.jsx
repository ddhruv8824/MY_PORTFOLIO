/** @format */

import React from "react";
import ProjectCard from "./ProjectCard";
import "./Project.css";
import img from "./Project images/fitnessBuddy.png";
import img1 from "./Project images/pumaSiteClone.png";
import img2 from "./Project images/Snack&Steer.png";

const projects = [
  {
    title: "Puma Site Clone",
    description:
      "Puma Clone is your go-to platform for exploring premium sportswear, offering a seamless shopping experience with the latest in athletic fashion and performance gear.",
    techStack: " HTML | CSS ",
    liveLink: "https://darling-pavlova-f90572.netlify.app/",
    githubLink: "https://github.com/ddhruv8824/Puma-Site-Clone",
    imageSrc: img1, // Use the imported image
  },
  {
    title: "Fitness Buddy",
    description:
      "Fitness Buddy is your ultimate companion for achieving health goals, offering personalized workouts, nutrition plans, and progress tracking to keep you motivated and on track",
    techStack: "React | CSS | Node.js | Express | MongoDB",
    liveLink: "https://stylistabook.netlify.app/",
    githubLink: "",
    imageSrc: img, // Use the imported image
  },
  {
    title: "Snack & Steer",
    description:
      "The Snack and Steer Dashboard eases traffic woes with real-time delivery and transportation solutions, boosting convenience and productivity.",
    techStack: " HTML | CSS ",
    liveLink: "https://snack-steer.onrender.com/login",
    githubLink: "https://github.com/ddhruv8824/Puma-Site-Clone",
    imageSrc: img2, // Use the imported image
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-mf sect-pt4 route">
      <div className="container">
        <div className="title-box text-center">
          <h3 className="title-a">Projects</h3>
          <p className="subtitle-a">
            A small showcase of feature projects I was part of.
          </p>
          <div className="line-mf"></div>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 mb-3">
              <ProjectCard
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
                imageSrc={project.imageSrc} // Pass the correct prop
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
