import React from "react";
import Contact from "../../Others/Contact/Contact";
import Projects from "../../Projects/Projects";
import Banner from "../Banner/Banner";
import MySkills from "../MySkills/MySkills";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <MySkills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
