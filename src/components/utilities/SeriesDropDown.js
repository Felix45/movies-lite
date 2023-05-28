import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-tailwindcss-select';

const SeriesDropDown = ({ seasons }) => {
  const [choice, setChoice] = useState(null);

  const options = seasons.map((season) => ({ value: season.id, label: season.name }));

  const handleChange = (choice) => {
    setChoice(choice);
  };

  return (
    <Select
      className="bg-blue-100 text-white"
      isSearchable
      value={choice}
      options={options}
      onChange={handleChange}
    />
  );
};

SeriesDropDown.propTypes = {
  seasons: PropTypes.instanceOf(Array).isRequired,
};

export default SeriesDropDown;
