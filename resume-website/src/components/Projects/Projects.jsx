import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { PROJECTS_URL } from '../../constants';
import PROJECT_LIST from './constants';
import ProjectTile from './ProjectTile';
import ProjectDetails from './ProjectDetails';
import Tag from './Tag';

import './Projects.css';

function generateTagButtons(tags, filters, toggleTag) {
  const buttons = tags.map((tag) => (
    <Tag
      key={tag}
      text={tag}
      active={(filters.length === 0 || filters.includes(tag))}
      setActive={() => toggleTag(tag)}
    />
  ));
  return buttons;
}

function generateTiles(filters, toggleTag, titleOnly = false) {
  const anyTagSelected = (tags) => {
    if (filters.length === 0) { return true; }
    for (let i = 0; i < tags.length; i += 1) { if (filters.includes(tags[i])) { return true; } }
    return false;
  };
  return Object.keys(PROJECT_LIST).map((key) => {
    const {
      id,
      name,
      desc,
      tags,
    } = PROJECT_LIST[key];
    if (!anyTagSelected(tags)) { return null; }
    const buttons = generateTagButtons(tags, filters, toggleTag);
    return (
      <ProjectTile
        key={id}
        title={name}
        desc={desc}
        link={`${PROJECTS_URL}/${id}`}
        tags={buttons}
        titleOnly={titleOnly}
      />
    );
  });
}

function Filter({ filters, setFilters, toggleTag }) { // eslint-disable-line
  const tags = [];
  Object.keys(PROJECT_LIST).forEach((key) => {
    const { tags: projTags } = PROJECT_LIST[key];
    projTags.forEach((tag) => {
      if (!tags.includes(tag)) { tags.push(tag); }
    });
  });
  const buttons = generateTagButtons(tags, filters, toggleTag);
  return <div className="filter-select">{buttons}</div>;
}

Filter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  setFilters: PropTypes.func.isRequired,
  toggleTag: PropTypes.func.isRequired,
};

function fetchProjectInfo(id) {
  if (!id) { return null; }
  return PROJECT_LIST[id];
}

function Projects() {
  const [filters, setFilters] = useState([]);
  const toggleTag = (tag) => {
    if (filters.includes(tag)) {
      setFilters(filters.filter((ftag) => (ftag !== tag)));
    } else {
      const nFilters = [...filters];
      nFilters.push(tag);
      setFilters(nFilters);
    }
  };

  const [params] = useState(useParams());
  const [projectID, setProjectID] = useState(params.projectID);
  const [projectInfo, setProjectInfo] = useState(fetchProjectInfo(projectID));
  useEffect(() => {
    setProjectInfo(
      fetchProjectInfo(projectID),
    );
  }, [projectID]);
  useEffect(() => {
    const terms = window.location.pathname.split('/');
    setProjectID(terms.pop());
  }, [window.location.href]);

  const [tiles, setTiles] = useState(generateTiles(filters, toggleTag));
  useEffect(() => {
    const titleOnly = !(!projectInfo);
    setTiles(generateTiles(filters, toggleTag, titleOnly));
  }, [filters, projectInfo]);

  return (
    <>
      <Filter filters={filters} setFilters={setFilters} toggleTag={toggleTag} />
      <div className="projects">
        <div className="project-list" style={{ flexDirection: ((projectInfo) ? 'column' : 'row') }}>
          {tiles}
        </div>
        <ProjectDetails projectInfo={projectInfo} />
      </div>
    </>
  );
}

export default Projects;
