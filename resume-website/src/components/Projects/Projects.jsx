import React from 'react';
import { useParams } from 'react-router-dom';
import { PROJECTS_URL } from '../../constants';

import ProjectTile from './ProjectTile';
import ProjectDetails from './ProjectDetails';

import PROJECT_LIST from './constants';
import './Projects.css';

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
    <div className="projects">
      { ProjectLinkList() }
    </div>
  );
}

export default Projects;
