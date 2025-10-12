import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/profile';

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple authentication check (in real app, this would be an API call)
    if (credentials.username && credentials.password) {
      const userData = {
        name: credentials.username,
        email: `${credentials.username}@example.com`,
        role: 'User',
        memberSince: 'January 2024'
      };

      login(userData);
      navigate(from, { replace: true });
    } else {
      alert('Please enter both username and password');
    }
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Enter any username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Enter any password"
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>

      <p className="login-hint">
        💡 Tip: Enter any username and password to log in
      </p>
    </div>
  );
};

export default Login;
