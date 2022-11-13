import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Projects.css';

function ProjectTile({
  title,
  desc,
  link,
}) {
  return (
    <Link to={link} className="project-tile">
      <div>
        <h2 className="project-tile-title">{title}</h2>
        <p className="project-tile-text">{desc}</p>
      </div>
    </Link>
  );
}

export default ProjectTile;

ProjectTile.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  link: PropTypes.string.isRequired,
};

ProjectTile.defaultProps = {
  desc: '',
};
