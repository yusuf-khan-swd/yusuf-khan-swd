import React from "react";
import { PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const project = useLoaderData();

  const { name, live, github, description, images, technology } = project;
  const projectDescription = description;

  return (
    <div className="container mx-auto my-16">
      <div className="max-w-6xl mx-auto">
        <div className="card shadow-xl border border-slate-600 h-full m-3 lg:m-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
            {images.map((image, index) => (
              <figure key={index} className="w-full cursor-pointer">
                <PhotoView src={image}>
                  <img
                    className="w-full h-full rounded-md border dark:border-none"
                    src={image}
                    alt={name}
                  />
                </PhotoView>
              </figure>
            ))}
          </div>
          <div className="card-body">
            <h2 className="card-title text-3xl mb-3">{name}</h2>
            <ul className="text-lg list-disc ml-4 grid">
              {projectDescription.map((description, index) => (
                <li className="mb-1" key={index}>
                  {description}
                </li>
              ))}
            </ul>
            <div>
              <p className="font-bold mb-1 mt-3">Technology Used</p>
              <div className="ml-3">
                {technology.map((tech, index) => (
                  <button
                    className="bg-gray-600 text-white m-1 px-2 rounded-md text-sm"
                    key={index}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="card-actions justify-end p-4">
            <div>
              <a className="btn" href={github} target={`_blank`}>
                Github Link
              </a>
            </div>
            <div>
              <a className="btn" href={live} target={`_blank`}>
                Live Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
