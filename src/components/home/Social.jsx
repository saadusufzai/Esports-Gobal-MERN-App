import React from 'react'
import './style.css';
import ReactTooltip from "react-tooltip";

const Social = () => {
    return (
        <div className='social'>
            <h1>Follow Us</h1>
            <div className="follow-us">
            <ReactTooltip />
          <ul>
            <li>
              <a target='blank' href="https://www.facebook.com/esportsglobalpk">
                <i  className=" fb fa fa-facebook-official fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a target='blank' href="https://www.instagram.com/pubg_esports_global/">
                <i className="insta fa fa-instagram fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a target='blank' href="https://www.youtube.com/channel/UCM7FpBEXQI1mJyUiR86bjNg">
                <i className=" yt fa fa-youtube-play fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a data-tip="03472175563" target='blank' href="https://web.whatsapp.com/">
                <i className="wa fa fa-whatsapp fa-2x" aria-hidden="true"></i>
                
              </a>
            </li>
          </ul>
        </div>
        </div>
    )
}

export default Social
