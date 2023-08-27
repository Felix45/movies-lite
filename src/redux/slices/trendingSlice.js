import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movies, API_KEY } from '../../http/http';

const initialState = {
  isLoading: false,
  isFaild: false,
  trending: [],
};

export const trendingShowsThunk = createAsyncThunk(
  'trending/all',
  async ({ period }) => {
    const { data } = await movies.get(`/trending/all/${period}?api_key=${API_KEY}&language=en-US&region=US&page=1`);
    return data;
  },
);

const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {

  },
  extraReducers: {
    [trendingShowsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.trending = action.payload;
    },
    [trendingShowsThunk.pending]: (state) => { state.isLoading = true; },
    [trendingShowsThunk.rejected]: (state) => { state.isFaild = true; },
  },
});

export default trendingSlice.reducer;
