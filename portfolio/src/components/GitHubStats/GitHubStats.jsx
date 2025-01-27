/** @format */
import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./GitHubStats.css";

const GitHubStats = () => {
  return (
    <div className="github-stats-container">
      <div className="title-box">
        <h3 className="title">DAYS I CODE</h3>
        <p className="subtitle">GitHub commits and Statistics</p>
        <div className="line"></div>
      </div>

      {/* GitHub Calendar */}
      <div className="center-container-gitstats">
      <div className="calendar-wrapper">
        <GitHubCalendar username="ddhruv8824" />
      </div>
      </div>

      {/* Other GitHub Stats */}
      <div className="stats-wrapper">
        <div className="stat-card">
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=ddhruv8824&theme=dark"
            alt="GitHub Streak Stats"
          />
        </div>
        <div className="stat-card">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ddhruv8824&layout=compact&hide=php"
            alt="GitHub Top Languages"
          />
        </div>
        <div className="stat-card">
          <img
            src="https://github-readme-stats.vercel.app/api?username=ddhruv8824&show_icons=true&theme=dark"
            alt="GitHub Stats Card"
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
