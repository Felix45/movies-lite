import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import { IMG_URL } from '../../http/http';

const Movie = ({ show, category }) => {
  const releaseDate = show.release_date ? show.release_date.replace(/-/g, '/') : '2022/02/10';

  return (
    <li className="mb-5">
      <div className="relative play-button">
        <NavLink to={`/watch/${show.media_type || category}/${show.id}`}>
          <img src={`${IMG_URL}${show.poster_path}`} alt="" className="rounded" />
        </NavLink>
        <NavLink to={`/watch/${show.media_type || category}/${show.id}`}>
          <div className="hidden flex absolute bg-gradient-to-t from-movie-green to-transparent justify-center opacity-100 items-center left-0 right-0 top-0 bottom-0">
            <span className="flex items-center justify-center rounded-full bg-bg-black z-50 h-10 w-10 text-center">
              <FontAwesomeIcon icon={solid('play')} className="text-movie-green" />
            </span>
          </div>
        </NavLink>
      </div>
      <div className="text-white text-xs h-10 mt-3 mb-4">{(show.title || show.original_title || show.name).slice(0, 30)}</div>
      <div className="flex flex-row items-center justify-between">
        <span className="text-movie-gray text-xs">{(new Date(releaseDate)).getFullYear()}</span>
        <span className="border border-gray-300 rounded p-1 text-movie-gray text-xs">{show.media_type || category}</span>
      </div>
    </li>
  );
};

Movie.propTypes = {
  show: PropTypes.instanceOf(Object).isRequired,
  category: PropTypes.string.isRequired,
};

export default Movie;
