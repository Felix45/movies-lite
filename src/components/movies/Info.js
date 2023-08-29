import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const Info = ({ show }) => {
  const {
    title, overview, media_type: mediaType,
    category, id, original_title: originalTitle, name,
    vote_count: voteCount, vote_average: voteAverage,
    genre_ids: genreIds,
  } = show;

  const { genre } = useSelector((state) => state.genre);

  return (
    <div className="flex flex-col hidden hv-info bg-movie-black ml-[2px] p-5 px-4 rounded-md absolute w-[300px] z-20 left-full top-1/4">
      <div className="flex flex-row justify-between">
        <h3 className="text-white text-xl font-extralight">{title || originalTitle || name}</h3>
      </div>
      <div className="flex my-2 font-normal items-baseline pb-4 mb-4">
        <span className="bg-movie-green text-white px-2 rounded text-sm">HD</span>
        <span className="text-sm text-movie-green">
          <FontAwesomeIcon icon={solid('star')} className="mx-2 text-movie-green" size="sm" />
          {voteAverage}
        </span>
      </div>
      <div className="text-sm">
        Country:
        United States
      </div>
      <div className="text-sm mb-1">
        {`Scores: ${voteAverage} by ${voteCount} reviews`}
      </div>
      <div className="flex flex-row flex-wrap text-sm mb-2">
        Genre:
        {genreIds.map((id) => (
          <span key={uuidv4()} className="ml-1 text-movie-green underline">
            {genre[id]}
            ,
          </span>
        ))}
      </div>
      <p className="mb-5 text-sm text-left">
        {overview.slice(0, 100)}
        ...
      </p>
      <div className="my-2 w-full">
        <NavLink
          to={`/watch/${mediaType || category}/${id}`}
          className="flex flex-row block p-2 bg-movie-green text-black justify-center font-semibold rounded-lg w-full"
        >
          <FontAwesomeIcon icon={solid('play')} size="xs" className="p-1 text-black mr-1" />
          Watch Now
        </NavLink>
      </div>
    </div>
  );
};

Info.propTypes = {
  show: PropTypes.instanceOf(Object).isRequired,
};

export default Info;
