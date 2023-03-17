import React from 'react';
import PropTypes from 'prop-types';

import './Tag.css';

function Tag({
  active,
  setActive,
  text,
}) {
  const className = (active ? 'tag-active' : 'tag-inactive');
  return (
    <button
      className={`tag ${className}`}
      type="button"
      onClick={setActive}
    >
      {text}
    </button>
  );
}

export default Tag;

Tag.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
  text: PropTypes.string.isRequired,
};

Tag.defaultProps = {
  active: true,
  setActive: () => {},
};
