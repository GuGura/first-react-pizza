import { configureStore } from '@reduxjs/toolkit';
import userReducer from './featrues/user/userSlice.js';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;