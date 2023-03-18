import React from 'react';
import MarkdownParser from 'noviimd';
import ABOUT from './constants';
import './Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home-background.JPG)` }}>
      <div className="home-padding" />
      <div className="home-padding" />
      <div className="home-padding home-color-fade" />
      <div className="home-content">
        <div className="home-container-web">
          <div className="home-container-child">
            <h1>Sam Ebersole</h1>
            <h2>Frontend Developer at DataMixMaster</h2>
          </div>
        </div>
        <div className="home-container-text">
          <MarkdownParser className="home-container-text" md={ABOUT} />
        </div>
      </div>
    </div>
  );
}

export default Home;
