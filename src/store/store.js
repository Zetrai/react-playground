import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../pages/ReduxExample/tasksSlice';
import usersReducer from '../pages/ReduxThunkExample/usersSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    users: usersReducer,
  },
});

export default store;
