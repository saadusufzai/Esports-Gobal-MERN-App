import React from "react";
import './style.css'

const LiveStream = () => {
  return (
    <div className='live'>
      <h1>Live Stream</h1>
      <iframe src="https://www.youtube.com/embed/uCd6tbUAy6o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
};

export default LiveStream;
