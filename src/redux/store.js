import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist';
import authSlice from './slices/authSlice';
import registerSlice from './slices/registerSlice';
import featuredSlice from './slices/featuredSlice';
import genreSlice from './slices/genreSlice';
import popularSlice from './slices/movieSlice';
import latestMovieSlice from './slices/latestMovieSlice';
import latestSeriesSlice from './slices/latestSeriesSlice';
import watchSlice from './slices/watchSlice';
import trendingSlice from './slices/trendingSlice';
import recentShowsSlice from './slices/recentShowsSlice';

const persistConfig = { key: 'database', storage };
const reducers = combineReducers({
  user: authSlice,
  genre: genreSlice,
  signup: registerSlice,
  featured: featuredSlice,
  popular: popularSlice,
  trending: trendingSlice,
  watch: watchSlice,
  latestmovies: latestMovieSlice,
  recentseries: recentShowsSlice,
  latestseries: latestSeriesSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
