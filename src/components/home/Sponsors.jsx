import React from "react";
import sp1 from "../../images/sponsors/sponsor1.png";
import sp2 from "../../images/sponsors/sponsor2.jpeg";

const Sponsors = () => {
  return (
    <div className="sponsors">
      <h1>SPONSORS</h1>
      <div className="our-sponsors">
        <ul>
          <li>
           <a target='blank' href="https://epo.org.pk/"> <img src={sp1} alt="environmental-protection-organization" /></a>
            <h4><a target='blank' href="https://epo.org.pk/">Environmental Protection Organization</a></h4>
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
