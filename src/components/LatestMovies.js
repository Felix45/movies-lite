import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieList from './movies/MoviesList';
import { latestMoviesThunk } from '../redux/slices/latestMovieSlice';

const LatestMovies = () => {
  const dispatch = useDispatch();
  const { latestmovies } = useSelector((state) => state.latestmovies);

  useEffect(() => {
    const timer = setInterval(
      () => {
        dispatch(latestMoviesThunk());
      }, 120000,
    );

    return () => clearInterval(timer);
  }, []);

  const { results } = latestmovies;

  return (
    <section className="container mt-5 md:mt-10 mx-auto text-slate-400">
      <div className="flex flex-col md:flex-row">
        <h2 className="ml-4 md:ml-0 font-extralight text-3xl">Latest Movies</h2>
      </div>
      <MovieList shows={results} category="movie" />
    </section>
  );
};

export default LatestMovies;
