import React from 'react';
import { useAuth } from '../context/AuthContext';

const ProfileDetails = () => {
  const { user } = useAuth();

  return (
    <div className="profile-section">
      <h2>Profile Details</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {user?.name || 'John Doe'}</p>
        <p><strong>Email:</strong> {user?.email || 'john@example.com'}</p>
        <p><strong>Role:</strong> {user?.role || 'User'}</p>
        <p><strong>Member Since:</strong> {user?.memberSince || 'January 2024'}</p>
      </div>
    </div>
  );
};

export default ProfileDetails;

