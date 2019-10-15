import React, { Component } from 'react';
import axios from "axios";


import AddCamera from '../AddCamera/AddCamera.js';

class GetImage extends Component {
  state = {
    repos: null
  }
  getURL = (e) => {
    e.preventDefault();
    const url = e.target.elements.URLcamera.value.toString();
    console.log(url);
    if (url) {
      axios.post(`https://ec2-54-255-174-217.ap-southeast-1.compute.amazonaws.com:5000/registration/camera`,{URI:url})
      .then((res) => {
        console.log(res)
        const repos = res.data.url;
        this.setState({ repos });
      }).catch(err =>{
        console.log(err.res);
    });
    } else return;
  }
  render() {
    console.log(this.state.repos)
    console.log(typeof this.state.repos)
    return (
      <div className="App">
          <h5 className="App-title">ADD CAMERA</h5>
        <AddCamera getURL={this.getURL} />
        {/* { this.state.repos ? <p>URL: { this.state.repos }</p> : <p>Enter the URL of the camera</p> } */}
        
        <img src={ this.state.repos } alt="image in camera"></img>
      </div>
    );
    
  }
};

export default GetImage;