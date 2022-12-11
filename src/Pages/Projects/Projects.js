import React, { useEffect, useState } from 'react';
import { PhotoProvider } from 'react-photo-view';
import ProjectCard from './ProjectCard';
import 'react-photo-view/dist/react-photo-view.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);

  useEffect(() => {
    setIsDataLoading(true);
    fetch("fakeProjectData.json")
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setIsDataLoading(false);
      })
  }, [isDataLoading]);

  if (isDataLoading) {
    return <h2 className='text-3xl font-bold'>Loading....</h2>
  }

  return (
    <div className='container mx-auto mt-8'>
      <h2 className="text-4xl font-bold ml-3 text-center mb-8">Some of My Projects</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
        <PhotoProvider>
          {
            projects.map(project => <ProjectCard key={project._id} project={project}></ProjectCard>)
          }
        </PhotoProvider>
      </div>
    </div>
  );
};

export default Projects;