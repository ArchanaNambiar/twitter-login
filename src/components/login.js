

import React from 'react';
import "./loginstyle.css";
import twitterBirdImage from './twitter-bird.png';

function Login() {
  return (
    <div className="login-container">
      <img src={twitterBirdImage} alt="Twitter Bird" />
      <h2>Log in to Twitter</h2>
      <input type="text" placeholder="Phone number or email address" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
      <div className="extra-links">
        <a href="#">Forgot password?</a>
        <a href="#">Sign up to Twitter</a>
      </div>
    </div>
  );
}

export default Login;
