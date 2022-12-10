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
            <p className='text-lg'>
              <Typewriter options={{
                strings: ['A MERN Stack Developer'],
                autoStart: true,
                loop: true,
              }}></Typewriter>
            </p>
            <p className="text-sm">A self-motivated and enthusiastic web developer with a deep interest in JavaScript and other programming languages. Seeking a Web Developer position in a company where I can use my skills and develop my skills.</p>
            <div className='mt-5'>
              <a className="bg-gray-600 btn btn-ghost w-full md:w-52 mb-2 md:mr-2" href='https://drive.google.com/file/d/1qleVLJGI5jU6fmDItFsJISNvf6v3UZCs/view' target={`_blank`}>Download My Resume</a>
              <a href='https://form.jotform.com/223433296548058' target={`_blank`} className='btn w-full md:w-52'>Contact with Me</a>
            </div>
          </div>
        </div>
        <div className='rounded-lg'>
          <figure><img className='h-72 mx-auto rounded-full' src={myPic} alt="Yusuf" /></figure>
        </div>
      </div>
    </div>
  );
};

export default Banner;