import React from "react";
import { PhotoView } from "react-photo-view";
import myPic from "../../assets/my-pic-2.jpg";

const AboutMe = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="grid grid-cols-1 md:grid-cols-5 m-2 gap-8 max-w-5xl mx-auto">
        <div className="md:col-span-2">
          <PhotoView src={myPic}>
            <img
              src={myPic}
              alt="Yusuf"
              className="h-[450px] border-8 border-slate-400 rounded-md mx-auto md:ml-1 cursor-pointer"
            />
          </PhotoView>
        </div>
        <div className="mt-4 md:mt-0 md:col-span-3 flex items-center">
          <div>
            <div>
              <h2 className="text-4xl font-bold mb-5">About Me</h2>
              <p className="text-lg leading-relaxed mb-3">
                Hi ! <br /> This is Yusuf Khan, A MERN stack web developer
                trying to gain confidence using my potential in the field of
                “Web Development”. I always focus on learning new technology.
              </p>
              <p className="text-lg">
                I wish to work in a dynamic organization that will contribute to
                my professional and personal growth while I contribute to the
                growth of the company as well as engage in opportunities to
                further the company's goals.
              </p>
            </div>
            <div className="mt-6">
              <a
                className="dark:bg-gray-600 bg-slate-400 btn btn-ghost w-full lg:w-52 mb-3 md:mr-2"
                href="https://drive.google.com/file/d/1qleVLJGI5jU6fmDItFsJISNvf6v3UZCs/view"
                target={`_blank`}
              >
                Get Resume
              </a>
              <a
                href="https://www.linkedin.com/in/yusuf-khan-swd/"
                target={`_blank`}
                className="btn w-full lg:w-52"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
