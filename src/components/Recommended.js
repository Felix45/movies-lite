import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import { useSelector, useDispatch } from 'react-redux';
import MovieList from './movies/MoviesList';
import { popularMoviesThunk } from '../redux/slices/movieSlice';

const RecommendedShows = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState({ category: 'movie', period: 'week' });
  const { popular } = useSelector((state) => state.popular);

  useEffect(() => {
    const timer = setInterval(
      () => {
        dispatch(popularMoviesThunk(category));
      }, 1000,
    );

    return () => clearInterval(timer);
  }, [category]);

  const { results } = popular;

  return (
    <section className="container mt-5 md:mt-10 mx-auto text-slate-400">
      <div className="flex flex-col md:flex-row">
        <h2 className="ml-4 md:ml-0 font-extralight text-3xl">Recommended</h2>
        <div className="m-3 md:m-0">
          <button type="button" onClick={() => { setCategory({ category: 'movie', period: 'week' }); }} className="rounded text-xs hover:text-white bg-movie-black focus:bg-movie-green focus:text-white p-2 ml-2">
            <FontAwesomeIcon className="mr-1" icon={solid('play-circle')} />
            Movies
          </button>
          <button type="button" onClick={() => { setCategory({ category: 'tv', period: 'week' }); }} className="rounded text-xs bg-movie-black hover:text-white focus:bg-movie-green focus:text-white p-2 ml-2">
            <FontAwesomeIcon className="mr-1" icon={solid('list-ul')} />
            TV Shows
          </button>
          <button type="button" onClick={() => { setCategory({ category: 'all', period: 'day' }); }} className="rounded text-xs bg-movie-black hover:text-white focus:bg-movie-green focus:text-white p-2 ml-2">
            <FontAwesomeIcon className="mr-1" icon={solid('chart-line')} />
            Trending
          </button>
        </div>
      </div>
      <MovieList shows={results} category={category.category} cols="10" />
    </section>
  );
};

export default RecommendedShows;
