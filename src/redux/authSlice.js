import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: localStorage.getItem('auth') === 'true',
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  rememberMe: localStorage.getItem('rememberMe') === 'true'
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.rememberMe = action.payload.rememberMe || false;
      
      localStorage.setItem('auth', 'true');
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      if (action.payload.rememberMe) {
        localStorage.setItem('rememberMe', 'true');
        localStorage.setItem('email', action.payload.email);
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.rememberMe = false;
      
      localStorage.removeItem('auth');
      localStorage.removeItem('user');
      localStorage.removeItem('rememberMe');
      localStorage.removeItem('email');
    },
    setRememberMe: (state, action) => {
      state.rememberMe = action.payload;
    }
  }
});

export const { login, logout, setRememberMe } = authSlice.actions;
export default authSlice.reducer;
