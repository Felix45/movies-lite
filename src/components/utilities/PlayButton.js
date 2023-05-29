import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';

const PlayButton = () => (
  <div className="flex flex-col justify-center items-center bg-movie-green p-1 rounded mr-2">
    <FontAwesomeIcon icon={solid('play')} size="xs" className="p-1 text-white" />
  </div>
);

export default PlayButton;
