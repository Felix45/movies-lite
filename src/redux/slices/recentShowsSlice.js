import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movies, API_KEY } from '../../http/http';

const initialState = {
  isLoading: false,
  isFaild: false,
  recentseries: { results: [] },
};

export const recentSeriesThunk = createAsyncThunk(
  'allshows/recent',
  async () => {
    const { data } = await movies.get(`/trending/all/week?api_key=${API_KEY}&language=en-US&region=US&page=2`);
    return data;
  },
);

const recentSeriesSlice = createSlice({
  name: 'recentseries',
  initialState,
  reducers: {

  },
  extraReducers: {
    [recentSeriesThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.recentseries = action.payload;
    },
    [recentSeriesThunk.pending]: (state) => { state.isLoading = true; },
    [recentSeriesThunk.rejected]: (state) => { state.isFaild = true; },
  },
});

export default recentSeriesSlice.reducer;
