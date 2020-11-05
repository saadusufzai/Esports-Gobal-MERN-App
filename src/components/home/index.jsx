import React from "react";
import Carousel from "./Carousel";
import Events from "../events/Events";
import LiveStream from "./LiveStream";
import Social from "./Social";
import Sponsors from './Sponsors';

const Home = () => {
  return (
    <div >
      <Carousel />
      <Events />
      <LiveStream />
      <Social />
      <Sponsors />
    </div>
  );
};

export default Home;
