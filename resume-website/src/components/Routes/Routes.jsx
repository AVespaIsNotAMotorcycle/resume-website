import React, { useState, useEffect } from 'react';
import {
  Routes as Switch,
  Route,
  useLocation,
} from 'react-router-dom';

// High-level components
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

// URL constants
import {
  PAGES,
  PROJECTS_URL,
  PROJECT_ID_URL,
  CONTACT_URL,
} from '../../constants';

function Routes() {
  const [link, setLink] = useState({ text: '', footerLink: '' });

  const location = useLocation();

  useEffect(() => {
    PAGES.forEach((page) => {
      if (page.link !== location.pathname) { return; }
      setLink({
        text: page.text,
        footerLink: page.footerLink,
      });
    });
  }, [location]);

  return (
    <>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path={PROJECTS_URL} element={<Projects />} />
        <Route path={PROJECT_ID_URL} element={<Projects />} />
        <Route path={CONTACT_URL} element={<Contact />} />
      </Switch>
      <Footer text={link.text} link={link.footerLink} />
    </>
  );
}

export default Routes;
