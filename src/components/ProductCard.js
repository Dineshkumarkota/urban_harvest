import React from 'react';
import '../styles/ProductCard.css';

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <span className="product-emoji">{product.image}</span>
      </div>

      <div className="product-body">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>

        <div className="product-footer">
          <div className="product-info">
            <span className={`product-status badge-${product.status === 'Available' ? 'success' : 'danger'}`}>
              {product.status}
            </span>
            <span className="product-price">{product.price}</span>
          </div>

          <div className="product-actions">
            <button className="btn-icon" onClick={() => onEdit(product)} title="Edit">
              ✏️
            </button>
            <button className="btn-icon danger" onClick={() => onDelete(product.id)} title="Delete">
              🗑️
            </button>
          </div>
        </div>

        <div className="product-quantity">
          <small>Stock: {product.quantity} units</small>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
