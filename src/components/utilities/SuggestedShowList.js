import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import { IMG_URL } from '../../http/http';

const SuggestedShowList = ({ shows, rank }) => (
  <ul className="mt-5">
    { shows.map((show, index) => (
      show.poster_path && (
      <NavLink to={`/watch/${show.media_type}/${show.id}`} key={uuidv4()}>
        <li className="flex flex-row mb-3 relative trend-list text-movie-gray bg-movie-black rounded-l-lg hover:bg-movie-green !hover:text-movie-black">
          { rank && <span className="rank absolute top-4 -left-3 text-movie-green font-bold w-[30px] py-1 h-[30px] border-2 border-movie-green text-sm text-center rounded-full bg-black">{ index + 1 }</span> }
          <span>
            <img src={`${IMG_URL}${show.poster_path}`} alt="" className="object-scale-down h-16 rounded-l-lg mr-2" />
          </span>
          <div className="flex flex-col text-sm pt-3 hover:text-movie-black">
            <span className="text-xs">{`${show.media_type.slice(0, 1).toUpperCase()}${show.media_type.slice(1)} / ${new Date(show.first_air_date).getFullYear() || 2023}`}</span>
            <span className="text-white font-bold">{show.title || show.original_title || show.name }</span>
          </div>
        </li>
      </NavLink>
      )
    ))}
  </ul>
);

SuggestedShowList.propTypes = {
  rank: PropTypes.bool.isRequired,
  shows: PropTypes.instanceOf(Array).isRequired,
};

export default SuggestedShowList;
