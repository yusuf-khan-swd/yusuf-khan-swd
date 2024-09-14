import React from "react";
import Projects from "../../Projects/Projects";
import Banner from "../Banner/Banner";
import MySkills from "../MySkills/MySkills";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <MySkills />
      <Projects />
    </div>
  );
};

export default Home;
