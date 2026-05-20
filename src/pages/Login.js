import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import '../styles/Login.css';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(localStorage.getItem('rememberMe') === 'true');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const user = {
        name: 'Admin User',
        email: email,
        role: 'Administrator',
        avatar: '👤',
        phone: '+1 (555) 123-4567',
        joinDate: '2023-01-15'
      };
      
      dispatch(login({
        user,
        email: rememberMe ? email : '',
        rememberMe
      }));
      
      setIsLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">🌾 Urban Harvest</h1>
            <p className="login-subtitle">Welcome Back</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? 'error' : ''}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="remember-me">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember">Remember me</label>
            </div>

            <button
              type="submit"
              className="btn btn-login"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="login-footer">
            <p className="demo-text">Demo credentials:</p>
            <p className="demo-email">Email: admin@urbanharvest.com</p>
            <p className="demo-password">Password: any password (6+ chars)</p>
          </div>
        </div>

        <div className="login-illustration">
          <div className="illustration-content">
            <h2>🚀</h2>
            <h3>Urban Harvest Admin</h3>
            <p>Manage your food delivery business efficiently</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;