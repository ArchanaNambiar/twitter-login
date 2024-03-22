import React from 'react';

import './twitterloginstyle.css'; // Assuming you have a CSS file for styling
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { faGoogle, faApple } from '@fontawesome/free-brands-svg-icons';
import backTwitterImage from './back-twitter1.png'; // Import background image
import twitterBirdImage from './twitter-bird.png'; // Import Twitter bird image

function TwitterLoginPage() {
  return (
    <div className="App">
      <div className="main-content">
        <div className="left-half">
          <img src={backTwitterImage} alt="Twitter Background" />
        </div>
        <div className="right-half">
          <img src={twitterBirdImage} alt="Twitter Bird" />
          <h1>Happening now</h1>
          <h2>Join Twitter today</h2>
          <div className='btn'>
          <button>Sign up with Google</button>
          <button>Sign up with Apple</button>
          <button>Sign up with Email or Phone Number</button>
          </div>
          <p>By signing up you agree to our terms of service and our privacy policy, including cookie use</p>
          <p>Already have an account? <a href="#">Log in</a></p>
        </div>
      </div>
      <div className="footer">
        <ul>
          <li>About</li>
          <li>Help Center</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Add Info</li>
          <li>Blog</li>
          <li>Status</li>
          <li>Career</li>
          <li>Brand Resource</li>
          <li>Advertising</li>
          <li>Marketing</li>
          <li>Twitter for Business</li>
          <li>Developers</li>
          <li>Directory</li>
          <li>Settings</li>
          <li>@2021 Twitter Inc</li>
        </ul>
      </div>
    </div>
  );
}

export default TwitterLoginPage;
