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
import Header from '../Header/Header';

// URL constants
import {
  PAGES,
  PROJECTS_URL,
  PROJECT_ID_URL,
  CONTACT_URL,
} from '../../constants';

function Routes() {
  const [link, setLink] = useState({
    footerText: undefined,
    headerText: undefined,
    footerLink: undefined,
    headerLink: undefined,
  });

  const location = useLocation();

  useEffect(() => {
    let set = false;
    PAGES.forEach((page) => {
      let path = location.pathname;
      if (path.length > 1 && path[path.length - 1] === '/') { path = path.slice(0, path.length - 1); }
      if (set) { return; }
      if (!page.link.match(path)) { return; }
      set = true;
      setLink({
        footerText: page.footerText,
        headerText: page.headerText,
        footerLink: page.footerLink,
        headerLink: page.headerLink,
      });
    });
  }, [location]);

  return (
    <>
      <Header text={link.headerText} link={link.headerLink} />
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path={PROJECTS_URL} element={<Projects />} />
        <Route path={PROJECT_ID_URL} element={<Projects />} />
        <Route path={CONTACT_URL} element={<Contact />} />
      </Switch>
      <Footer text={link.footerText} link={link.footerLink} />
    </>
  );
}

export default Routes;
