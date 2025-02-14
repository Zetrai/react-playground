import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../pages/ReduxExample/tasksSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
