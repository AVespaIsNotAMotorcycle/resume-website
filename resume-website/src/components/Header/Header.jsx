import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ text, link }) {
  if (!text || !link) { return null; }
  return (
    <div className="header">
      <Link to={link} className="header-text">
        <SvgIcon fontSize="large">
          <ExpandLessIcon />
        </SvgIcon>
        <h1 className="header-text">{text}</h1>
      </Link>
    </div>
  );
}

export default Header;

Header.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

Header.defaultProps = {
  text: undefined,
  link: undefined,
};
