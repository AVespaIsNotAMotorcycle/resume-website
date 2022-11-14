import React from 'react';
import markdownParser from '../Common/MarkdownParser';
import ABOUT from './constants';
import HEADSHOT from './headshot.JPG';
import './Home.css';

function Home() {
  const desc = markdownParser(ABOUT);

  return (
    <div className="home">
      <div className="home-padding" />
      <div className="home-container">
        <div className="home-container-child">
          <img className="home-headshot" src={HEADSHOT} alt="headshot" />
        </div>
        <div className="home-container-child">
          <h1>Sam Ebersole</h1>
          <h2>Frontend Developer at DataMixMaster</h2>
        </div>
      </div>
      <div className="home-container">
        {desc}
      </div>
      <div className="home-padding" />
    </div>
  );
}

export default Home;
