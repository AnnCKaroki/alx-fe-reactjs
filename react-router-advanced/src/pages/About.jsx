import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h1>About This Project</h1>
      <p>
        This React application showcases advanced routing patterns using React Router v6.
        It demonstrates real-world scenarios that developers commonly encounter when
        building complex single-page applications.
      </p>

      <h2>Technologies Used</h2>
      <ul>
        <li>React 18</li>
        <li>React Router v6</li>
        <li>Vite</li>
        <li>Modern CSS</li>
      </ul>

      <h2>Routing Features Implemented</h2>
      <ul>
        <li><strong>Protected Routes:</strong> Routes that require authentication</li>
        <li><strong>Nested Routes:</strong> Profile section with sub-pages</li>
        <li><strong>Dynamic Routes:</strong> Blog posts and user profiles with IDs</li>
        <li><strong>Route Guards:</strong> Redirect unauthenticated users</li>
        <li><strong>Programmatic Navigation:</strong> Navigate using code</li>
      </ul>
    </div>
  );
};

export default About;
