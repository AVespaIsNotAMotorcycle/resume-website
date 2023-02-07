import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import ProjectDetails from './ProjectDetails';
import PROJECT_LIST from './constants';
import Button from '../Common/Button';

import './Projects.css';

function Projects() {
  const { projectID } = useParams();
  const [displayProject, setDisplayProject] = useState('Groovy');
  const keys = Object.keys(PROJECT_LIST);

  useEffect(() => {
    if (!projectID) { return; }
    setDisplayProject(projectID);
  }, [projectID]);

  const calcTargetIndex = (delta) => {
    let targetIndex = keys.indexOf(displayProject) + delta;
    if (targetIndex >= keys.length) { targetIndex = 0; }
    if (targetIndex < 0) { targetIndex = keys.length - 1; }
    return targetIndex;
  };

  const switchProject = (delta) => {
    setDisplayProject(keys[calcTargetIndex(delta)]);
  };

  return (
    <div className="projects">
      <Button
        onClick={() => switchProject(-1)}
        color="secondary"
        sx={{ marginLeft: '5px' }}
      >
        <ArrowBackIosIcon />
        {PROJECT_LIST[keys[calcTargetIndex(-1)]].name}
      </Button>
      <ProjectDetails
        projectInfo={PROJECT_LIST[displayProject]}
      />
      <Button
        onClick={() => switchProject(1)}
        color="secondary"
        sx={{ marginRight: '5px' }}
      >
        {PROJECT_LIST[keys[calcTargetIndex(1)]].name}
        <ArrowForwardIosIcon />
      </Button>
    </div>
  );
}

export default Projects;
