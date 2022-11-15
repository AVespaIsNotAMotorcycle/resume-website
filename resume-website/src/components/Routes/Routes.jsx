import React from 'react';
import {
  Routes as Switch,
  Route,
} from 'react-router-dom';

// High-level components
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

// URL constants
import {
  PROJECTS_URL,
  PROJECT_ID_URL,
  CONTACT_URL,
} from '../../constants';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={<Home />} />
      <Route path={PROJECTS_URL} element={<Projects />} />
      <Route path={PROJECT_ID_URL} element={<Projects />} />
      <Route path={CONTACT_URL} element={<Contact />} />
    </Switch>
  );
}

export default Routes;
