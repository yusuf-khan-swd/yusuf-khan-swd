import React from 'react';
import { Link } from 'react-router-dom';
import myPic from '../../../assets/my-pic.jpg';

const Banner = () => {
  return (
    <div className='mt-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='card'>
          <div className='card-body'>
            <h2>Hello I'm, Yusuf</h2>
            <p>A MERN Stack Developer</p>
            <div>
              <a className="bg-gray-600 btn btn-ghost w-full md:w-44 mb-2 md:mr-2" href='https://drive.google.com/file/d/1qleVLJGI5jU6fmDItFsJISNvf6v3UZCs/view' target={`_blank`}>Download Resume</a>
              <Link className='btn w-full md:w-44'>Contact Me</Link>
            </div>
          </div>
        </div>
        <div>
          <figure><img className='h-72 mx-auto md:ml-auto rounded-3xl' src={myPic} alt="Yusuf" /></figure>
        </div>
      </div>
    </div>
  );
};

export default Banner;