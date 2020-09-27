import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {
  useEffect(() => {
    const token = getTokenFromUrl();
    window.location.hash = '';
  }, []);

  return (
    //BEM
    <div className="app">
      <Login />
    </div>
  );
}

export default App;

//59b7f9d85d0842208b322af77fbea0dd
