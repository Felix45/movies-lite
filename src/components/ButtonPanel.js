import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';

const ButtonPanel = ({ type }) => (
  <ul className="flex flex-row flex-wrap m-0 mt-3">
    <li>
      <button type="button" className="px-5 rounded text-xs hover:text-white bg-movie-black focus:text-white p-2">
        <FontAwesomeIcon className="mr-1" icon={solid('folder')} />
        Genre All
      </button>
    </li>
    <li>
      <button type="button" className="px-5 rounded text-xs bg-movie-black hover:text-white focus:text-white p-2 ml-2">
        <FontAwesomeIcon className="mr-1" icon={solid('copy')} />
        Type
        {' '}
        {type}
      </button>
    </li>
    <li>
      <button type="button" className="px-5 rounded text-xs bg-movie-black hover:text-white focus:text-white p-2 ml-2">
        <FontAwesomeIcon className="mr-1" icon={solid('globe')} />
        Country All
      </button>
    </li>
    <li>
      <button type="button" className="px-5 rounded text-xs bg-movie-black hover:text-white focus:text-white p-2 ml-2">
        <FontAwesomeIcon className="mr-1" icon={solid('calendar')} />
        Year All
      </button>
    </li>
    <li>
      <button type="button" className="px-5 rounded text-xs bg-movie-black hover:text-white focus:text-white p-2 ml-2">
        <FontAwesomeIcon className="mr-1" icon={solid('cube')} />
        Quality All
      </button>
    </li>
    <li>
      <button type="button" className="px-5 rounded text-xs bg-movie-black hover:text-white focus:text-white p-2 ml-2">
        <FontAwesomeIcon className="mr-1" icon={solid('sort')} />
        Sort Default
      </button>
    </li>
    <li>
      <button type="button" className="px-5 rounded text-xs bg-movie-green text-black focus:text-white p-2 ml-2">
        <FontAwesomeIcon className="mr-1" icon={solid('filter')} />
        Filter
      </button>
    </li>
  </ul>
);

ButtonPanel.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ButtonPanel;
