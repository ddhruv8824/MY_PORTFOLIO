/** @format */

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Project";
import Statistics from "./components/Statistics/Statistics";
import GitHubStats from "./components/GitHubStats/GitHubStats";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="statistics">
        <Statistics />
      </div>
      <div id="github-stats">
        <GitHubStats />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
