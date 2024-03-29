import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import { useSelector, useDispatch } from 'react-redux';
import MovieList from './movies/MoviesList';
import { popularMoviesThunk } from '../redux/slices/movieSlice';
import PlayButton from './utilities/PlayButton';

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
    <section className="container-fluid px-0 md:px-10 mt-5 md:mt-10 mx-auto text-slate-400">
      <div className="flex flex-col pl-1 md:pl-5 md:flex-row">
        <div className="flex flex-row pl-2 md:pl-0">
          <PlayButton />
          <h2 className="ml-0 md:ml-0 font-bold text-white text-3xl">Recommended</h2>
        </div>
        <div className="m-3 ml-0 md:m-0">
          <button type="button" onClick={() => { setCategory({ category: 'movie', period: 'week' }); }} className={`rounded text-xs hover:text-white ${category.category === 'movie' ? 'bg-movie-green text-white' : 'bg-movie-black'} p-2 ml-2`}>
            <FontAwesomeIcon className="mr-1" icon={solid('play-circle')} />
            Movies
          </button>
          <button type="button" onClick={() => { setCategory({ category: 'tv', period: 'week' }); }} className={`rounded text-xs hover:text-white ${category.category === 'tv' ? 'bg-movie-green text-white' : 'bg-movie-black'} p-2 ml-2`}>
            <FontAwesomeIcon className="mr-1" icon={solid('list-ul')} />
            TV Shows
          </button>
        </div>
      </div>
      <MovieList shows={results.slice(0, 14)} category={category.category} cols="10" />
    </section>
  );
};

export default RecommendedShows;
