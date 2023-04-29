import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Movie from './Movie';

const MovieList = ({ shows, category, cols }) => (
  <ul className={`grid mt-8 grid-cols-2 gap-4 mx-4 md:grid-cols-${cols} md:mx-4`}>
    {
      shows.map((show) => show.poster_path
      && <Movie key={uuidv4()} show={show} category={category} />)
    }
  </ul>
);

MovieList.propTypes = {
  cols: PropTypes.string.isRequired,
  shows: PropTypes.instanceOf(Array).isRequired,
  category: PropTypes.string.isRequired,
};

export default MovieList;
