import { createSlice } from '@reduxjs/toolkit';
import { mockProducts } from '../data/mockData';

const initialState = {
  products: mockProducts,
  filteredProducts: mockProducts,
  searchTerm: '',
  filterStatus: 'all'
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    searchProducts: (state, action) => {
      state.searchTerm = action.payload;
      filterProducts(state);
    },
    filterByStatus: (state, action) => {
      state.filterStatus = action.payload;
      filterProducts(state);
    },
    addProduct: (state, action) => {
      const newProduct = {
        ...action.payload,
        id: Math.max(...state.products.map(p => p.id), 0) + 1
      };
      state.products.push(newProduct);
      filterProducts(state);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);
      filterProducts(state);
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
        filterProducts(state);
      }
    }
  }
});

function filterProducts(state) {
  let filtered = state.products;
  
  // Search filter
  if (state.searchTerm) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
  }
  
  // Status filter
  if (state.filterStatus !== 'all') {
    filtered = filtered.filter(p => p.status === state.filterStatus);
  }
  
  state.filteredProducts = filtered;
}

export const { searchProducts, filterByStatus, addProduct, deleteProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;
