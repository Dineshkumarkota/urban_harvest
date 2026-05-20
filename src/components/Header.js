import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Header.css';

function Header() {
  const { user } = useSelector(state => state.auth);

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          <h2>Welcome back, {user?.name}! 👋</h2>
        </div>

        <div className="header-actions">
          <button className="notification-btn">
            <span className="notification-icon">🔔</span>
            <span className="notification-badge">3</span>
          </button>

          <div className="user-profile">
            <div className="user-avatar">{user?.avatar || '👤'}</div>
            <div className="user-info">
              <p className="user-name">{user?.name}</p>
              <p className="user-role">{user?.role}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
