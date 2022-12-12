import React from "react";
import myPic from "../../../assets/my-pic.jpg";
import Typewriter from "typewriter-effect";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { PhotoView } from "react-photo-view";

const Banner = () => {
  return (
    <div className="mt-8 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card order-last md:order-first">
          <div className="card-body">
            <p className="text-lg">Hello I'm,</p>
            <h2 className="card-title text-6xl">Yusuf</h2>
            <div className="font-bold text-lg">
              <Typewriter
                options={{
                  strings: [
                    "A MERN Stack Developer",
                    "A JavaScript Developer",
                    "A React Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              ></Typewriter>
            </div>
            <p className="text-lg">
              A self-motivated and enthusiastic web developer with a deep
              interest in JavaScript and other programming languages. Seeking a
              Web Developer position in a company where I can use my skills and
              develop my skills.
            </p>
            <div className="mt-6">
              <a
                className="dark:bg-gray-600 bg-slate-400 btn btn-ghost w-full lg:w-52 mb-3 md:mr-2"
                href="https://drive.google.com/file/d/1qleVLJGI5jU6fmDItFsJISNvf6v3UZCs/view"
                target={`_blank`}
              >
                Download My Resume
              </a>
              <a
                href="https://form.jotform.com/223433296548058"
                target={`_blank`}
                className="btn w-full lg:w-52"
              >
                Contact with Me
              </a>
            </div>
            <div className="flex justify-center lg:justify-start mt-2">
              <button className="mr-3">
                <a
                  href="https://www.linkedin.com/in/yusuf-khan-swd/"
                  target={`_blank`}
                >
                  <FaLinkedin className="text-slate-500 hover:text-slate-600 text-5xl"></FaLinkedin>
                </a>
              </button>
              <button className="mr-3">
                <a href="https://github.com/yusuf-khan-swd" target={`_blank`}>
                  <FaGithub className="text-slate-500 hover:text-slate-600 text-5xl"></FaGithub>
                </a>
              </button>
              <button className="mr-3">
                <a href="mailto:yusufkhan.swd@gmail.com" target={`_blank`}>
                  <FaEnvelope className="text-slate-500 hover:text-slate-600 text-5xl"></FaEnvelope>
                </a>
              </button>
              <button className="mr-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100067129607025"
                  target={`_blank`}
                >
                  <FaFacebookSquare className="text-slate-500 hover:text-slate-600 text-5xl"></FaFacebookSquare>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-lg flex justify-center items-center md:items-start p-8">
          <figure>
            <PhotoView src={myPic}>
              <img
                className="h-72 rounded-[100%] cursor-pointer"
                src={myPic}
                alt="Yusuf"
              />
            </PhotoView>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Banner;
