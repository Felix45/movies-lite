import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Movie from './Movie';

const MovieList = ({ shows }) => (
  <ul className="mt-5 columns-2 gap-4 md:columns-10">
    {
      shows.map((show) => <Movie key={uuidv4()} show={show} />)
    }
  </ul>
);

MovieList.propTypes = {
  shows: PropTypes.instanceOf(Array).isRequired,
};

export default MovieList;
