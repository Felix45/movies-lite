import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';

const RecommendedShows = () => (
  <section className="flex flex-col md:flex-row container mt-20 mx-auto text-slate-400">
    <h2 className="ml-4 md:ml-0 font-extralight text-3xl">Recommended</h2>
    <div className="m-3 md:m-0">
      <button type="button" className="rounded text-xs text-white bg-movie-green p-2 ml-2">
        <FontAwesomeIcon icon={solid('play-circle')} />
        {' '}
        Movies
      </button>
      <button type="button" className="rounded text-xs bg-movie-black hover:text-white hover:bg-movie-green p-2 ml-2">
        <FontAwesomeIcon icon={solid('list-ul')} />
        {' '}
        TV Shows
      </button>
      <button type="button" className="rounded text-xs bg-movie-black hover:text-white hover:bg-movie-green p-2 ml-2">
        <FontAwesomeIcon icon={solid('line-chart')} />
        {' '}
        Trending
      </button>
    </div>
  </section>
);

export default RecommendedShows;
