import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section className="experience">
      <h2>Professional Experience</h2>
      <div className="job">
        <h3>Jr. Software Engineer, Stella Technology</h3>
        <p><em>March 2022 - Present</em></p>
        <ul>
          <li>Built cloud-native applications utilizing AWS technologies...</li>
          <li>Developed healthcare message conversion utility...</li>
          <li>Implemented microservices architecture using Node.js/NestJS...</li>
          <li>Optimized API execution time by 4 to 6 seconds...</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
