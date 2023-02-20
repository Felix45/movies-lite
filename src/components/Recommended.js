import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import { useSelector } from 'react-redux';
import MovieList from './movies/MoviesList';

const RecommendedShows = () => {
  const [category, setCategory] = useState('movie');
  const { featured } = useSelector((state) => state.featured);

  const shows = featured.results.filter((show) => show.media_type === category);

  return (
    <section className="container mt-20 mx-auto text-slate-400">
      <div className="flex flex-col md:flex-row">
        <h2 className="ml-4 md:ml-0 font-extralight text-3xl">Recommended</h2>
        <div className="m-3 md:m-0">
          <button type="button" onClick={() => { setCategory('movie'); }} className="rounded text-xs text-white bg-movie-green p-2 ml-2">
            <FontAwesomeIcon icon={solid('play-circle')} />
            Movies
          </button>
          <button type="button" onClick={() => { setCategory('tv'); }} className="rounded text-xs bg-movie-black hover:text-white hover:bg-movie-green p-2 ml-2">
            <FontAwesomeIcon icon={solid('list-ul')} />
            TV Shows
          </button>
        </div>
      </div>
      <MovieList shows={shows} />
    </section>
  );
};

export default RecommendedShows;
