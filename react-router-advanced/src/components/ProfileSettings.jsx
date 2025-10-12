import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const ProfileSettings = () => {
  const { user } = useAuth();
  const [settings, setSettings] = useState({
    notifications: true,
    privacy: 'public',
    theme: 'light'
  });

  const handleSettingChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  return (
    <div className="profile-section">
      <h2>Profile Settings</h2>
      <div className="settings-form">
        <div className="setting-item">
          <label>
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={(e) => handleSettingChange('notifications', e.target.checked)}
            />
            Enable Notifications
          </label>
        </div>

        <div className="setting-item">
          <label>Privacy Setting:</label>
          <select
            value={settings.privacy}
            onChange={(e) => handleSettingChange('privacy', e.target.value)}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="friends">Friends Only</option>
          </select>
        </div>

        <div className="setting-item">
          <label>Theme:</label>
          <select
            value={settings.theme}
            onChange={(e) => handleSettingChange('theme', e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="auto">Auto</option>
          </select>
        </div>

        <button className="save-btn">Save Settings</button>
      </div>
    </div>
  );
};

export default ProfileSettings;
