import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movies, API_KEY } from '../../http/http';

const initialState = {
  isLoading: false,
  isFaild: false,
  genre: {},
};

export const fetchGenreThunk = createAsyncThunk(
  'movies/genre',
  async () => {
    const { data } = await movies.get(`genre/movie/list?api_key=${API_KEY}`);
    const genres = {};
    data.genres.forEach((genre) => {
      genres[genre.id] = genre.name;
    });
    return genres;
  },
);

const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchGenreThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.genre = action.payload;
    },
    [fetchGenreThunk.pending]: (state) => { state.isLoading = true; },
    [fetchGenreThunk.rejected]: (state) => { state.isFaild = true; },
  },
});

export default genreSlice.reducer;
