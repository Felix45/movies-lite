import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movies, API_KEY } from '../../http/http';

const initialState = {
  isLoading: false,
  isFaild: false,
  latestseries: { results: [] },
};

export const latestSeriesThunk = createAsyncThunk(
  'series/latest',
  async () => {
    const { data } = await movies.get(`/tv/top_rated?api_key=${API_KEY}&language=en-US&region=USA&page=1`);
    return data;
  },
);

const latestSeriesSlice = createSlice({
  name: 'latestseries',
  initialState,
  reducers: {

  },
  extraReducers: {
    [latestSeriesThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.latestseries = action.payload;
    },
    [latestSeriesThunk.pending]: (state) => { state.isLoading = true; },
    [latestSeriesThunk.rejected]: (state) => { state.isFaild = true; },
  },
});

export default latestSeriesSlice.reducer;
