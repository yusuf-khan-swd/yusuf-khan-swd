import React from "react";

const MyEducation = () => {
  return (
    <div className="m-2 lg:m-0">
      <p className="text-2xl font-bold mb-6 text-center uppercase">
        <span className="text-gray-400 font-bold text-3xl">&lt;</span>
        <span>My Education</span>
        <span className="text-gray-400 font-bold"> /</span>
        <span className="text-gray-400 font-bold text-3xl">&gt;</span>
      </p>

      <div className="grid grid-cols-1 gap-4">
        <div className="p-8 text-center border border-gray-600 rounded-lg shadow-lg w-full lg:w-[60%] mx-auto">
          <p className="mb-2">2017-2022</p>
          <p className="mb-2 font-semibold text-2xl">
            Diploma In Computer Technology
          </p>
          <p>Chittagong Polytechnic Institute, Chittagong</p>
        </div>
        <div className="p-8 text-center border border-gray-600 rounded-lg shadow-lg w-full lg:w-[60%] mx-auto">
          <p className="mb-2">2017</p>
          <p className="mb-2 font-semibold text-2xl">
            Secondary School Certificate
          </p>
          <p>
            Hossain Ahmed Chowdhury City Corporation School & College,
            Chittagong
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyEducation;
