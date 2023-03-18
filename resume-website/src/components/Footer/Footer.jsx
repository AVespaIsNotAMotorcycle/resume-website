import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer({ text, link }) {
  if (!text || !link) { return null; }
  return (
    <div className="footer">
      <Link to={link} className="footer-text">
        <h1 className="footer-text">{text}</h1>
        <SvgIcon fontSize="large">
          <ExpandMoreIcon />
        </SvgIcon>
      </Link>
    </div>
  );
}

export default Footer;

Footer.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

Footer.defaultProps = {
  text: undefined,
  link: undefined,
};
