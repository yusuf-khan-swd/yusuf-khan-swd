import React from "react";
import Projects from "../../Projects/Projects";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <Projects></Projects>
    </div>
  );
};

export default Home;
