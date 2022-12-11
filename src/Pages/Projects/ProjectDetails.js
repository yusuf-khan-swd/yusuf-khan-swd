import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { PhotoView } from 'react-photo-view';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const ProjectDetails = () => {
  const { id } = useParams();

  const { data: project, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axios.get(`https://yusuf-khan-swd-server.vercel.app/projects/${id}`);
      const data = await res.data;
      return data;
    }
  });

  if (isLoading) {
    return <Loading></Loading>
  }

  console.log(project);

  const { name, img, live, description } = project;
  const projectDescription = description;

  return (
    <div className='container mx-auto my-16'>
      <div className='max-w-6xl mx-auto'>
        <div className="card shadow-xl border border-slate-600 h-full m-3 lg:m-0">
          <figure className='w-full'>
            <PhotoView src={img}>
              <img className='w-full h-full' src={img} alt={name} />
            </PhotoView>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <ul className='text-lg list-disc ml-4 grid'>
              {
                projectDescription.map((description, index) => <li className='mb-1' key={index}>{description}</li>)
              }
            </ul>
            <div className="card-actions justify-end">
              <div>
                <a className='btn' href="https://github.com/yusuf-khan-swd">Github Link</a>
              </div>
              <div>
                <a className="btn" href={live} target={`_blank`}>Live Site</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;