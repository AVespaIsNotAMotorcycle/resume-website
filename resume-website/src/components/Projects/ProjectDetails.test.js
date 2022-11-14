import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from '@testing-library/react';
import ProjectDetails from './ProjectDetails';

let container = document.createElement('div');

const blankProject = {
  name: 'Project Name',
  id: 'ProjectID',
  desc: 'This is a test project',
  body: `# ProjectName

        This is a test project`,
};

it('renders without crashing', async () => {
  act(() => {
    const root = ReactDOM.createRoot(container).render(
      <ProjectDetails projectInfo={blankProject}/>
    )
  });
});
