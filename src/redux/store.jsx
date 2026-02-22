import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice.jsx'; // Make sure this file exists in the same folder

export const store = configureStore({
  reducer: {
    profile: profileReducer, // The slice reducer
  },
});

export default store;
