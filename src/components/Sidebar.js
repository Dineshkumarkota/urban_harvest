import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import '../styles/Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(true);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleNavigation = (path) => {
    navigate(path);
    // Close sidebar on mobile after navigation
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h1 className="logo">🌾 Urban Harvest</h1>
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li>
              <button
                className="nav-link"
                onClick={() => handleNavigation('/dashboard')}
              >
                <span className="nav-icon">📊</span>
                <span>Dashboard</span>
              </button>
            </li>
            <li>
              <button
                className="nav-link"
                onClick={() => handleNavigation('/products')}
              >
                <span className="nav-icon">📦</span>
                <span>Products</span>
              </button>
            </li>
            <li>
              <button className="nav-link">
                <span className="nav-icon">👥</span>
                <span>Orders</span>
              </button>
            </li>
            <li>
              <button className="nav-link">
                <span className="nav-icon">⚙️</span>
                <span>Settings</span>
              </button>
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <span>🚪</span> Logout
          </button>
        </div>
      </aside>
      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
}

export default Sidebar;
