import React from "react";
import './style.css'

const LiveStream = () => {

  return (
    <div className='live'>
      <h1>Live Stream</h1>
      <iframe src="https://www.youtube.com/embed/524qWIF-3mI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
     </div>
  );
};

export default LiveStream;
