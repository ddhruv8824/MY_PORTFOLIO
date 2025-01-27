// ProjectCard.jsx
import React from 'react';
import "./ProjectCard.css";

const ProjectCard = ({ title, description, techStack, liveLink, githubLink, imageSrc }) => {
  return (
    <div className="project-card-container">
      <div className="project-card">
        <div className="project-card-img">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <img src={imageSrc} alt={`${title} screenshot`} />
          </a>
        </div>
        <div className="project-card-body">
          <h2 className="project-card-title">{title}</h2>
          <p className="project-card-description">{description}</p>
          <p className="project-card-tech">Tech Stack: {techStack}</p>
          <div className="project-card-links">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
              GitHub
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <img src="https://img.icons8.com/ios/50/000000/source-code.png" alt="Live" />
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
