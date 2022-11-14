import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import markdownParser from '../Common/MarkdownParser';
import Text from '../Common/Text';

function ProjectDetails({ projectInfo }) {
  const { body } = projectInfo;
  const [html, setHtml] = useState(<div />);
  useEffect(() => {
    setHtml(markdownParser(body));
  }, [body]);
  return (
    <Text>
      {html}
    </Text>
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
