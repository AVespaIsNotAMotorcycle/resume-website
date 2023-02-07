import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import markdownParser from '../Common/MarkdownParser';
import { MOBILE } from '../../constants';
import './Projects.css';

function ProjectDetailsWeb({ markdown, image }) {
  return (
    <div className="proj-det-container-web">
      <div className="proj-det-item-web">
        {markdown}
      </div>
      {image
      && (
      <div className="proj-det-item-web">
        {image}
      </div>
      )}
    </div>
  );
}

function ProjectDetailsMobile({ markdown, image }) {
  return (
    <div className="proj-det-container-mobile">
      {markdown}
      {image}
    </div>
  );
}

function ProjectDetails({ projectInfo }) {
  const { body, image } = projectInfo;
  const [md, setMD] = useState(<div />);
  const [img, setImg] = useState(<div />);
  useEffect(() => {
    setMD(markdownParser(body));
    setImg(markdownParser(image));
  }, [body]);
  if (MOBILE) { return (<ProjectDetailsMobile markdown={md} image={img} />); }
  return (<ProjectDetailsWeb markdown={md} image={img} />);
}

export default ProjectDetails;

ProjectDetailsWeb.propTypes = {
  markdown: PropTypes.instanceOf(Object).isRequired,
  image: PropTypes.instanceOf(Object),
};

ProjectDetailsWeb.defaultProps = {
  image: null,
};

ProjectDetailsMobile.propTypes = {
  markdown: PropTypes.instanceOf(Object).isRequired,
  image: PropTypes.instanceOf(Object),
};

ProjectDetailsMobile.defaultProps = {
  image: null,
};

ProjectDetails.propTypes = {
  projectInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};
