import React, { useState } from 'react';

const Navigation = ({ children }) => {
  const [currentView, setCurrentView] = useState('posts');

  const navigationStyle = {
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #dee2e6',
    marginBottom: '1rem'
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    border: '1px solid #007bff',
    backgroundColor: 'white',
    color: '#007bff',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#007bff',
    color: 'white'
  };

  return (
    <div>
      <nav style={navigationStyle}>
        <button
          style={currentView === 'posts' ? activeButtonStyle : buttonStyle}
          onClick={() => setCurrentView('posts')}
        >
          Posts
        </button>
        <button
          style={currentView === 'about' ? activeButtonStyle : buttonStyle}
          onClick={() => setCurrentView('about')}
        >
          About
        </button>
        <button
          style={currentView === 'cache-demo' ? activeButtonStyle : buttonStyle}
          onClick={() => setCurrentView('cache-demo')}
        >
          Cache Demo
        </button>
      </nav>

      <div>
        {currentView === 'posts' && children}
        {currentView === 'about' && (
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>About This Demo</h2>
            <p>This demonstrates React Query's caching capabilities.</p>
            <p>Navigate between tabs to see how data is cached and persisted.</p>
          </div>
        )}
        {currentView === 'cache-demo' && (
          <div style={{ padding: '2rem' }}>
            <h2>Cache Demonstration</h2>
            <p>
              Switch to the Posts tab, wait for data to load, then switch back here.
              When you return to Posts, notice how the data loads instantly from cache!
            </p>
            <p>
              React Query keeps the data in cache for 10 minutes and considers it
              fresh for 5 minutes (configurable).
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;

