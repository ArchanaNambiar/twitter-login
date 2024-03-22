import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import TwitterLoginPage from './components/twitterloginpage';
import Login from './components/login';


function App() {
  return (
    <>
    {/* <TwitterLoginPage/> */}
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<TwitterLoginPage />}> </Route>
          
          <Route path="/login" element={<Login />} />
         
          
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
