import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const EpisodePallete = ({ data, title }) => (
  <ul className="mt-4 px-4 md:flex md: flex-col md:h-64 overflow-scroll striped-list">
    {
        data.map((episode, index) => (
          <li key={uuidv4()} className="p-1 py-2 text-xs cursor-pointer">
            {`${title} ${index + 1}: `}
            {' '}
            {`${episode.name.slice(0, 1).toUpperCase()}${episode.name.slice(1)}`}
          </li>
        ))
      }
  </ul>
);

EpisodePallete.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  title: PropTypes.string.isRequired,
};

export default EpisodePallete;
