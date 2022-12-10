import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const DisplayError = () => {
  const error = useRouteError();

  return (
    <section>
      <div className='flex items-center h-screen bg-white'>
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <div>
              <button className='cursor-default'>
                <FaExclamationTriangle className='text-red-500 text-7xl'></FaExclamationTriangle>
              </button>
            </div>
            <h2 className="mb-5 font-extrabold text-9xl text-gray-600">
              <span className="sr-only">Error</span>{error.status}
            </h2>
            <p className='text-red-600 font-bold mb-3'>{error.statusText || error.message}</p>
            <p className="text-2xl font-semibold md:text-3xl mb-8">Sorry, we couldn't find this page.</p>
            <Link to="/home" className="px-8 py-1 font-semibold rounded bg-gray-400 text-gray-900 hover:bg-gray-300 mr-2">Go Back</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayError;