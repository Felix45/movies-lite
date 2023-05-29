import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-tailwindcss-select';
import { useDispatch } from 'react-redux';
import { fetchEpisodeShowThunk } from '../../redux/slices/watchSlice';

const SeriesDropDown = ({ seasons, url }) => {
  const [choice, setChoice] = useState(null);
  const dispatch = useDispatch();

  const { type: category, id } = url;
  const options = seasons.map((season) => ({ value: season.season_number, label: season.name }));

  const handleChange = (choice) => {
    const { value: seasonId } = choice;
    dispatch(fetchEpisodeShowThunk({ id, category, seasonId }));
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
  url: PropTypes.instanceOf(Object).isRequired,
  seasons: PropTypes.instanceOf(Array).isRequired,
};

export default SeriesDropDown;
