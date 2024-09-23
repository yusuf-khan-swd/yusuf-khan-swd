import React from "react";
import Projects from "../../Projects/Projects";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import MySkills from "../MySkills/MySkills";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <div className="text-center mb-6">
        <button className="btn btn-ghost m-1">Skills</button>
        <button className="btn btn-ghost m-1">Education</button>
      </div>
      <MySkills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
