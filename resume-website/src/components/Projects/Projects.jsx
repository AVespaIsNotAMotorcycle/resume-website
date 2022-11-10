import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_URL } from '../../constants';

const PROJECT_LIST = [
  { name: 'Groovy', id: 'Groovy' },
  { name: 'LDA', id: 'LDA' },
  { name: 'Resume Site', id: 'ResumeSite' },
];

function ProjectLinkList() {
  const linkList = PROJECT_LIST.map((proj) => {
    const { name, id } = proj;
    const lTo = PROJECTS_URL.concat('/', id);
    const l = <Link key={id} to={lTo}>{name}</Link>;
    return (l);
  });
  return linkList;
}

function Projects() {
  return (
    <div>
      <h2>Here is a list of my projects:</h2>
      <ul>{ ProjectLinkList() }</ul>
    </div>
  );
}

export default Projects;
