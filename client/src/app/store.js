import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import poseReducer from '../features/pose/poseSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    pose: poseReducer,
  },
});
