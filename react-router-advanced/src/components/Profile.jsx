import React from 'react';
import { Routes, Route, Link, useParams, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { userId } = useParams();
  const { user } = useAuth();

  return (
    <div className="profile-container">
      <h1>Profile {userId ? `- User ${userId}` : ''}</h1>

      {/* Nested Navigation */}
      <nav className="profile-nav">
        <Link to="/profile/details" className="profile-nav-link">
          Details
        </Link>
        <Link to="/profile/settings" className="profile-nav-link">
          Settings
        </Link>
      </nav>

      {/* Nested Routes */}
      <div className="profile-content">
        <Routes>
          <Route index element={<ProfileDetails />} />
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
