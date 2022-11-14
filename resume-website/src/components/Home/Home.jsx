import React from 'react';
import markdownParser from '../Common/MarkdownParser';
import ABOUT from './constants';
import HEADSHOT from './headshot.JPG';
import './Home.css';

function Home() {
  const desc = markdownParser(ABOUT);

  return (
    <div>
      <img className="home-headshot" src={HEADSHOT} alt="headshot" />
      {desc}
    </div>
  );
}

export default Home;
