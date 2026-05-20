import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { searchProducts, filterByStatus, deleteProduct, addProduct } from '../redux/productSlice';
import '../styles/Products.css';

function Products() {
  const { isAuthenticated } = useSelector(state => state.auth);
  const { filteredProducts } = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
    description: '',
    status: 'Available',
    image: '📦'
  });

  if (!isAuthenticated) {
    window.location.href = '/';
    return null;
  }

  const handleSearch = (term) => {
    dispatch(searchProducts(term));
  };

  const handleFilter = (status) => {
    dispatch(filterByStatus(status));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.category || !newProduct.price) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Dispatch the add product action
    dispatch(addProduct({
      ...newProduct,
      quantity: parseInt(newProduct.quantity) || 0,
      status: newProduct.quantity === '' || parseInt(newProduct.quantity) === 0 ? 'Out of Stock' : 'Available'
    }));
    
    setShowAddForm(false);
    setNewProduct({
      name: '',
      category: '',
      price: '',
      quantity: '',
      description: '',
      status: 'Available',
      image: '📦'
    });
    alert('Product added successfully! 🎉');
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(id));
    }
  };

  const handleEditProduct = (product) => {
    alert('Edit functionality would open a modal form');
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <main className="dashboard-content">
          <div className="content-section">
            <div className="products-header">
              <h2 className="section-title">Products Management</h2>
              <button
                className="btn btn-primary"
                onClick={() => setShowAddForm(!showAddForm)}
              >
                {showAddForm ? '✕ Cancel' : '+ Add Product'}
              </button>
            </div>

            {showAddForm && (
              <div className="add-product-form card">
                <h3>Add New Product</h3>
                <form onSubmit={handleAddProduct}>
                  <div className="form-grid">
                    <div className="input-group">
                      <label>Product Name *</label>
                      <input
                        type="text"
                        placeholder="Enter product name"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="input-group">
                      <label>Category *</label>
                      <input
                        type="text"
                        placeholder="Enter category"
                        value={newProduct.category}
                        onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                        required
                      />
                    </div>
                    <div className="input-group">
                      <label>Price *</label>
                      <input
                        type="text"
                        placeholder="$0.00"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                        required
                      />
                    </div>
                    <div className="input-group">
                      <label>Quantity</label>
                      <input
                        type="number"
                        placeholder="0"
                        value={newProduct.quantity}
                        onChange={(e) => setNewProduct({...newProduct, quantity: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <label>Description</label>
                    <textarea
                      placeholder="Product description"
                      value={newProduct.description}
                      onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                      rows="3"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Add Product
                  </button>
                </form>
              </div>
            )}

            <div className="products-filters">
              <input
                type="text"
                placeholder="🔍 Search products..."
                className="search-input"
                onChange={(e) => handleSearch(e.target.value)}
              />
              <div className="filter-buttons">
                <button
                  className="filter-btn"
                  onClick={() => handleFilter('all')}
                >
                  All Products
                </button>
                <button
                  className="filter-btn"
                  onClick={() => handleFilter('Available')}
                >
                  Available
                </button>
                <button
                  className="filter-btn"
                  onClick={() => handleFilter('Out of Stock')}
                >
                  Out of Stock
                </button>
              </div>
            </div>

            <div className="products-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onEdit={handleEditProduct}
                    onDelete={handleDeleteProduct}
                  />
                ))
              ) : (
                <div className="no-products">
                  <p>📭 No products found</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Products;