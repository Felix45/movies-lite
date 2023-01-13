import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const List = (props) => {
  const { items } = props;
  return (
    <ul className="mr-8 mt-4 md:mr-20">
      {items.map((item) => <li className="text-sm" key={uuidv4()}>{item}</li>)}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default List;
