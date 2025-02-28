import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from './usersSagaSlice.js';

// Function to call the API
const fetchUsersApi = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
};

function* fetchUsersSaga() {
  try {
    const users = yield call(fetchUsersApi);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* watchFetchUsers() {
  yield takeLatest(fetchUsersRequest.type, fetchUsersSaga);
}

export default watchFetchUsers;
