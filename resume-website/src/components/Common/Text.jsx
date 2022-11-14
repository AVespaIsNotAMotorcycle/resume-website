import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';

function Text({
  children, variant, sx, key,
}) {
  return (
    <Typography variant={variant} sx={sx} key={key}>
      {children}
    </Typography>
  );
}

Text.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  sx: PropTypes.instanceOf(Object),
  key: PropTypes.string,
};

Text.defaultProps = {
  children: [],
  variant: '',
  sx: {},
  key: '',
};

export default Text;
