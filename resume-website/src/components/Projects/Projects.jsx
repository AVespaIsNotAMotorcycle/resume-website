import React from 'react';
import { PROJECTS_URL } from '../../constants';
import ProjectTile from './ProjectTile';
import './Projects.css';

const PROJECT_LIST = [
  {
    name: 'Groovy',
    id: 'Groovy',
    desc: 'A web app for discovering smaller artists on Spotify.',
  },
  {
    name: 'LDA',
    id: 'LDA',
    desc: 'A web app for insights into NYC and NYS legislation.',
  },
  {
    name: 'Resume Site',
    id: 'ResumeSite',
    desc: 'This very website!',
  },
];

function ProjectLinkList() {
  const linkList = PROJECT_LIST.map((proj) => {
    const { name, id, desc } = proj;
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
  return (
    <div>
      <h2>Here is a list of my projects:</h2>
      { ProjectLinkList() }
    </div>
  );
}

export default Projects;
