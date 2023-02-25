import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Movie from './Movie';

const MovieList = ({ shows }) => (
  <ul className="grid mt-8 grid-cols-2 gap-4 mx-4 sm:grid-cols-5 md:grid-cols-10 md:mx-0">
    {
      shows.map((show) => <Movie key={uuidv4()} show={show} />)
    }
  </ul>
);

MovieList.propTypes = {
  shows: PropTypes.instanceOf(Array).isRequired,
};

export default MovieList;
