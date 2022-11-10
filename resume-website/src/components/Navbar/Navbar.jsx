import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ pages }) {
  const navElements = pages.map((page) => <Link className="navbar-link" key={page.link} to={page.link}>{page.text}</Link>);

  return (
    <div className="navbar-container">
      <nav className="navbar-nav">
        <ul>
          {navElements}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

Navbar.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
};
