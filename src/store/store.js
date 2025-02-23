import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../pages/ReduxExample/tasksSlice';
import usersReducer from '../pages/ReduxThunkExample/usersSlice';
import { apiSlice } from './../pages/RTKQueryExample/apiSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    users: usersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
