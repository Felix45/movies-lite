import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movies, API_KEY } from '../../http/http';

const initialState = {
  isLoading: false,
  isFaild: false,
  featured: {},
};

export const featuredMoviesThunk = createAsyncThunk(
  'movies/featured',
  async () => {
    const { data } = await movies.get(`trending/all/day?api_key=${API_KEY}`);
    return data;
  },
);

const featuredSlice = createSlice({
  name: 'featured',
  initialState,
  reducers: {

  },
  extraReducers: {
    [featuredMoviesThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.featured = action.payload;
    },
    [featuredMoviesThunk.pending]: (state) => { state.isLoading = true; },
    [featuredMoviesThunk.rejected]: (state) => { state.isFaild = true; },
  },
});

export default featuredSlice.reducer;
