import React from 'react';
import '../styles/StatCard.css';

function StatCard({ icon, title, value, growth, color }) {
  return (
    <div className={`stat-card ${color}`}>
      <div className="stat-header">
        <span className="stat-icon">{icon}</span>
        <p className="stat-growth">{growth}</p>
      </div>
      <h3 className="stat-title">{title}</h3>
      <p className="stat-value">{value}</p>
    </div>
  );
}

export default StatCard;
