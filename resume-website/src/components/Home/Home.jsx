import React from 'react';
import markdownParser from '../Common/MarkdownParser';
import ABOUT from './constants';
import HEADSHOT from './headshot.JPG';
import './Home.css';
import { MOBILE } from '../../constants';

function Home() {
  const desc = markdownParser(ABOUT);

  if (MOBILE) {
    return (
      <div className="home">
        <div>
          <div className="home-container-mobile">
            <div className="home-container-child">
              <img className="home-headshot" src={HEADSHOT} alt="headshot" />
            </div>
            <div className="home-container-child">
              <h1>Sam Ebersole</h1>
              <h2>Frontend Developer at DataMixMaster</h2>
            </div>
          </div>
          <div className="home-container-text">
            {desc}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="home">
      <div className="home-padding" />
      <div>
        <div className="home-container-web">
          <div className="home-container-child">
            <img className="home-headshot" src={HEADSHOT} alt="headshot" />
          </div>
          <div className="home-container-child">
            <h1>Sam Ebersole</h1>
            <h2>Frontend Developer at DataMixMaster</h2>
          </div>
        </div>
        <div className="home-container-text">
          {desc}
        </div>
      </div>
      <div className="home-padding" />
    </div>
  );
}

export default Home;
