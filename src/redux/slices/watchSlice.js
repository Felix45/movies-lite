import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movies, API_KEY } from '../../http/http';

const initialState = {
  isLoading: false,
  isFaild: false,
  watch: {},
};

export const watchShowThunk = createAsyncThunk(
  'watch/show',
  async ({ category, id }) => {
    const { data } = await movies.get(`/${category}/${id}?api_key=${API_KEY}&language=en-US`);
    return data;
  },
);

const watchSlice = createSlice({
  name: 'watch',
  initialState,
  reducers: {

  },
  extraReducers: {
    [watchShowThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.watch = action.payload;
    },
    [watchShowThunk.pending]: (state) => { state.isLoading = true; },
    [watchShowThunk.rejected]: (state) => { state.isFaild = true; },
  },
});

export default watchSlice.reducer;
