import React from 'react'
import './style.css';

const Social = () => {
    return (
        <div className='social'>
            <h1>Follow Us</h1>
            <div className="follow-us">
          
          <ul>
            <li>
              <a target='blank' href="https://www.facebook.com/">
                <i style={{}}  className=" fb fa fa-facebook-official fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a target='blank' href="https://www.facebook.com/">
                <i className="insta fa fa-instagram fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a target='blank' href="https://www.facebook.com/">
                <i className=" yt fa fa-youtube-play fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a target='blank' href="https://www.facebook.com/">
                <i className="wa fa fa-whatsapp fa-2x" aria-hidden="true"></i>
                
              </a>
            </li>
          </ul>
        </div>
        </div>
    )
}

export default Social
