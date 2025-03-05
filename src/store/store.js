import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import tasksReducer from '../pages/ReduxExample/tasksSlice';
import usersReducer from '../pages/ReduxThunkExample/usersSlice';
import { apiSlice } from '../pages/RTKQueryExample/apiSlice';
import usersSagaReducer from '../pages/ReduxSagaExample/usersSagaSlice';
import watchFetchUsers from '../pages/ReduxSagaExample/reduxSaga';
import loggerMiddleware from './../pages/ReduxThunkExample/loggerMiddleware';

const sagaMiddleware = createSagaMiddleware();

console.log(apiSlice);
console.log(apiSlice.reducerPath);

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    users: usersReducer,
    users2: usersSagaReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(loggerMiddleware)
      .concat(apiSlice.middleware)
      .concat(sagaMiddleware),
});

// Run saga
sagaMiddleware.run(watchFetchUsers);

export default store;
