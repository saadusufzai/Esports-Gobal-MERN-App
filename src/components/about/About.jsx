import React from "react";
import './style.scss'

const About = () => {
  return (
    <div className='about'>
      <h1>E-Sports Global</h1>
      <p>
        E-Sports Global is a Pakistan Based Company.Our aim is to support the
        development of e-sports in Pakistan. Our Mission to make Pakistani young
        Gamers able to participate Internationalally. There is a lot of
        potential in Pakistan and we want to support and motivate the young
        gamer in Pakitan to get better. Esports is not just about gaming,
        Esports is a carrer and people around the globe are making Millions.
      </p>
      <div className="graph">
        <a href="https://www.statista.com/statistics/490522/global-esports-market-revenue/">
          <img
            src="https://www.statista.com/graphic/1/490522/global-esports-market-revenue.jpg"
            alt="Statistic: eSports market revenue worldwide from 2018 to 2023 (in million U.S. dollars) | Statista"
            style={{
              width: "70%",
              height: "auto !important",
              maxwidth: "500px",
              msinterpolationmode: "bicubic",
            }}
          />
        </a>
      </div>
      <p>
        This statistic shows the global eSports market revenue from 2018 to
        2023. In 2020, the global eSports market was valued at just over 950
        million U.S. dollars. According to the source's estimates, global
        eSports market revenue will reach almost 1.6 billion U.S. dollars in
        2023. The eSports industry is expected to grow rapidly in the coming
        years. The majority of these revenues come from sponsorships and
        advertising, and the rest from media rights, publisher fees, merchandise
        and tickets, digital, and streaming. In terms of revenues, Asia and
        North America represent the two largest eSports markets, with China
        alone accounting for almost one fifth of the market.
      </p>
      <p>
            <strong>          The Goal of E-Sports Global is to make Pakistani gamers able to bring this revenue to Pakistan and play their part to strengthen Pakistan's Economy.
</strong>
      </p>
    </div>
  );
};

export default About;
