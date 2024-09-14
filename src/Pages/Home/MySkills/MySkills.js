import React from "react";

const MySkills = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "Redux",
    "Ant Design",
    "Material UI",
    "ExpressJS",
    "NodeJS",
    "MongoDB",
    "Mongoose",
    "PostgreSQL",
    "Prisma",
    "TailwindCSS",
    "REST APIs",
    "HTML",
    "CSS",
    "Styled Components",
    "Bootstrap",
    "React-Router-Dom",
  ];

  return (
    <div className="m-2 lg:m-0">
      <p className="text-2xl font-bold mb-6 text-center uppercase">
        <span className="text-gray-400 font-bold text-3xl">&lt;</span>
        <span>My Skills</span>
        <span className="text-gray-400 font-bold">/</span>
        <span className="text-gray-400 font-bold text-3xl">&gt;</span>
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
        {skills.map((skill, index) => (
          <button
            // className="bg-gray-600 text-white m-1 px-2 rounded-md text-sm"
            className="bg-gray-600 bg-opacity-15 px-4 py-3 rounded-lg shadow text-center flex justify-center items-center gap-2"
            key={index}
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
