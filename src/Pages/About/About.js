import React from 'react';
import myPic from '../../assets/my-pic-2.jpg';

const About = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className=''>
          <img src={myPic} alt="Yusuf" className="h-[450px] border-8 border-slate-400 rounded-md mx-auto md:ml-1" />
        </div>
        <div className='max-w-sm flex justify-center items-center'>
          <div>
            <h2 className='text-3xl font-bold mb-3'>About Me</h2>
            <p className='font-lg'>Hi! This is Yusuf, A MERN stack web developer trying to gain confidence using my potential in the field of “Web Development”. I will express my innovative creative skills for self and company growth.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;