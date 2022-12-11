import React from 'react';
import { PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const { name, img, live, description } = project;
  const projectDescription = description.length > 3 ? description.slice(0, 3) : description;

  return (
    <div>
      <div className="card card-compact shadow-xl border border-slate-600 h-full m-3 lg:m-0">
        <figure className='w-full'>
          <PhotoView src={img}>
            <img className='w-full h-full' src={img} alt={name} />
          </PhotoView>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <ul className='text-lg list-disc ml-4'>
            {
              projectDescription.map((description, index) => <li className='mb-1' key={index}>{description}</li>)
            }
          </ul>
          <div className="card-actions justify-end">
            <Link className='btn' to={`/project/details/${project._id}`}>Details</Link>
            <a className="btn" href={live} target={`_blank`}>Live Site</a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;