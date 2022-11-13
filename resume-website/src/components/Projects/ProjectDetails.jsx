import React from 'react';
import PropTypes from 'prop-types';

function ProjectDetails({ projectInfo }) {
  const { name, desc } = projectInfo;
  return (
    <div>
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  );
}

export default ProjectDetails;

ProjectDetails.propTypes = {
  projectInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};
