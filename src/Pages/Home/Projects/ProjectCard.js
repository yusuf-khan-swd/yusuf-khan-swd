import React from 'react';

const ProjectCard = ({ project }) => {
  const { name, img, live, description } = project;
  return (
    <div>
      <div className="card card-compact shadow-xl border h-full m-3">
        <figure className='w-full'>
          <img className='w-full h-full' src={img} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <a href={live} className="btn">Live Site</a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;