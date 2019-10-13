import React from 'react';

const AddCamera = (props) => {
  return (
    <form onSubmit={props.getURL}>
      <input style={{ margin:"20px auto", display:"block" }} type="URL" name="URLcamera"/>
      <button>Submit</button>
    </form>
  );
}

export default AddCamera;