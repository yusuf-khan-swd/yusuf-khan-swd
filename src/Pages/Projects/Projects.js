import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import Loading from "../Shared/Loading/Loading";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axios.get(
        "https://yusuf-khan-swd-server.vercel.app/projects"
      );
      const data = await res.data;
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto mt-12">
      <h2 className="text-2xl font-bold ml-3 text-center mb-8 uppercase">
        <span className="text-gray-400 font-bold text-3xl">&lt;</span>
        <span>My Projects</span>
        <span className="text-gray-400 font-bold">/</span>
        <span className="text-gray-400 font-bold text-3xl">&gt;</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
