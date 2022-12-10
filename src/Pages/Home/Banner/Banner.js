import React from 'react';
import myPic from '../../../assets/my-pic.jpg';
import Typewriter from 'typewriter-effect';

const Banner = () => {
  return (
    <div className='mt-8 mb-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='card order-last md:order-first'>
          <div className='card-body'>
            <p>Hello I'm,</p>
            <h2 className='card-title text-6xl'>Yusuf</h2>
            <Typewriter options={{
              strings: ['A MERN Stack Developer'],
              autoStart: true,
              loop: true,
            }}></Typewriter>
            <p className="text-sm">A self-motivated and enthusiastic web developer with a deep interest in JavaScript and other programming languages. Seeking a Web Developer position in a company where I can use my skills and develop my skills.</p>
            <div className='mt-6'>
              <a className="dark:bg-gray-600 bg-slate-400 btn btn-ghost w-full lg:w-52 mb-3 md:mr-2" href='https://drive.google.com/file/d/1qleVLJGI5jU6fmDItFsJISNvf6v3UZCs/view' target={`_blank`}>Download My Resume</a>
              <a href='https://form.jotform.com/223433296548058' target={`_blank`} className='btn w-full lg:w-52'>Contact with Me</a>
            </div>
          </div>
        </div>
        <div className='rounded-lg flex justify-center items-center lg:items-start'>
          <figure><img className='h-72 rounded-[100%]' src={myPic} alt="Yusuf" /></figure>
        </div>
      </div>
    </div>
  );
};

export default Banner;