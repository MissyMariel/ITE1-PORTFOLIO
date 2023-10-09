import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
        </div>
        {/* Add more project components as needed */}
      </section>
      <footer>
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
