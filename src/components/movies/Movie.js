import React from 'react';
import PropTypes from 'prop-types';
import { IMG_URL } from '../../http/http';

const Movie = ({ show }) => {
  const releaseDate = show.release_date ? show.release_date.replace(/-/g, '/') : '2022/02/10';

  return (
    <li className="flex flex-col mb-5">
      <img src={`${IMG_URL}${show.poster_path}`} alt="" />
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
