import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import { IMG_URL } from '../../http/http';

const Movie = ({ show }) => {
  const releaseDate = show.release_date ? show.release_date.replace(/-/g, '/') : '2022/02/10';

  return (
    <li className="mb-5">
      <div className="relative play-button">
        <img src={`${IMG_URL}${show.poster_path}`} alt="" className="rounded" />
        <div className="hidden flex absolute bg-movie-black justify-center opacity-70 items-center left-0 right-0 top-0 bottom-0">
          <span className="flex items-center justify-center rounded-full bg-movie-green opacity-100 z-50 h-10 w-10 text-center">
            <FontAwesomeIcon icon={solid('play')} className="text-white" />
          </span>
        </div>
      </div>
      <div className="text-white text-xs h-10 mt-3">{show.title || show.original_title || show.name }</div>
      <div className="flex flex-row items-center justify-between">
        <span className="text-movie-gray text-xs">{(new Date(releaseDate)).getFullYear()}</span>
        <span className="border border-gray-300 rounded p-1 text-movie-gray text-xs">{show.media_type}</span>
      </div>
    </li>
  );
};

Movie.propTypes = {
  show: PropTypes.instanceOf(Object).isRequired,
};

export default Movie;
