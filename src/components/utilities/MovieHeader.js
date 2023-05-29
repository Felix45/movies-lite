import React from 'react';
import PlayButton from './PlayButton';

const MovieHeader = () => (
  <div className="flex justify-center mx-3 text-white bg-black py-4 rounded-md md:mx-0">
    <PlayButton />
    <h2>
      <strong>Movie Files</strong>
    </h2>
  </div>
);

export default MovieHeader;
