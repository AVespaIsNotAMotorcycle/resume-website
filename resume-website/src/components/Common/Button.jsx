import React from 'react';
import PropTypes from 'prop-types';
import MUIButton from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

/* eslint-disable react/jsx-props-no-spreading */
function Button(props) {
  const { type, children } = props;
  switch (type) {
    case 'icon':
      return (<IconButton {...props}>{children}</IconButton>);
    default:
      return (<MUIButton {...props}>{children}</MUIButton>);
  }
}

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  props: PropTypes.instanceOf(Object),
  children: PropTypes.instanceOf(Array),
};

Button.defaultProps = {
  type: '',
  props: {},
  children: [],
};
