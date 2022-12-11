import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();

  const { data: projects, isLoading } = useQuery({
    queryKey: ["project"],
    queryFn: async () => {
      const res = await axios.get("fakeProjectData");
      const data = await res.data;
      return data;
    }
  });

  return (
    <div>
      <h2>Project Details</h2>
    </div>
  );
};

export default ProjectDetails;