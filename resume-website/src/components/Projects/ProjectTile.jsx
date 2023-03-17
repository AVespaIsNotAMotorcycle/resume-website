import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Projects.css';

function ProjectTile({
  title,
  desc,
  link,
  tags,
  titleOnly,
  setProjectID,
}) {
  const details = (
    <>
      <p className="project-tile-text">{desc}</p>
      <div className="project-tile-tag-div">
        {tags}
      </div>
    </>
  );
  const className = (titleOnly
    ? 'project-tile-title-only'
    : 'project-tile'
  );
  return (
    <Link
      to={link}
      className={className}
      onClick={setProjectID}
    >
      <div>
        <h2 className="project-tile-title">{title}</h2>
        {!titleOnly
        && details}
      </div>
    </Link>
  );
}

export default ProjectTile;

ProjectTile.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  link: PropTypes.string.isRequired,
  tags: PropTypes.instanceOf(Array),
  titleOnly: PropTypes.bool,
  setProjectID: PropTypes.func,
};

ProjectTile.defaultProps = {
  desc: '',
  tags: [],
  titleOnly: false,
  setProjectID: () => {},
};
