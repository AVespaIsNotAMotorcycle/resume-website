import React from 'react';
import {
  Routes as Switch,
  Route,
} from 'react-router-dom';
import ProjectsPage from '../ProjectsPage/ProjectsPage';

function Routes() {
  return (
    <Switch>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/Projects" element={<ProjectsPage />} />
    </Switch>
  );
}

export default Routes;
