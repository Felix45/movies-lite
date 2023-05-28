import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';

const MovieHeader = () => (
  <div className="flex justify-center mx-3 text-white bg-black py-4 rounded-md md:mx-0">
    <h2>
      <FontAwesomeIcon icon={solid('play')} className="text-movie-green mr-2" />
      {' '}
      <strong>Movie Files</strong>
    </h2>
  </div>
);

export default MovieHeader;
