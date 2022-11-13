import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-remarkable';

function ProjectDetails({ projectInfo }) {
  const { body } = projectInfo;
  return (
    <div>
      <Markdown source={body} />
    </div>
  );
}

export default ProjectDetails;

ProjectDetails.propTypes = {
  projectInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
