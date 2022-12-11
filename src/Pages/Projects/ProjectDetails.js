import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();

  const { } = useQuery({
    queryKey: ["project"],
    queryFn: async () => {
      const res = axios.get("fakeProjectData")
    }
  });

  return (
    <div>
      <h2>Project Details</h2>
    </div>
  );
};

export default ProjectDetails;