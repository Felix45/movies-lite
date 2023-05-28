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
    const { data } = await movies.get(`/${category}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=season/1`);
    category === 'tv' ? data.episodes = { episodes: data['season/1'].episodes } : data.episodes = { episodes: [] };

    return data;
  },
);

export const recommendedShowThunk = createAsyncThunk(
  'watch/recommended',
  async ({ id, category }) => {
    const { data } = await movies.get(`/${category}/${id}/recommendations?api_key=${API_KEY}&language=en-US`);
    return data;
  },
);

export const fetchEpisodeShowThunk = createAsyncThunk(
  'watch/fetchEpisodeThunk',
  async ({ id, category, seasonId }) => {
    const { data } = await movies.get(`/${category}/${id}/season/${seasonId}?api_key=${API_KEY}&language=en-US`);
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
    [recommendedShowThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.watch = { ...state.watch, recommended: action.payload };
    },
    [fetchEpisodeShowThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.watch = { ...state.watch, episodes: action.payload };
    },
    [fetchEpisodeShowThunk.pending]: (state) => { state.isLoading = true; },
    [fetchEpisodeShowThunk.rejected]: (state) => { state.isFaild = true; },
    [recommendedShowThunk.pending]: (state) => { state.isLoading = true; },
    [recommendedShowThunk.rejected]: (state) => { state.isFaild = true; },
    [watchShowThunk.pending]: (state) => { state.isLoading = true; },
    [watchShowThunk.rejected]: (state) => { state.isFaild = true; },
  },
});

export default watchSlice.reducer;
