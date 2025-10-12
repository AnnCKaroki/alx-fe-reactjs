import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to React Router Advanced Demo</h1>
      <p>This application demonstrates advanced routing techniques including:</p>

      <ul className="feature-list">
        <li>🔒 Protected Routes with Authentication</li>
        <li>🎯 Nested Routes for Complex UI Structure</li>
        <li>🔗 Dynamic Routes with Parameters</li>
        <li>🧭 Programmatic Navigation</li>
      </ul>

      <div className="demo-links">
        <h3>Try These Features:</h3>
        <div className="link-grid">
          <Link to="/blog/1" className="demo-link">
            📖 View Blog Post (Dynamic Route)
          </Link>
          <Link to="/profile" className="demo-link">
            👤 Access Profile (Protected Route)
          </Link>
          <Link to="/user/123" className="demo-link">
            🆔 User Profile with ID (Dynamic)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
