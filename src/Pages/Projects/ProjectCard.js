import React from 'react';
import { PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const { name, img, live, github, description } = project;
  const projectDescription = description.length > 3 ? description.slice(0, 3) : description;
  return (
    <div>
      <div className="card card-compact shadow-xl border border-slate-600 h-full m-3 lg:m-0">
        <figure className='w-full'>
          <PhotoView src={img}>
            <img className='w-full h-full sm:h-[300px] cursor-pointer' src={img} alt={name} />
          </PhotoView>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <ul className='text-lg list-disc ml-4'>
            {
              projectDescription.map((description, index) => <li className='mb-1' key={index}>{description}</li>)
            }
          </ul>
        </div>
        <div className="card-actions justify-between p-4">
          <div>
            <a className="btn mr-2" href={live} target={`_blank`}>Live Site</a>
            <a className="btn" href={github} target={`_blank`}>Github</a>
          </div>
          <div>
            <Link className='btn' to={`/projects/${project._id}`}>Details</Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;