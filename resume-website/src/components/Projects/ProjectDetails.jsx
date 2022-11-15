import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import markdownParser from '../Common/MarkdownParser';

function ProjectDetails({ projectInfo }) {
  const { body } = projectInfo;
  const [html, setHtml] = useState(<div />);
  useEffect(() => {
    setHtml(markdownParser(body));
  }, [body]);
  return (
    <div>
      {html}
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
