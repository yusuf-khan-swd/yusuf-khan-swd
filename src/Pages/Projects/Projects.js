import React from 'react';
import { PhotoProvider } from 'react-photo-view';
import ProjectCard from './ProjectCard';
import 'react-photo-view/dist/react-photo-view.css';

const Projects = () => {
  const projects = [
    {
      _id: 1,
      name: "Thrift Store",
      img: "https://i.ibb.co/YXr3Ty1/thrift-store.png",
      live: "https://thrift-store-88291.web.app/",
      description: [
        "Create Admin, Seller, and Buyer private routes to give access only to the same user type.",
        "Buyers can buy and pay with the stripe payment method system.",
        "JWT token to verify a user is authorized. Using middleware check a user Admin or Seller.",
        "User can create seller or buyer account"
      ],
    },
    {
      _id: 2,
      name: "Legal Network",
      img: "https://i.ibb.co/R2ZC89S/legal-network.png",
      live: "https://legal-network-a9c8a.web.app/",
      description: [
        "This project has private routes to block an unauthenticated user.",
        "Used JWT token to verify a user is authorized to access this route.",
        "After the user verifies Users can add a service, add a review and delete or modify the review."
      ],
    },
    {
      _id: 3,
      name: "Invest In Knowledge",
      img: "https://i.ibb.co/tJ5Rs48/invest-in-knowledge.png",
      live: "https://invest-in-knowledge.web.app/",
      description: [
        "Users can log in or register with email and password or with Google And Github.",
        "Using routing shows users different components.",
        "Private routing feature to block unauthorized users.",
        "If a user is logged in then the user can access the private route."
      ],
    }
  ];
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