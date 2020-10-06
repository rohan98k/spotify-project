import React from 'react';
import './Body.css';
import Header from './Header';

function Body(spotify) {
  return (
    <div className="body">
      <Header spotify={spotify}></Header>
    </div>
  );
}

export default Body;
