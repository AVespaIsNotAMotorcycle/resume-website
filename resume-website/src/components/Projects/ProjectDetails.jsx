import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import markdownParser from '../Common/MarkdownParser';
import { MOBILE } from '../../constants';
import './Projects.css';

function ProjectDetailsWeb({ markdown }) {
  return (
    <div className="proj-det-container">
      <div className="proj-det-padding" />
      {markdown}
      <div className="proj-det-padding" />
    </div>
  );
}

function ProjectDetailsMobile({ markdown }) {
  return (
    <div className="proj-det-container">
      {markdown}
    </div>
  );
}

function ProjectDetails({ projectInfo }) {
  const { body } = projectInfo;
  const [md, setMD] = useState(<div />);
  useEffect(() => {
    setMD(markdownParser(body));
  }, [body]);
  if (MOBILE) { return (<ProjectDetailsMobile markdown={md} />); }
  return (<ProjectDetailsWeb markdown={md} />);
}

export default ProjectDetails;

ProjectDetailsWeb.propTypes = {
  markdown: PropTypes.instanceOf(Object).isRequired,
};

ProjectDetailsMobile.propTypes = {
  markdown: PropTypes.instanceOf(Object).isRequired,
};

ProjectDetails.propTypes = {
  projectInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
