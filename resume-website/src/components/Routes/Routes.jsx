import React from 'react';
import {
  Routes as Switch,
  Route,
  Navigate,
} from 'react-router-dom';

// High-level components
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

// URL constants
import {
  HOME_URL,
  PROJECTS_URL,
  CONTACT_URL,
} from '../../constants';

function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Navigate to={HOME_URL} />} />
      <Route path={HOME_URL} element={<Home />} />
      <Route path={PROJECTS_URL} element={<Projects />} />
      <Route path={CONTACT_URL} element={<Contact />} />
    </Switch>
  );
}

export default Routes;
