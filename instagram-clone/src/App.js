import React from 'react';
import './App.css';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src="https://www.flaticon.com/svg/static/icons/svg/1409/1409946.svg"
          alt=""
        />
        <h1>Reels</h1>
      </div>
      
      <div className="app__videos"></div>
      {/* Container of app_videos (scrollable container) */}

      {/* Video */}
      {/* Video */}
      {/* Video */}
      {/* Video */}
      {/* Video */}
    </div>
  );
}

export default App;
