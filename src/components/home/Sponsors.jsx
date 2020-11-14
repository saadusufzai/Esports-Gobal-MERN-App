import React from "react";
import sp1 from "../../images/sponsors/sponsor1.png";
import sp2 from "../../images/sponsors/sponsor2.jpeg";
import sp3 from "../../images/sponsors/sponsor3.png";
import sp4 from "../../images/sponsors/sp3.png";

const Sponsors = () => {
  return (
    <div className="sponsors">
      <h1>SPONSORS</h1>
      <div className="our-sponsors">
        <ul>
          <li>
           <a target='blank' href="https://epo.org.pk/"> <img src={sp1} alt="environmental-protection-organization" /></a>
            <h4><a target='blank' href="https://epo.org.pk/">EPO Bhakkar</a></h4>
          </li>
          <li>
           <a target='blank' href="#"> <img style={{borderRadius:0, width:'180px', marginTop:'.5em'}} src={sp4} alt="environmental-protection-organization" /></a>
            <h4><a target='blank' href="#">Colours Center Bhakkar</a></h4>
          </li>
          <li>
            <img src={sp2} alt="environmental-protection-organization" />
            <h4><a href="#">Adeel Awan (USA)</a></h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sponsors;
