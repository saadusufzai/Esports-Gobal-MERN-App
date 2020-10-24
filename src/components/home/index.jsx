import React from "react";
import Carousel from "./Carousel";
import Events from "../events/Events";
import LiveStream from "./LiveStream";
import Social from "./Social";

const Home = () => {
  return (
    <div >
      <Carousel />
      <Events />
      <LiveStream />
      <Social />
    </div>
  );
};

export default Home;
