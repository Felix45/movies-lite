import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../http/http';

const initialState = {
  isLoading: false,
  isFaild: false,
  user: {},
};

export const userSignInThunk = createAsyncThunk(
  'users/signIn',
  async (user) => {
    const { data } = await http.post('/users', user);
    return data;
  },
);

const authSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    logout(state) {
      return {
        ...state,
        user: {
          id: '', exp: '', email: '', isLoggedIn: false, token: '', username: '',
        },
      };
    },
  },
  extraReducers: {
    [userSignInThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [userSignInThunk.pending]: (state) => { state.isLoading = true; },
    [userSignInThunk.rejected]: (state) => { state.isFaild = true; },
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
