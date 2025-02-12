import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';

function Login() {
  return (
    <div className='login'>
      <img
        className='login__logo'
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png'
        alt=''
      />
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
