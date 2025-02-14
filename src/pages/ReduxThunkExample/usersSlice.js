import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  console.log(response.data);
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: { loading: false, users: [], error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectUsers = (state) => state.users;

export default usersSlice.reducer;
