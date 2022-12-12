import React from "react";
import { PhotoView } from "react-photo-view";
import myPic from "../../assets/my-pic-2.jpg";

const About = () => {
  return (
    <div className="container mx-auto my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 m-2">
        <div>
          <PhotoView src={myPic}>
            <img
              src={myPic}
              alt="Yusuf"
              className="h-[450px] border-8 border-slate-400 rounded-md mx-auto md:ml-1 cursor-pointer"
            />

          </PhotoView>
        </div>
        <div className="max-w-md flex justify-center items-center mt-4">
          <div>
            <div>
              <h2 className="text-3xl font-bold mb-3">About Me</h2>
              <p className="text-xl leading-relaxed">
                Hi! This is Yusuf, A MERN stack web developer trying to gain
                confidence using my potential in the field of “Web Development”.
                I always focus on learning new technology. I will express my
                innovative creative skills for self and company growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
