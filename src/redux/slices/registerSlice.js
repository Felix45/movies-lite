import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../http/http';

const initialState = {
  isLoading: false,
  isFaild: false,
  register: {},
};

export const userSignUpThunk = createAsyncThunk(
  'users/signUp',
  async (user) => {
    const { data } = await http.post('/users', user);
    return data;
  },
);

const registerSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  },
  extraReducers: {
    [userSignUpThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [userSignUpThunk.pending]: (state) => { state.isLoading = true; },
    [userSignUpThunk.rejected]: (state) => { state.isFaild = true; },
  },
});

export default registerSlice.reducer;
