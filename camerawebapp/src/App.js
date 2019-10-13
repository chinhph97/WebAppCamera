import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Component/Login/Login.js'
import GetImage from './Component/GetImage/GetImage';
function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Camera/> */}
      <GetImage></GetImage>
    </div>

  );
}

export default App;
