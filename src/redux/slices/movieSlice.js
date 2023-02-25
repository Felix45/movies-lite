import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movies, API_KEY } from '../../http/http';

const initialState = {
  isLoading: false,
  isFaild: false,
  popular: { results: [] },
};

export const popularMoviesThunk = createAsyncThunk(
  'movies/all',
  async ({ category, period }) => {
    const { data } = await movies.get(`/trending/${category}/${period}?api_key=${API_KEY}&language=en-US&region=US&page=1`);
    return data;
  },
);

const popularSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {

  },
  extraReducers: {
    [popularMoviesThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.popular = action.payload;
    },
    [popularMoviesThunk.pending]: (state) => { state.isLoading = true; },
    [popularMoviesThunk.rejected]: (state) => { state.isFaild = true; },
  },
});

export default popularSlice.reducer;
