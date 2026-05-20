import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatCard from '../components/StatCard';
import OrderTable from '../components/OrderTable';
import { mockDashboardStats, mockOrders } from '../data/mockData';
import '../styles/Dashboard.css';

function Dashboard() {
  const { isAuthenticated } = useSelector(state => state.auth);

  if (!isAuthenticated) {
    window.location.href = '/';
    return null;
  }

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <main className="dashboard-content">
          <div className="content-section">
            <h2 className="section-title">Dashboard Overview</h2>
            
            <div className="stats-grid">
              <StatCard
                icon="📦"
                title="Total Orders"
                value={mockDashboardStats.totalOrders}
                growth={mockDashboardStats.ordersGrowth}
                color="primary"
              />
              <StatCard
                icon="💰"
                title="Revenue"
                value={mockDashboardStats.totalRevenue}
                growth={mockDashboardStats.revenueGrowth}
                color="secondary"
              />
              <StatCard
                icon="👥"
                title="Active Users"
                value={mockDashboardStats.activeUsers}
                growth={mockDashboardStats.usersGrowth}
                color="warning"
              />
              <StatCard
                icon="🚚"
                title="Pending Deliveries"
                value={mockDashboardStats.pendingDeliveries}
                growth={mockDashboardStats.deliveriesGrowth}
                color="danger"
              />
            </div>

            <OrderTable orders={mockOrders} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;