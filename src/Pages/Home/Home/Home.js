import React, { useState } from "react";
import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Projects from "../../Projects/Projects";
import Banner from "../Banner/Banner";
import MyEducation from "../MyEducation/MyEducation";
import MySkills from "../MySkills/MySkills";

const CONTENT = { skills: "skills", education: "education" };

const Home = () => {
  const [showContent, setShowContent] = useState(CONTENT.skills);

  return (
    <div className="container mx-auto">
      <Banner />
      <About />
      <div className="text-center mb-6">
        <button
          className={`btn btn-ghost m-1 ${
            showContent === CONTENT.skills && "text-gray-300"
          }`}
          onClick={() => setShowContent(CONTENT.skills)}
        >
          Skills
        </button>
        <button
          className={`btn btn-ghost m-1 ${
            showContent === CONTENT.education && "text-gray-300"
          }`}
          onClick={() => setShowContent(CONTENT.education)}
        >
          Education
        </button>
      </div>
      {showContent === CONTENT.skills ? (
        <MySkills />
      ) : showContent === CONTENT.education ? (
        <MyEducation />
      ) : null}
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
