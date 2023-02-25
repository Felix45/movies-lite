import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movies, API_KEY } from '../../http/http';

const initialState = {
  isLoading: false,
  isFaild: false,
  latestmovies: { results: [] },
};

export const latestMoviesThunk = createAsyncThunk(
  'movies/latest',
  async () => {
    const { data } = await movies.get(`/movie/now_playing?api_key=${API_KEY}&language=en-US&page=2`);
    return data;
  },
);

const latestMovieSlice = createSlice({
  name: 'latestmovies',
  initialState,
  reducers: {

  },
  extraReducers: {
    [latestMoviesThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.latestmovies = action.payload;
    },
    [latestMoviesThunk.pending]: (state) => { state.isLoading = true; },
    [latestMoviesThunk.rejected]: (state) => { state.isFaild = true; },
  },
});

export default latestMovieSlice.reducer;
