import React from 'react';
import {
  Routes as Switch,
  Route,
  Navigate,
} from 'react-router-dom';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import {
  HOME_URL,
  PROJECTS_URL,
  CONTACT_URL,
} from '../../constants.js';

function Routes() {
  return (
    <Switch>
      <Route path='/' element={ <Navigate to={HOME_URL} /> } />
      <Route path={HOME_URL} element={<h1>Home</h1>} />
      <Route path={PROJECTS_URL} element={<ProjectsPage />} />
      <Route path={CONTACT_URL} element={<ProjectsPage />} />
    </Switch>
  );
}

export default Routes;
