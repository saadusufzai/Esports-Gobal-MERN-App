import React from "react";
import Carousel from "./Carousel";
import Events from "../events/Events";
import Footer from "./Footer";
import Header from "./Header";
import LiveStream from "./LiveStream";
import Social from "./Social";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Events />
      <LiveStream />
      <Social />
      <Footer />
    </div>
  );
};

export default Home;
