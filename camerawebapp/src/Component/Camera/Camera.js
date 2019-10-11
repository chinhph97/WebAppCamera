import React, { Component } from 'react';

class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      // URLcamera:''
    }
  }
  renderButton = () => (
    <form action="cameraform">
      URL:  &nbsp;&nbsp;
          <input type="URL" name={this.props.URLcamera} />
      <br />
      <br />

      <button className="btn btn-primary" onClick={() => this.editClick()}>Submit</button>
    </form>
  )
  displayCheck = () => {
    if (this.state.status == true) {
      return this.renderButton();
    }
    else {
      return this.renderImage();
    }
  }
  renderImage = () => (
    <form>
      <button className="btn btn-primary" onClick={() => this.saveClick()}>Back</button>
      {/* <img src="https://cdn.tuoitre.vn/thumb_w/640/2019/9/7/9-15678308770531675053258.jpg" alt="image in camera"> */}
      <img src={this.props.URLcamera} alt="image in camera">
      </img>
    </form>
  )
  editClick = () => {
    this.setState({ status: false });
  

  }
  saveClick=()=>{
    this.setState({status:true});
  }
  render() {
    return (
      <div>
        <h2>Add Camera</h2>
        
        {this.displayCheck()}
      </div>
    );
  }
}

export default Camera;