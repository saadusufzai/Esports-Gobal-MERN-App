import React from "react";

import './terms.css'
const Disclaimer = () => {
  return (
    <div className="disclaimer">
      <h2 style={{textAlign: 'center', paddingTop:'1.5em'}}>
        <b>DISCLAIMER</b>
      </h2>
      <p>
        Last updated: <span className="date">2020-10-15</span>
      </p>
      <p>
        <b>WEBSITE DISCLAIMER</b>
      </p>
      <p>
        The information provided by{" "}
        <b>
          <span className="company-name">Esports Global</span>
        </b>{" "}
        (“Company”, “we”, “our”, “us”) on{" "}
        <b>
          <span className="url">www.esportsglobal.netlify.app</span>
        </b>{" "}
        (the “Site”) is for general informational purposes only. All information
        on the Site is provided in good faith, however we make no representation
        or warranty of any kind, express or implied, regarding the accuracy,
        adequacy, validity, reliability, availability, or completeness of any
        information on the Site.
      </p>
      <p>
        UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR
        DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR
        RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE
        AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN
        RISK.
      </p>
      <p>
        <b>EXTERNAL LINKS DISCLAIMER</b>
      </p>
      <p>
        The Site may contain (or you may be sent through the Site) links to
        other websites or content belonging to or originating from third parties
        or links to websites and features. Such external links are not
        investigated, monitored, or checked for accuracy, adequacy, validity,
        reliability, availability or completeness by us.
      </p>
      
      <p>
        WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE
        ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY
        WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY
        BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE
        RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY
        PROVIDERS OF PRODUCTS OR SERVICES.
      </p>
      <div id="professional-disclaimer"></div>
      <div id="affiliates"></div>
      <div id="testimonials">
        <p>
          <b>TESTIMONIALS DISCLAIMER</b>
        </p>
        <p>
          The Site may contain testimonials by users of our products and/or
          services. These testimonials reflect the real-life experiences and
          opinions of such users. However, the experiences are personal to those
          particular users, and may not necessarily be representative of all
          users of our products and/or services. We do not claim, and you should
          not assume that all users will have the same experiences.
        </p>{" "}
        <p>YOUR INDIVIDUAL RESULTS MAY VARY.</p>{" "}
        <p>
          The testimonials on the Site are submitted in various forms such as
          text, audio and/or video, and are reviewed by us before being posted.
          They appear on the Site verbatim as given by the users, except for the
          correction of grammar or typing errors. Some testimonials may have
          been shortened for the sake of brevity, where the full testimonial
          contained extraneous information not relevant to the general public.
        </p>{" "}
        <p>
          The views and opinions contained in the testimonials belong solely to
          the individual user and do not reflect our views and opinions.
        </p>
      </div>
      <p>
        <b>ERRORS AND OMISSIONS DISCLAIMER</b>
      </p>
      <p>
        While we have made every attempt to ensure that the information
        contained in this site has been obtained from reliable sources,{" "}
        <span className="company-name">Esports Global</span> is not responsible for
        any errors or omissions or for the results obtained from the use of this
        information. All information in this site is provided “as is”, with no
        guarantee of completeness, accuracy, timeliness or of the results
        obtained from the use of this information, and without warranty of any
        kind, express or implied, including, but not limited to warranties of
        performance, merchantability, and fitness for a particular purpose.
      </p>{" "}
      <p>
        In no event will <span className="company-name">Esports Global</span>, its
        related partnerships or corporations, or the partners, agents or
        employees thereof be liable to you or anyone else for any decision made
        or action taken in reliance on the information in this Site or for any
        consequential, special or similar damages, even if advised of the
        possibility of such damages.
      </p>
      <div id="guest-contributors"></div>
      <p>
        <b>LOGOS AND TRADEMARKS DISCLAIMER</b>
      </p>
      <p>
        All logos and trademarks of third parties referenced on{" "}
        <span className="url">www.esportsglobal.netlify.app</span> are the
        trademarks and logos of their respective owners. Any inclusion of such
        trademarks or logos does not imply or constitute any approval,
        endorsement or sponsorship of{" "}
        <span className="company-name">Esports Global</span> by such owners.
      </p>
      <p>
        <b>CONTACT US</b>
      </p>
      <p>
        Should you have any feedback, comments, requests for technical support
        or other inquiries, please contact us by email:{" "}
        <b>
          <span className="email">esportsglobalpk@gmail.com</span>
        </b>
        .
      </p>
    </div>
  );
};

export default Disclaimer;
