import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const ProjectDetails = () => {
  const { id } = useParams();

  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch("fakeProjectData.json");
      const data = await res.json();
      return data;
    }
  });

  if (isLoading) {
    return <Loading></Loading>
  }

  console.log(projects);

  return (
    <div>
      <h2>Project Details</h2>
    </div>
  );
};

export default ProjectDetails;