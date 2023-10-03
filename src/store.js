import { configureStore } from '@reduxjs/toolkit';
import userReducer from './featrues/user/userSlice.js';
import cartReducer from './featrues/cart/cartSlice.js';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
