import React from 'react';
import { useParams } from 'react-router-dom';
import { PROJECTS_URL } from '../../constants';

import ProjectTile from './ProjectTile';
import ProjectDetails from './ProjectDetails';

import './Projects.css';

const PROJECT_LIST = {
  Groovy: {
    name: 'Groovy',
    id: 'Groovy',
    desc: 'A web app for discovering smaller artists on Spotify.',
  },
  LDA: {
    name: 'LDA',
    id: 'LDA',
    desc: 'A web app for insights into NYC and NYS legislation.',
  },
  ResumeSite: {
    name: 'Resume Site',
    id: 'ResumeSite',
    desc: 'This very website!',
  },
};

function ProjectLinkList() {
  const linkList = Object.keys(PROJECT_LIST).map((key) => {
    const { name, id, desc } = PROJECT_LIST[key];
    const lTo = PROJECTS_URL.concat('/', id);
    const l = <ProjectTile key={id} title={name} link={lTo} desc={desc} />;
    return (l);
  });
  return (
    <div className="project-tile-container">
      {linkList}
    </div>
  );
}

function Projects() {
  /* If passed a projectID, attempt to render the details for that project.
   * If the ID is invalid, display an error instead.
   */
  const { projectID } = useParams();
  if (projectID) {
    const projectInfo = PROJECT_LIST[projectID];
    if (!projectInfo) {
      const error = 'Project with id '.concat(projectID, ' not found.');
      return (<h1>{error}</h1>);
    }
    return (
      <ProjectDetails projectInfo={projectInfo} />
    );
  }
  return (
    <div>
      <h2>Here is a list of my projects:</h2>
      { ProjectLinkList() }
    </div>
  );
}

export default Projects;
