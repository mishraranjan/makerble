import React from "react";
import "../styles/NewsFeed.css";

const NewsFeed = () => {
  return (
    <div className="newsfeed">
      <h2>News Feed</h2>
      <div className="story-card">
        <h3>Sample Story Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Expand Story</button>
      </div>
    </div>
  );
};

export default NewsFeed;
