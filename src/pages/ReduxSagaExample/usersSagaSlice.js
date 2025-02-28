import { createSlice } from '@reduxjs/toolkit';

const usersSagaSlice = createSlice({
  name: 'users2',
  initialState: {
    loading: false,
    users: [],
    error: null,
  },
  reducers: {
    fetchUsersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } =
  usersSagaSlice.actions;
export default usersSagaSlice.reducer;
