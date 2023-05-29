import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import { IMG_URL } from '../../http/http';

const SuggestedShowList = ({ shows }) => (
  <ul className="mt-5">
    { shows.map((show) => (
      show.poster_path && (
      <NavLink to={`/watch/${show.media_type}/${show.id}`}>
        <li className="flex flex-row mb-3 bg-movie-black rounded" key={uuidv4()}>

          <span>
            <img src={`${IMG_URL}${show.poster_path}`} alt="" className="object-scale-down h-16 rounded mr-2" />
          </span>
          <div className="flex flex-col text-xs pt-3">
            <span className="text-white">{`${show.media_type.slice(0, 1).toUpperCase()}${show.media_type.slice(1)} / ${new Date(show.first_air_date).getFullYear() || 2023}`}</span>
            <span className="text-white">{show.title || show.original_title || show.name }</span>
          </div>
        </li>
      </NavLink>
      )
    ))}
  </ul>
);

SuggestedShowList.propTypes = {
  shows: PropTypes.instanceOf(Array).isRequired,
};

export default SuggestedShowList;
