import React from 'react';
import '../styles/OrderTable.css';

function OrderTable({ orders }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'delivered';
      case 'In Transit':
        return 'transit';
      case 'Pending':
        return 'pending';
      default:
        return 'default';
    }
  };

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h3>Recent Orders</h3>
        <a href="#view-all" className="view-all">View All →</a>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td className="order-id">{order.orderNumber}</td>
                <td>{order.customer}</td>
                <td>{order.items}</td>
                <td className="total">{order.total}</td>
                <td>
                  <span className={`badge badge-${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderTable;
