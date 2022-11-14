import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { MOBILE } from '../../constants';
import './Navbar.css';
import Button from '../Common/Button';

function NavbarMobile({ navElements }) {
  const [menu, setMenu] = useState(false);

  if (menu) {
    return (
      <div className="navbar-container-mobile">
        <Button type="icon" size="large" color="secondary" onClick={() => setMenu(false)}>
          <ArrowDropUpIcon />
        </Button>
        {navElements}
      </div>
    );
  }
  return (
    <div className="navbar-container-mobile">
      <Button type="icon" size="large" color="secondary" onClick={() => setMenu(true)}>
        <ArrowDropDownIcon />
      </Button>
    </div>
  );
}

function NavbarWeb({ navElements }) {
  return (
    <div className="navbar-container-web">
      {navElements}
    </div>
  );
}

function Navbar({ pages }) {
  const navElements = pages.map((page) => <Link className="navbar-link" key={page.link} to={page.link}>{page.text}</Link>);

  if (MOBILE) { return (<NavbarMobile navElements={navElements} />); }
  return (<NavbarWeb navElements={navElements} />);
}

export default Navbar;

NavbarMobile.propTypes = {
  navElements: PropTypes.instanceOf(Array).isRequired,
};

NavbarWeb.propTypes = {
  navElements: PropTypes.instanceOf(Array).isRequired,
};

Navbar.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
};
